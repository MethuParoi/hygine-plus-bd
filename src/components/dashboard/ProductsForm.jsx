import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { createProduct } from "../../utils/manageProducts";
import Loader from "../../components/ui/Loader/Loader";

function useCreateOrEditProduct() {
  const [isWorking, setIsWorking] = useState(false);

  const handleProductForm = async (productData, id, { onSuccess }) => {
    setIsWorking(true);
    try {
      const data = await createProduct(productData, id);
      onSuccess(data);
    } catch (error) {
      setIsWorking(false);
      console.error(error);
    } finally {
      setIsWorking(false);
    }
  };

  return { isWorking, handleProductForm };
}

function ProductsForm({
  productToEdit = {},
  onClose,
  modalHandler,
  manageAddProduct,
  manageEditProduct,
}) {
  const { isWorking, handleProductForm } = useCreateOrEditProduct();

  const formRef = useRef(null);

  const { product_id: editId, ...editValue } = productToEdit || {};
  const isEditing = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditing ? editValue : {},
  });
  const { errors } = formState;

  // Reset form when productToEdit changes
  useEffect(() => {
    reset(isEditing ? editValue : {});
  }, [productToEdit, reset]);

  // Reset the form and close modal on success
  function handleClose() {
    reset(); // Reset the form fields
    onClose(); // Close the modal
  }

  // Onclick handler for the submit button
  function onSubmit(data) {
    const images = [];
    for (let i = 0; i < 3; i++) {
      if (data[`image${i + 1}`]?.[0]) {
        images.push(data[`image${i + 1}`][0]);
      }
    }

    // Handle details_image
    const detailsImageFile = data.details_image?.[0] || null;

    //filter
    const filteredData = Object.keys(data)
      .filter(
        (key) =>
          key === "product_description" ||
          key === "product_category" ||
          key === "product_specification" ||
          key === "product_name" ||
          key === "product_price" ||
          key === "discountedPrice" ||
          key === "image" ||
          key === "model_number" ||
          key === "details_image" ||
          key === "main_category"
      )
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    // Pass the images array to the handleProductForm function
    handleProductForm(
      { ...filteredData, image: images, details_image: detailsImageFile },
      isEditing ? editId : null,
      {
        onSuccess: (data) => {
          if (isEditing) {
            manageEditProduct(data);
          } else {
            manageAddProduct(data);
          }
          handleClose();
          toast.success("Products added/edited successfully!");
        },
      }
    );
  }

  function onError(errors) {
    console.error(errors);
    toast.error("Error occured!");
  }

  if (isWorking) {
    return (
      <div className="flex justify-center items-center z-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className=" inset-0 bg-opacity-30 flex flex-col justify-center items-center z-50">
      <div className="place-self-end">
        <button
          className="cursor-pointer"
          onClick={() => {
            modalHandler();
            handleClose();
          }}
        >
          <IoCloseSharp className="text-gray-600" size={"3rem"} />
        </button>
      </div>
      <div className="bg-indigo-50 w-[70rem] h-[42rem] py-[1rem] pl-[6rem] shadow-xl rounded-[2rem] border-2 border-indigo-200 overflow-y-scroll">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit, onError)}>
          <h1 className="flex justify-center text-gray-700 text-3xl font-bold mb-[1rem] mr-[6rem]">
            {isEditing ? "Edit Product" : "Add a new Product"}
          </h1>
          {/* title  and category */}
          <div className="mb-[1.5rem] relative flex items-center gap-x-[4rem] pl-[2rem]">
            {/* title */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product title*
              </p>
              <input
                className="w-[15rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                type="text"
                placeholder="Enter product title"
                id="product_name"
                disabled={isWorking}
                {...register("product_name", {
                  required: "Product title is required",
                })}
              />
              {errors.product_name && (
                <p className="text-red-500 absolute">
                  {errors.product_name.message?.toString() || ""}
                </p>
              )}
            </div>
            {/* main category */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product category*
              </p>
              <select
                className="w-[15rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Select a category"
                id="main_category"
                disabled={isWorking}
                {...register("main_category", {
                  required: "Product category is required",
                })}
              >
                <option value="">Select product category</option>
                <option value="bathware">Bathware</option>
                <option value="kitchenware">Kitchenware</option>
              </select>
              {errors.main_category && (
                <p className="text-red-500 absolute">
                  {errors.main_category.message?.toString() || ""}
                </p>
              )}
            </div>
            {/* category */}
            <div className=" relative">
              <p className="text-gray-600 font-semibold text-lg">
                Sub category*
              </p>
              <input
                className="w-[15rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Enter sub category"
                type="text"
                id="product_category"
                disabled={isWorking}
                {...register("product_category", {
                  required: "Product category is required",
                  onChange: (e) => {
                    const value = e.target.value.toLowerCase();
                    e.target.value = value;
                  },
                })}
              />
              {errors.product_category && (
                <p className="text-red-500 absolute">
                  {errors.product_category?.message?.toString()}
                </p>
              )}
            </div>
          </div>

          <div className="mb-[1.5rem] relative flex items-center gap-x-[4rem] pl-[2rem]">
            {/* product description */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Description of product*
              </p>
              <textarea
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Enter product description"
                id="product_description"
                defaultValue=""
                disabled={isWorking}
                {...register("product_description", {
                  required: "Product description is required",
                })}
              />
              {errors.product_description && (
                <p className="text-red-500 absolute">
                  {errors.product_description?.message?.toString()}
                </p>
              )}
            </div>

            {/* specification */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product specifications (comma seperated ",")*
              </p>
              <input
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Enter product specifications"
                type="text"
                id="product_specification"
                disabled={isWorking}
                {...register("product_specification", {
                  required: "Product specifications is required",
                })}
              />
              {errors.product_specification && (
                <p className="text-red-500 absolute">
                  {errors.product_specification.message?.toString() || ""}
                </p>
              )}
            </div>
          </div>

          {/* model, main category, details img */}
          <div className="mb-[1.5rem] relative flex items-center gap-x-[3rem] pl-[2rem]">
            <div className=" relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product price*
              </p>
              <input
                className="w-[15rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Enter product price"
                type="number"
                id="product_price"
                disabled={isWorking}
                {...register("product_price", {
                  required: "Product price is required",
                })}
              />
              {errors.product_price && (
                <p className="text-red-500 absolute">
                  {errors.product_price?.message?.toString()}
                </p>
              )}
            </div>

            {/*model */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product model number*
              </p>
              <input
                className="w-[15rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                placeholder="Enter product model number"
                type="text"
                id="model_number"
                disabled={isWorking}
                {...register("model_number", {
                  required: "Product title is required",
                })}
              />
              {errors.model_number && (
                <p className="text-red-500 absolute">
                  {errors.model_number.message?.toString() || ""}
                </p>
              )}
            </div>
            {/* details image */}
            <div className="relative">
              <p className="text-gray-600 font-semibold text-lg">
                Product banner photo
              </p>
              <input
                className="text-[1rem] rounded-sm font-medium file:text-gray-100 file:mt-[.5rem] file:px-3 file:py-2 file:mr-3 file:rounded-lg file:border-none file:text-brand-50 file:bg-blue-400 file:cursor-pointer file:transition-colors file:duration-200 hover:file:bg-brand-700 bg-gray-50 text-gray-600 w-[16.5rem] h-[3.5rem] rounded-[12rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md ml-[1.5rem]"
                type="file"
                id="details_image"
                accept="image/*"
                {...register("details_image", {
                  required: isEditing
                    ? false
                    : "Product details photo is required", // Validation for required field
                })}
              />
              {errors.details_image && (
                <p className="text-red-500 absolute">
                  {errors.details_image?.message?.toString()}
                </p>
              )}
            </div>
          </div>

          {/* photo */}
          <div className="mb-[3.5rem] relative pl-[1rem]">
            <div className="flex items-center justify-around pr-[6rem]">
              <p className="text-gray-600 font-semibold text-lg">
                Product photo 1
              </p>
              <p className="text-gray-600 font-semibold text-lg">
                Product photo 2
              </p>
              <p className="text-gray-600 font-semibold text-lg">
                Product photo 3
              </p>
            </div>
            {[...Array(3)].map((_, index) => (
              <input
                key={index}
                className="text-[1rem] rounded-sm font-medium file:text-gray-100 file:mt-[.5rem] file:px-3 file:py-2 file:mr-3 file:rounded-lg file:border-none file:text-brand-50 file:bg-blue-400 file:cursor-pointer file:transition-colors file:duration-200 hover:file:bg-brand-700 bg-gray-50 text-gray-600 w-[16.5rem] h-[3.5rem] rounded-[12rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md ml-[1.5rem]"
                type="file"
                id={`image${index + 1}`}
                accept="image/*"
                {...register(`image${index + 1}`, {
                  required: isEditing
                    ? false
                    : index === 0 && "At least one product photo is required",
                })}
              />
            ))}
            {errors.image1 && (
              <p className="text-red-500 absolute">
                {errors.image1?.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <input type="submit" className="hidden" />
          </div>
          <div className="flex items-center justify-center gap-x-6 mr-[8rem]">
            <Button
              handleClick={() => {
                if (formRef.current) {
                  handleSubmit(onSubmit)();
                }
              }}
              type={"primary"}
              label={isEditing ? "Edit product" : "Add a new Product"}
              disabled={isWorking}
            />
            <Button label={"Cancel"} handleClick={onClose} type="reset" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsForm;

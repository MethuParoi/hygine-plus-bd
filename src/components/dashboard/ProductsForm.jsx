"use client";

import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { createProduct } from "../../utils/manageProducts";

function useCreateOrEditProduct() {
  const [isWorking, setIsWorking] = useState(false);

  const handleProductForm = async (productData, id, { onSuccess }) => {
    setIsWorking(true);
    try {
      const data = await createProduct(productData, id);
      onSuccess(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsWorking(false);
    }
  };

  return { isWorking, handleProductForm };
}

function ProductsForm({ productToEdit = {}, onClose, modalHandler }) {
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

    //filter
    const filteredData = Object.keys(data)
      .filter(
        (key) =>
          key === "product_description" ||
          key === "product_category" ||
          key === "product_name" ||
          key === "product_price" ||
          key === "discountedPrice" ||
          key === "image"
      )
      .reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
      }, {});

    // Pass the images array to the handleProductForm function
    handleProductForm(
      { ...filteredData, image: images },
      isEditing ? editId : null,
      {
        onSuccess: (data) => {
          handleClose();
          toast.success("Products added/edited successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
      }
    );
  }

  function onError(errors) {
    console.error(errors);
    toast.error("Error occured!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
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
      <div className="bg-gray-200 w-[70rem] h-[36rem] py-[2rem] pl-[6rem] shadow-xl rounded-[2rem] border-2 border-gray-200">
        <form ref={formRef} onSubmit={handleSubmit(onSubmit, onError)}>
          <h1 className="flex justify-center text-gray-700 text-3xl font-bold mb-[2rem] mr-[6rem]">
            {isEditing ? "Edit Product" : "Add a new Product"}
          </h1>
          {/* title  and category */}
          <div className="mb-[2rem] relative flex items-center gap-x-[4.7rem]">
            {/* title */}
            <div className="relative">
              <p className="text-gray-600 font-medium">Product title*</p>
              <input
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                type="text"
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
            {/* category */}
            <div className=" relative">
              <p className="text-gray-600 font-medium">Product Category*</p>
              <input
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
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

          <div className="mb-[2rem] relative flex items-center gap-x-[4.7rem]">
            <div className=" relative">
              <p className="text-gray-600 font-medium">Product price*</p>
              <input
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
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

            <div className="relative">
              <p className="text-gray-600 font-medium">
                Description of product*
              </p>
              <textarea
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
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

            {/* <div className=" relative">
              <p className="text-gray-600 font-medium">
                Product price (with discount)*
              </p>
              <input
                className="w-[25rem] h-[3.5rem] rounded-[1rem] border-2 border-gray-400 px-[1rem] mt-[1rem] shadow-md bg-gray-50 text-gray-600"
                type="number"
                id="discountedPrice"
                disabled={isWorking}
                {...register("discountedPrice", {
                  required: "Product price is required",
                })}
              />
              {errors.discountedPrice && (
                <p className="text-red-500 absolute">
                  {errors.discountedPrice?.message?.toString()}
                </p>
              )}
            </div> */}
          </div>

          {/* photo */}
          <div className="mb-[3.5rem] relative">
            <p className="text-gray-600 font-medium">Product photos</p>
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

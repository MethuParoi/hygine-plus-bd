import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

function ProductsTable({ productData, onEditProduct, onDeleteProduct }) {
  const [popupVisible, setPopupVisible] = useState(null);

  function togglePopup(productId) {
    setPopupVisible((prev) => (prev === productId ? null : productId));
  }

  return (
    <div className="py-[.5rem] rounded-xl w-full">
      {/* row data */}
      {productData
        .slice()
        .reverse()
        .map((product) => {
          const images = product.image ? product.image.split(",") : [];
          return (
            <div
              key={product.product_id}
              className="grid grid-cols-5 max-w-[110rem] lg:w-full gap-x-4 gap-y-2 justify-items-center cursor-pointer bg-gray-200 my-[2rem] py-[1rem] rounded-2xl relative"
            >
              <div className=" flex items-center justify-center">
                {images.map((img, index) => (
                  <img
                    className="rounded-md w-[8rem] h-[5rem] mx-[.5rem] border-2 border-gray-400"
                    key={index}
                    src={img}
                    alt={product.productTitle}
                    width={100}
                    height={100}
                  />
                ))}
              </div>
              <div>
                <h1 className="text-[1.6rem] font-medium text-gray-700">
                  {product.product_name}
                </h1>
              </div>
              <div>
                <h1 className="text-[1.6rem] font-medium text-gray-700">
                  {product.product_category || "N/A"}
                </h1>
              </div>

              <div>
                <h1 className="text-[1.6rem] font-medium text-gray-700 line-clamp-1">
                  {product.product_description}
                </h1>
              </div>
              <div>
                <h1 className="text-[1.6rem] font-medium text-gray-700">
                  ৳{product.product_price}
                </h1>
              </div>
              <div className="flex items-center gap-x-[4rem]">
                <div
                  onClick={() => togglePopup(product.product_id)}
                  className="absolute top-3 right-4 cursor-pointer"
                >
                  <PiDotsThreeOutlineVerticalBold className="text-[2rem] text-gray-600" />
                  {popupVisible === product.product_id && (
                    <div className="absolute top-12 right-4 w-[10rem] bg-white shadow-md rounded-md z-10">
                      <ul>
                        <li
                          onClick={() => onEditProduct(product)}
                          className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-x-3"
                        >
                          <MdModeEditOutline className="text-[2rem] text-gray-700" />
                          <p className=" text-gray-700">Edit</p>
                        </li>
                        <li
                          onClick={() => onDeleteProduct(product.product_id)}
                          className="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-x-3"
                        >
                          <RiDeleteBin6Fill className="text-[2rem] text-gray-700" />
                          <p className=" text-gray-700">Delete</p>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-start-2 col-end-6 grid-cols-4 place-self-start border-t-2 border-t-gray-300 w-full">
                <h1 className="text-[1.6rem] font-medium text-gray-700 mt-[.8rem] line-clamp-2">
                  <span className="font-bold text-gray-900">
                    specifications:
                  </span>{" "}
                  {product.product_specification || "N/A"}
                </h1>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductsTable;

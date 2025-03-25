import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProducts } from "../utils/apiProduct";
import supabase from "../utils/supabase";
import ProductsTable from "../components/dashboard/ProductsTable";
import Button from "../components/ui/Button";
import ProductsForm from "../components/dashboard/ProductsForm";
import { deleteProduct } from "../utils/manageProducts";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { admin, setAdmin } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [productData, setProductData] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [adminData, setAdminData] = useState([]);
  const [initialProducts, setInitialProducts] = useState("initial");

  //banner modal handler
  const [bannerModal, setBannerModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts(initialProducts) {
      const allProducts = await getProducts(initialProducts);
      setProductData(allProducts);
    }

    fetchProducts(initialProducts);
  }, [initialProducts]);
  // console.log(productData);

  //---------------------------

  // Function to handle adding a new product
  const manageAddProduct = (newProduct) => {
    setProductData((prevData) => [...prevData, newProduct]);
  };

  // Function to handle editing a product
  const manageEditProduct = (updatedProduct) => {
    setProductData((prevData) =>
      prevData.map((product) =>
        product.product_id === updatedProduct.product_id
          ? updatedProduct
          : product
      )
    );
  };

  //-----------------------------------

  useEffect(() => {
    async function fetchProducts(initialProducts) {
      const allProducts = await getProducts(initialProducts);
      setProductData(allProducts);
    }

    fetchProducts(initialProducts);
    // Set up real-time subscription
    const productsChannel = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "products_table" },
        (payload) => {
          // console.log("Received event", payload);
          if (payload.eventType === "INSERT") {
            setProductData((prevProducts) => [...prevProducts, payload.new]);
          } else if (payload.eventType === "UPDATE") {
            setProductData((prevProducts) =>
              prevProducts.map((product) =>
                product.product_id === payload.new.product_id
                  ? payload.new
                  : product
              )
            );
          } else if (payload.eventType === "DELETE") {
            setProductData((prevProducts) =>
              prevProducts.filter(
                (product) => product.product_id !== payload.old.product_id
              )
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(productsChannel);
    };
  }, [initialProducts]);

  //logout admin
  const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const modalHandler = () => {
    console.log("modalHandler");
    if (modal) {
      setProductToEdit(null); // Reset productToEdit when closing the modal
    }
    console.log("modalHandler");
    setModal(!modal);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setModal(true);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setProductData(productData.filter((p) => p.product_id !== productId));
      toast.success("Products deleted succesfuly!");
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product!");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* navbar */}
      <div className="bg-indigo-200 h-16 w-full flex justify-center items-center">
        <h1 className="text-gray-600 text-3xl font-bold">Admin Dashboard</h1>

        <div className="absolute right-10">
          <Button
            label="Logout"
            type="primary"
            handleClick={() => {
              logoutAdmin();
            }}
          />
        </div>
      </div>

      {/* product management   */}
      <div className="h-[87vh] w-[80dvw] overflow-x-scroll  xl:overflow-x-hidden flex flex-col items-center container mx-auto  relative ">
        {/* add product */}
        <div className="mt-[2rem] mb-[1rem] flex items-center justify-end w-full">
          <div className="self-end">
            <Button
              label="Add Product"
              type="add-product"
              handleClick={() => {
                console.log("Button clicked");
                modalHandler();
              }}
            />
          </div>
        </div>
        {/* table header */}
        <div className="max-w-[110rem] grid grid-cols-5 w-full gap-x-4 gap-y-2 justify-items-center bg-indigo-200 py-[.7rem] rounded-2xl mb-[1rem] ">
          <div>
            <h1 className="text-[1.6rem] font-bold text-gray-500">Image</h1>
          </div>
          <div>
            <h1 className="text-[1.6rem] font-bold text-gray-500">
              Product Name
            </h1>
          </div>
          <div>
            <h1 className="text-[1.6rem] font-bold text-gray-500">Category</h1>
          </div>
          <div>
            <h1 className="text-[1.6rem] font-bold text-gray-500">
              Description
            </h1>
          </div>
          <div>
            <h1 className="text-[1.6rem] font-bold text-gray-500">Price</h1>
          </div>
        </div>
        <div
          className={`${
            modal
              ? "opacity-50"
              : "bg-indigo-50 px-[2rem] max-h-[80vh] overflow-y-auto"
          } flex flex-col items-center rounded-2xl`}
        >
          <ProductsTable
            productData={productData}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
        <div className="mt-[2rem] flex items-center justify-end w-full">
          {/* <div>
            <Button
              label="Add Product"
              type="primary"
              handleClick={() => {
                console.log("Button clicked");
                modalHandler();
              }}
            />
          </div> */}
          <div className="self-end">
            <Button
              label="View All Product"
              type="primary"
              handleClick={() => setInitialProducts("all")}
            />
          </div>
        </div>
        {modal && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-10 z-50">
            <ProductsForm
              manageAddProduct={manageAddProduct}
              manageEditProduct={manageEditProduct}
              modalHandler={modalHandler}
              productToEdit={productToEdit}
              onClose={modalHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

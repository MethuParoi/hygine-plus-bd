import { AuthContext } from "../../provider/AuthProvider";
import { getProducts } from "../../utils/apiProduct";
import SortButton from "./SortButton";
import { useContext, useEffect, useState } from "react";

function SortProduct() {
  const [categories, setCategories] = useState(new Set(["all"]));
  const { selectedCategory, setSelectedCategory } = useContext(AuthContext);

  //fetch categories
  async function fetchCategory() {
    const products = await getProducts();
    setCategories(
      (prevCategories) =>
        new Set([
          ...prevCategories,
          ...products.map((item) => item.product_category),
        ])
    );
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  // Convert categories to an array of Option objects
  const categoryOptions = Array.from(categories).map((category) => ({
    label: category.charAt(0).toUpperCase() + category.slice(1), //
    value: category,
  }));

  const handleCategoryChange = (value) => {
    setSelectedCategory(value); // Update the selected category
    console.log("Selected category:", value);
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold text-gray-600">Sort Products</h1>
      <div className="xl:border-t-2 border-gray-300 md:mr-[2rem] pt-[2rem] flex flex-row gap-x-2 flex-wrap lg:gap-x-0 lg:flex-col gap-y-2 lg:gap-y-0 justify-center items-center">
        {categoryOptions.map((category, index) => (
          <SortButton
            key={index}
            options={category}
            isSelected={selectedCategory === category.value} // Pass selected state
            onChange={handleCategoryChange}
          />
        ))}
      </div>
    </div>
  );
}

export default SortProduct;

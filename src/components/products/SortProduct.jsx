import { getProducts } from "../../utils/apiProduct";
import SortButton from "./SortButton";
import { useEffect, useState } from "react";

function SortProduct() {
  const [categories, setCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState("");

  //fetch categories
  async function fetchCategory() {
    const category = await getProducts();
    setCategories(new Set(category.map((item) => item.product_category)));
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
      <div className="xl:border-t-2 border-gray-300 mr-[2rem] pt-[2rem] flex flex-col gap-y-6 justify-center items-center">
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

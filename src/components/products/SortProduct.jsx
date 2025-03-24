import SortIndividual from "./SortIndividual";
import { getProducts } from "../../utils/apiProduct";
import SortButton from "./SortButton";
import { useEffect, useState } from "react";

function SortProduct() {
  const [categories, setCategories] = useState(new Set());

  //   const selectedCategories = useSelector(
  //     (state) => state.sortProduct.selectedOptions
  //   );

  //fetch categories
  async function fetchCategory() {
    const category = await getProducts();
    setCategories(new Set(category.map((item) => item.product_category)));
  }

  useEffect(() => {
    fetchCategory();
    console.log("categories:", categories);
  }, []);

  // Convert categories to an array of Option objects
  const categoryOptions = Array.from(categories).map((category) => ({
    label: category,
    value: category,
  }));

  return (
    <div>
      <h1>Sort Products</h1>
      <div className="xl:border-t-2 border-gray-300 mr-[2rem] pt-[1rem]">
        <SortButton label={"Sort by Category"} options={categories} />
      </div>
    </div>
  );
}

export default SortProduct;

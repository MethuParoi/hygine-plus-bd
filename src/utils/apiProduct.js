import supabase from "./supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products_table").select("*");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }
  // console.log(data);
  return data;
}

export async function getSortedProducts(sort) {
  sort = sort.toLowerCase();
  if (sort === "all") {
    return getProducts();
  }
  const { data, error } = await supabase
    .from("products_table")
    .select("*")
    .eq("product_category", sort);
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }
  return data;
}

export async function getCategorizedProducts(sort) {
  if (sort === "all" || sort === null) {
    return getProducts();
  }
  const { data, error } = await supabase
    .from("products_table")
    .select("*")
    .eq("main_category", sort);
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }
  return data;
}

export async function getRecommendedProducts(sort) {
  if (sort === "all" || sort === null) {
    return getProducts();
  }
  const { data, error } = await supabase
    .from("products_table")
    .select("*")
    .eq("main_category", sort);
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching productss");
  }
  return data;
}

export async function getProductDetails(productId) {
  const { data, error } = await supabase
    .from("products_table")
    .select("*")
    .eq("product_id", productId);
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching product details");
  }
return data;
}

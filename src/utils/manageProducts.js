import supabase from "./supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export async function getProducts() {
  const { data, error } = await supabase.from("products_table").select("*");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching products");
  }

  return data;
}

//createProduct and Edit Product function
export async function createProduct(newProduct, id) {
  let imageUrls = [];
  let detailsImageUrl = "";

  if (newProduct.image && newProduct.image.length > 0) {
    for (const image of newProduct.image) {
      const hasImagePath = image?.startsWith?.(supabaseUrl);

      const imageName = hasImagePath
        ? image.split("/").pop()
        : `${Math.floor(Math.random() * 1000)}-${image.name}`.replaceAll(
            "/",
            ""
          );

      const imagePath = hasImagePath
        ? image
        : `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

      imageUrls.push(imagePath);

      if (!hasImagePath) {
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from("product-images")
          .upload(imageName, image);

        if (uploadError) {
          console.error(uploadError);
          throw new Error("An error occurred while uploading the image");
        }
      }
    }
  } else if (id) {
    // If no new images are provided and it's an edit, retain the existing images
    const { data: existingProduct, error: fetchError } = await supabase
      .from("products_table")
      .select("image")
      .eq("product_id", id)
      .single();

    if (fetchError) {
      console.error(fetchError);
      throw new Error("An error occurred while fetching the existing product");
    }

    imageUrls = existingProduct.image ? existingProduct.image.split(",") : [];
  }

  // Handle details_image
  if (newProduct.details_image) {
    const hasDetailsImagePath =
      newProduct.details_image?.startsWith?.(supabaseUrl);

    const detailsImageName = hasDetailsImagePath
      ? newProduct.details_image.split("/").pop()
      : `${Math.floor(Math.random() * 1000)}-${
          newProduct.details_image.name
        }`.replaceAll("/", "");

    detailsImageUrl = hasDetailsImagePath
      ? newProduct.details_image
      : `${supabaseUrl}/storage/v1/object/public/product-images/${detailsImageName}`;

    if (!hasDetailsImagePath) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(detailsImageName, newProduct.details_image);

      if (uploadError) {
        console.error(uploadError);
        throw new Error("An error occurred while uploading the details image");
      }

      // **Update detailsImageUrl after successful upload**
      detailsImageUrl = `${supabaseUrl}/storage/v1/object/public/product-images/${detailsImageName}`;
    }
  }

  let query = supabase.from("products_table");
  let data, error;

  if (!id) {
    ({ data, error } = await query
      .insert([
        {
          ...newProduct,
          image: imageUrls.join(","),
          details_image: detailsImageUrl,
        },
      ])
      .select()
      .single());
  } else {
    ({ data, error } = await query
      .update({
        ...newProduct,
        image: imageUrls.join(","),
        details_image: detailsImageUrl,
      })
      .eq("product_id", id)
      .select()
      .single());
  }

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating the Product");
  }

  return data;
}

export async function deleteProduct(id) {
  // Fetch the product to get the image path before deleting it
  const { data: product, error: fetchError } = await supabase
    .from("products_table")
    .select("image")
    .eq("product_id", id)
    .single();

  if (fetchError) {
    console.error(fetchError);
    throw new Error("An error occurred while fetching the product");
  }

  // Delete the product from the database
  const { error: deleteError } = await supabase
    .from("products_table")
    .delete()
    .eq("product_id", id);

  if (deleteError) {
    console.error(deleteError);
    throw new Error("An error occurred while deleting the product");
  }

  // If the product had an associated image, delete it from the Supabase storage
  if (product?.image) {
    const imageName = product.image.split("/").pop(); // Extract the image name from the URL

    const { error: storageError } = await supabase.storage
      .from("product-images")
      .remove([imageName]);

    if (storageError) {
      console.error(storageError);
      throw new Error("An error occurred while deleting the product image");
    }
  }
  //   const { error } = await supabase.from("products_table").delete().eq("id", id);
  //   if (error) {
  //     console.error(error);
  //     throw new Error("An error occurred while deleting the product");
  //   }

  // Delete the details_image from the Supabase storage
  if (product?.details_image) {
    const detailsImageName = product.details_image.split("/").pop(); // Extract the image name from the URL

    const { error: storageError } = await supabase.storage
      .from("product-images")
      .remove([detailsImageName]);

    if (storageError) {
      console.error(storageError);
      throw new Error("An error occurred while deleting the details image");
    }
  }
}

  


//-------------------------------------------------

// import supabase from "./supabase";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

// export async function getProducts() {
//   const { data, error } = await supabase.from("products_table").select("*");
//   if (error) {
//     console.error(error);
//     throw new Error("An error occurred while fetching products");
//   }

//   return data;
// }

// //createProduct and Edit Product function
// export async function createProduct(newProduct, id) {
//   let imageUrls = [];
//   let detailsImageUrl = ""; // Added for details_image

//   // Handle product images
//   if (newProduct.image && newProduct.image.length > 0) {
//     for (const image of newProduct.image) {
//       const hasImagePath = image?.startsWith?.(supabaseUrl);

//       const imageName = hasImagePath
//         ? image.split("/").pop()
//         : `${Math.floor(Math.random() * 1000)}-${image.name}`.replaceAll(
//             "/",
//             ""
//           );

//       const imagePath = hasImagePath
//         ? image
//         : `${supabaseUrl}/storage/v1/object/public/product-images/${imageName}`;

//       imageUrls.push(imagePath);

//       if (!hasImagePath) {
//         const { data: uploadData, error: uploadError } = await supabase.storage
//           .from("product-images")
//           .upload(imageName, image);

//         if (uploadError) {
//           console.error(uploadError);
//           throw new Error("An error occurred while uploading the image");
//         }
//       }
//     }
//   } else if (id) {
//     // If no new images are provided and it's an edit, retain the existing images
//     const { data: existingProduct, error: fetchError } = await supabase
//       .from("products_table")
//       .select("image, details_image") // Fetch details_image as well
//       .eq("product_id", id)
//       .single();

//     if (fetchError) {
//       console.error(fetchError);
//       throw new Error("An error occurred while fetching the existing product");
//     }

//     imageUrls = existingProduct.image ? existingProduct.image.split(",") : [];
//     detailsImageUrl = existingProduct.details_image || ""; // Retain existing details_image
//   }

//   // Handle details_image
//   if (newProduct.details_image) {
//     const hasDetailsImagePath =
//       newProduct.details_image?.startsWith?.(supabaseUrl);

//     const detailsImageName = hasDetailsImagePath
//       ? newProduct.details_image.split("/").pop()
//       : `${Math.floor(Math.random() * 1000)}-${
//           newProduct.details_image.name
//         }`.replaceAll("/", "");

//     detailsImageUrl = hasDetailsImagePath
//       ? newProduct.details_image
//       : `${supabaseUrl}/storage/v1/object/public/product-images/${detailsImageName}`;

//     if (!hasDetailsImagePath) {
//       const { data: uploadData, error: uploadError } = await supabase.storage
//         .from("product-images")
//         .upload(detailsImageName, newProduct.details_image);

//       if (uploadError) {
//         console.error(uploadError);
//         throw new Error("An error occurred while uploading the details image");
//       }
//     }
//   }

//   let query = supabase.from("products_table");
//   let data, error;

//   if (!id) {
//     ({ data, error } = await query
//       .insert([
//         {
//           ...newProduct,
//           image: imageUrls.join(","),
//           details_image: detailsImageUrl,
//         },
//       ]) // Include details_image
//       .select()
//       .single());
//   } else {
//     ({ data, error } = await query
//       .update({
//         ...newProduct,
//         image: imageUrls.join(","),
//         details_image: detailsImageUrl,
//       }) // Include details_image
//       .eq("product_id", id)
//       .select()
//       .single());
//   }

//   if (error) {
//     console.error(error);
//     throw new Error("An error occurred while creating the Product");
//   }

//   return data;
// }

// export async function deleteProduct(id) {
//   // Fetch the product to get the image path before deleting it
//   const { data: product, error: fetchError } = await supabase
//     .from("products_table")
//     .select("image, details_image") // Fetch details_image as well
//     .eq("product_id", id)
//     .single();

//   if (fetchError) {
//     console.error(fetchError);
//     throw new Error("An error occurred while fetching the product");
//   }

//   // Delete the product from the database
//   const { error: deleteError } = await supabase
//     .from("products_table")
//     .delete()
//     .eq("product_id", id);

//   if (deleteError) {
//     console.error(deleteError);
//     throw new Error("An error occurred while deleting the product");
//   }

//   // If the product had associated images, delete them from the Supabase storage
//   if (product?.image) {
//     const imageNames = product.image
//       .split(",")
//       .map((url) => url.split("/").pop()); // Extract image names from URLs

//     const { error: storageError } = await supabase.storage
//       .from("product-images")
//       .remove(imageNames);

//     if (storageError) {
//       console.error(storageError);
//       throw new Error("An error occurred while deleting the product images");
//     }
//   }

//   // Delete the details_image from the Supabase storage
//   if (product?.details_image) {
//     const detailsImageName = product.details_image.split("/").pop(); // Extract the image name from the URL

//     const { error: storageError } = await supabase.storage
//       .from("product-images")
//       .remove([detailsImageName]);

//     if (storageError) {
//       console.error(storageError);
//       throw new Error("An error occurred while deleting the details image");
//     }
//   }
// }

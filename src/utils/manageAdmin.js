import supabase from "./supabase";

export async function validateAdmin(email, password) {
  try {
    // Query the admin_table to find a matching admin
    const { data: admin_data, error } = await supabase
      .from("admin_table")
      .select("admin_username, admin_password")
      .eq("admin_username", email)
      .single();

    if (error) {
      console.error("Error fetching admin:", error);
      throw new Error("Failed to validate admin");
    }

    // Validate the password
    if (admin_data && admin_data.admin_password === password) {
      return true; // Admin is valid
    } else {
      return false; // Invalid credentials
    }
  } catch (err) {
    console.error("Validation error:", err);
    return false;
  }
}

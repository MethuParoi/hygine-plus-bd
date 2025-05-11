import { useState, useRef, useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { validateAdmin } from "../utils/manageAdmin";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, setAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  //toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    // e.preventDefault();

    try {
      const isAdmin = await validateAdmin(data.email, data.password);
      if (isAdmin) {
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
        navigate("/admin/dashboard");
        toast.success("Admin logged in successfully!");
      }
      if (!isAdmin) toast.error("Invalid Admin Credentials");
    } catch (error) {
      toast.error(error.message);
      console.error("Error logging in:", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* email input */}
          <div className="relative mb-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
            {errors.email && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.email.message}
              </span>
            )}
          </div>
          {/* password input */}
          <div className="relative mb-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",

                // pattern: {
                //   value: /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6,}$/,
                //   message:
                //     "must contain one uppercase and lowercase letter",
                // },
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-4 top-5 flex items-center text-gray-600 hover:text-gray-800 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <span className="text-red-500 absolute bottom-[-25px] left-0">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 cursor-pointer"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col gap-y-3 items-center justify-center">
          <Link to="/" className="text-blue-500 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

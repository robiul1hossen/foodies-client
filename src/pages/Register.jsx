import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, loginWithGoogle, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  // initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit handler
  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;

      //  displayName: "Jane Q. User", photoURL
      const updatedInfo = {
        displayName: data.name,
        photoURL: data.photoURL,
      };

      createUser(email, password)
        .then(() => {
          updateUser(updatedInfo)
            .then(() => {
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error("Registration failed:", error);
      // alert("Something went wrong!");
    }
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              {...register("photoURL", { required: "Photo URL is required" })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full relative overflow-hidden px-5 py-3 bg-white text-black border border-black rounded-lg font-semibold group transition-all duration-300">
            {/* background overlay */}
            <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

            {/* text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Sing Up
            </span>
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="mt-2 cursor-pointer w-full relative overflow-hidden px-5 py-3 bg-white text-black border border-black rounded-lg font-semibold group transition-all duration-300">
          {/* background overlay */}
          <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>

          {/* text */}
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Login With Google
          </span>
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline cursor-pointer">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;

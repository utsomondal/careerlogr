import { useState } from "react";
import { Link } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import PasswordStrength from "./PasswordStrength";

const getStrength = (val) => {
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  return score;
};

const RegisterForm = ({ onSubmit, isSubmitting }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const password = useWatch({ name: "password", control, defaultValue: "" });
  const strength = getStrength(password);

  return (
    <div className="w-full max-w-md bg-dark-800/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Create your account</h2>
        <p className="text-gray-400 text-sm">Takes less than a minute</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-xs text-gray-400 ml-1">Full Name</label>
          <div className="relative mt-1">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              {...register("name", { required: "Name required" })}
              placeholder="John Doe"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />
          </div>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs text-gray-400 ml-1">Email</label>
          <div className="relative mt-1">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              {...register("email", { required: "Email required" })}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="text-xs text-gray-400 ml-1">Password</label>
          <div className="relative mt-1">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {errors.password ? (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.password.message}
            </p>
          ) : (
            <p className="text-gray-500 text-xs mt-1 ml-1">
              At least 8 characters
            </p>
          )}
          <PasswordStrength strength={strength} />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || strength < 2}
          className="w-full py-3 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Account"}
        </button>

        <p className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-accent hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;

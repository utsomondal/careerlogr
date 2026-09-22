import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = ({
  onSubmit,
  isSubmitting,
  onGuestLogin,
  isGuestLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  return (
    <div className="w-full max-w-md bg-dark-800/80 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white lg:hidden">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-sm mt-1">Login to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* EMAIL */}
        <div>
          <label className="text-xs text-gray-400 ml-1">Email</label>
          <div className="relative mt-1">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              {...register("email", { required: "Email required" })}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none text-white"
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="text-xs text-gray-400 ml-1">Password</label>

          <div className="relative mt-1">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password required" })}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-accent/40 focus:border-accent outline-none text-white"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {errors.password && (
            <p className="text-red-400 text-xs mt-1 ml-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-xl bg-accent text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-gray-500">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Guest login */}
        <button
          type="button"
          onClick={onGuestLogin}
          disabled={isSubmitting || isGuestLoading}
          className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition disabled:opacity-50"
        >
          {isGuestLoading ? "Loading demo..." : "Try as Guest — no signup"}
        </button>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-accent hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

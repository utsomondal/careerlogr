import { useNavigate } from "react-router";
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import Background from "../components/Background";
import LoginLeft from "../components/Auth/LoginPage/LoginLeft";
import LoginForm from "../components/Auth/LoginPage/LoginForm";
import Logo from "../components/Logo";
import toast from "react-hot-toast";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    setIsSubmitting(true);

    try {
      await loginUser(data);
      await login();

      toast.success("Welcome back 👋", { id: toastId });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(error.message || "Login failed", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden px-4 sm:px-6 lg:px-12">
      <Background />

      <div className="absolute top-6 left-6 z-50">
        <Logo />
      </div>

      <div className="min-h-screen flex items-center pt-24 lg:pt-28">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="hidden lg:block">
            <LoginLeft />
          </div>
          <div className="flex justify-center w-full">
            <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

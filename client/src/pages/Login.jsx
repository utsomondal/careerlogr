import { useNavigate } from "react-router";
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import Background from "../components/Background";
import LoginLeft from "../components/Auth/LoginPage/LoginLeft";
import LoginForm from "../components/Auth/LoginPage/LoginForm";
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
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center relative overflow-hidden">
      <Background />
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <LoginLeft />
        <div className="flex justify-center">
          <LoginForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </div>
  );
};

export default Login;

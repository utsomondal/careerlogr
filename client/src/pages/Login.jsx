import { useNavigate } from "react-router";
import Background from "../components/Background";
import LoginLeft from "../components/Auth/LoginPage/LoginLeft";
import LoginForm from "../components/Auth/LoginPage/LoginForm";
import { useState } from "react";
import apiFetch from "../api/apiFetch";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
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

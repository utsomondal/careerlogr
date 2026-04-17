import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { registerUser } from "../api/auth";
import Background from "../components/Background";
import RegisterLeft from "../components/Auth/RegisterPage/RegisterLeft";
import RegisterForm from "../components/Auth/RegisterPage/RegisterForm";
import toast from "react-hot-toast";
import Logo from "../components/Logo";

const Register = () => {
  const navigate = useNavigate();
  const { fetchUser } = useAuth();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating account...");

    try {
      await registerUser(data);

      await fetchUser();

      toast.success("Account created 🎉", { id: toastId });

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(error.message || "Registration failed", {
        id: toastId,
      });
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
            <RegisterLeft />
          </div>
          <div className="flex justify-center w-full">
            <RegisterForm onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import { useNavigate } from "react-router";
import Background from "../components/Background";
import RegisterLeft from "../components/RegisterPage/RegisterLeft";
import RegisterForm from "../components/RegisterPage/RegisterForm";

const Register = () => {
  // const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    // try {
    //   const res = await fetch("http://localhost:5000/auth/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await res.json();
    //   if (!res.ok) throw new Error(result.message);

    //   localStorage.setItem("token", result.token);
    //   navigate("/dashboard");
    // } catch (err) {
    //   console.error(err.message);
    // }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white flex items-center justify-center relative overflow-hidden">
      <Background />
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <RegisterLeft />
        <div className="flex justify-center">
          <RegisterForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Register;

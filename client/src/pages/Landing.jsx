import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";
import { guestLogin } from "../api/auth";
import img from "../assets/hero-img.png";
import Logo from "../components/Logo";
import Badge from "../components/LandingPage/Badge";
import Stats from "../components/LandingPage/Stats";
import Background from "../components/Background";
import OfferCard from "../components/LandingPage/OfferCard";
import PipelineCard from "../components/LandingPage/PipelineCard";
import toast from "react-hot-toast";

const Landing = () => {
  const navigate = useNavigate();
  const { user, loading, fetchUser } = useAuth();
  const [isGuestLoading, setIsGuestLoading] = useState(false);

  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  const handleGetStarted = () => {
    navigate("/register", { replace: true });
  };

  const handleGuestLogin = async () => {
    const toastId = toast.loading("Entering demo...");
    setIsGuestLoading(true);

    try {
      await guestLogin();
      await fetchUser();
      toast.success("Welcome to the demo 👋", { id: toastId });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(error.message || "Guest login failed", { id: toastId });
    } finally {
      setIsGuestLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 relative overflow-hidden px-4 sm:px-6 lg:px-12">
      <Background />

      <div className="max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12">
          {/* LEFT SIDE */}
          <div className="flex flex-col space-y-6">
            <Logo />
            <Badge />

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-wide text-white uppercase">
              Manage your
              <br />
              job hunt.
              <br />
              <span className="text-accent">Get hired faster.</span>
            </h1>

            <p className="font-body text-[15px] leading-relaxed text-white/50 max-w-md sm:max-w-lg font-light">
              careerlogr helps you stay in control of your job search and track
              applications, manage interviews, and never miss an opportunity.
              Everything in one clean, distraction-free workspace.
            </p>

            <Stats />

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={handleGetStarted}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-[10px] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(91,159,236,0.25)]"
              >
                Get Started
                <IoArrowForward size={18} />
              </button>

              <button
                type="button"
                onClick={handleGuestLogin}
                disabled={isGuestLoading}
                className="flex items-center justify-center px-7 py-3.5 rounded-[10px] font-body font-semibold text-sm tracking-wide border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/25 transition-all duration-200 disabled:opacity-50"
              >
                {isGuestLoading ? "Loading demo..." : "Try Demo"}
              </button>
            </div>

            <Link
              to="/login"
              className="font-body text-sm font-light text-white/30 hover:text-white transition-colors duration-200 w-fit"
            >
              Already have an account? Sign in
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex justify-center">
            <div
              className="absolute -inset-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(91,159,236,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden border border-white/6 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <img
                src={img}
                alt="careerlogr Dashboard"
                className="w-full h-auto block"
              />

              <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-dark-900 to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-14 bg-linear-to-r from-dark-900 to-transparent" />
            </div>

            <div className="hidden lg:block">
              <OfferCard />
              <PipelineCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
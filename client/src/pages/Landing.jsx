import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { useAuth } from "../hooks/useAuth";
import img from "/hero-img.png";
import Logo from "../components/Logo";
import Badge from "../components/LandingPage/Badge";
import Stats from "../components/LandingPage/Stats";
import Background from "../components/Background";
import OfferCard from "../components/LandingPage/OfferCard";
import PipelineCard from "../components/LandingPage/PipelineCard";

const Landing = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) navigate("/dashboard", { replace: true });
  }, [user, loading, navigate]);

  const handleGetStarted = () => {
    user
      ? navigate("/dashboard", { replace: true })
      : navigate("/register", { replace: true });
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
              HireTrack helps you stay in control of your job search and track
              applications, manage interviews, and never miss an opportunity.
              Everything in one clean, distraction-free workspace.
            </p>

            <Stats />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <button
                onClick={handleGetStarted}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-[10px] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(91,159,236,0.25)]"
              >
                Get Started
                <IoArrowForward size={18} />
              </button>

              <Link
                to="/login"
                className="font-body text-sm font-light text-white/30 hover:text-white transition-colors duration-200"
              >
                Already have an account? Sign in
              </Link>
            </div>
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
                alt="HireTrack Dashboard"
                className="w-full h-auto block"
              />

              <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-dark-900 to-transparent" />
              <div className="absolute top-0 left-0 bottom-0 w-14 bg-linear-to-r from-dark-900 to-transparent" />
            </div>

            {/* Floating UI */}
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

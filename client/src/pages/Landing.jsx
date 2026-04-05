import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import img from "/hero-img.png";
import Logo from "../components/Logo";
import Badge from "../components/LandingPage/Badge";
import Stats from "../components/LandingPage/Stats";
import Background from "../components/LandingPage/Background";
import OfferCard from "../components/LandingPage/OfferCard";
import PipelineCard from "../components/LandingPage/PipelineCard";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-12 relative overflow-hidden">
      <Background />
      <div className="max-w-7xl w-full mx-auto grid grid-cols-2 gap-20 items-center relative z-10">
        <div className="flex flex-col">
          <Logo />
          <Badge />

          <h1 className="font-display text-[64px] leading-none tracking-wide text-white mb-6 uppercase">
            Manage your
            <br />
            job hunt.
            <br />
            <span className="text-accent">Get hired faster.</span>
          </h1>

          <p className="font-body text-[15px] leading-relaxed text-white/40 max-w-md mb-10 font-light">
            HireTrack helps you stay in control of your job search and track
            applications, manage interviews, and never miss an opportunity.
            Everything in one clean, distraction-free workspace.
          </p>

          <Stats />

          <div className="flex items-center gap-5">
            <Link
              to="/register"
              className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-7 py-3.5 rounded-[10px] font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(91,159,236,0.25)]"
            >
              Get Started Free
              <IoArrowForward size={18} />
            </Link>
            <Link
              to="/login"
              className="font-body text-sm font-light text-white/30 hover:text-white transition-colors duration-200"
            >
              Already have an account? Sign in
            </Link>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute -inset-10 pointer-events-none"
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

          <OfferCard />

          <PipelineCard />
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { FaInfinity } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="flex items-center mb-11">
      <div className="pr-7">
        <p className="font-display text-3xl text-white tracking-wide leading-none mb-1">
          100%
        </p>
        <p className="font-body text-xs text-white/30 font-light">
          Free & simple
        </p>
      </div>
      <div className="w-px h-8 bg-white/6 mr-7" />
      <div className="pr-7">
        <p className="font-display text-3xl text-white tracking-wide leading-none mb-1">
          2 MIN
        </p>
        <p className="font-body text-xs text-white/30 font-light">Setup time</p>
      </div>
      <div className="w-px h-8 bg-white/6 mr-7" />
      <div>
        <p className="font-display text-3xl text-white tracking-wide leading-none mb-1">
          <FaInfinity className="inline-block" />
        </p>
        <p className="font-body text-xs text-white/30 font-light">
          Job tracking
        </p>
      </div>
    </div>
  );
};

export default Stats;

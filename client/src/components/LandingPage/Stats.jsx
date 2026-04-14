import { FaInfinity } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 sm:mb-11">
      {/* Stat 1 */}
      <div className="pr-0 sm:pr-7">
        <p className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none mb-1">
          100%
        </p>
        <p className="font-body text-xs text-white/30 font-light">
          Free & simple
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 bg-white/6 mr-0 sm:mr-7" />

      {/* Stat 2 */}
      <div className="pr-0 sm:pr-7">
        <p className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none mb-1">
          2 MIN
        </p>
        <p className="font-body text-xs text-white/30 font-light">Setup time</p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-8 bg-white/6 mr-0 sm:mr-7" />

      {/* Stat 3 */}
      <div>
        <p className="font-display text-2xl sm:text-3xl text-white tracking-wide leading-none mb-1">
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

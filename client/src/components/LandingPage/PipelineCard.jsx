const PipelineCard = () => {
  return (
    <div className="hidden lg:block absolute -top-7 -right-6 bg-dark-800/95 border border-white/8 rounded-xl px-4 py-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <p className="font-body text-[11px] font-light text-white/20 mb-2">
        Active pipeline
      </p>

      <div className="flex gap-1.5 flex-wrap">
        <span className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-accent/12 text-accent">
          Applied · 12
        </span>

        <span className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#A78BFA]/12 text-[#A78BFA]">
          Interview · 3
        </span>

        <span className="font-body text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#34D399]/12 text-[#34D399]">
          Offer · 1
        </span>
      </div>
    </div>
  );
};

export default PipelineCard;
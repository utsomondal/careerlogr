const OfferCard = () => {
  return (
    <div className="absolute -bottom-6 -left-8 bg-dark-800/95 border border-white/8 rounded-xl px-4 py-3.5 backdrop-blur-xl flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="w-9 h-9 bg-[#34D399]/10 rounded-lg flex items-center justify-center text-base">
        🎉
      </div>
      <div>
        <p className="font-body text-[11px] font-light text-white/20 mb-0.5">
          Latest update
        </p>
        <p className="font-body text-sm font-semibold text-[#34D399]">
          OFFER RECEIVED · STRIPE
        </p>
      </div>
    </div>
  );
};

export default OfferCard;

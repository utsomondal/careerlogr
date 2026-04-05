const Badge = () => {
  return (
    <div className="flex items-center gap-1.5 w-fit bg-accent/10 border border-accent/30 rounded-full px-3.5 py-1.5 mb-8 backdrop-blur-sm">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
      </span>
      <span className="font-body text-accent text-xs font-medium tracking-wide">
        Designed for modern developers
      </span>
    </div>
  );
};

export default Badge;

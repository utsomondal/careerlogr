const AuthLeftPanel = ({ title, subtitle, features }) => {
  return (
    <div className="w-full max-w-xl mx-auto lg:mx-0 space-y-8 lg:space-y-10">
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white tracking-tight">
        {title}
      </h1>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
          {subtitle}
        </p>
      )}

      {/* FEATURES */}
      {features?.length > 0 && (
        <div className="space-y-4 pt-2">
          {features.map((item, i) => (
            <div key={i} className="flex items-start gap-3 group">
              {/* bullet */}
              <div className="mt-1 w-2 h-2 rounded-full bg-accent/80 group-hover:bg-accent transition-colors" />

              {/* text */}
              <span className="text-gray-400 text-sm sm:text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthLeftPanel;

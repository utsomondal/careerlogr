const AuthLeftPanel = ({ title, subtitle, features }) => {
  return (
    <div className="w-full max-w-xl mx-auto lg:mx-0 space-y-8">
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
        {title}
      </h1>

      {subtitle && <p className="text-gray-300">{subtitle}</p>}

      {features?.length > 0 && (
        <div className="space-y-3">
          {features.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-gray-400 text-sm">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthLeftPanel;

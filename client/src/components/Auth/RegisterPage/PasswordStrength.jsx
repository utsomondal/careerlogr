const PasswordStrength = ({ strength }) => {
  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4].map((lvl) => (
        <div
          key={lvl}
          className={`h-1.5 flex-1 rounded ${
            strength >= lvl ? "bg-accent" : "bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

export default PasswordStrength;

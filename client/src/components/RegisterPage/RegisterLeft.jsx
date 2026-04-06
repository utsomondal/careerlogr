const features = [
  "Never miss an interview",
  "Track every application",
  "Stay focused with clean UI",
];

const RegisterLeft = () => {
  return (
    <div className="w-full max-w-xl mx-auto lg:mx-0 space-y-8">
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
        Stop losing track <br />
        <span className="text-accent">of your job applications.</span>
      </h1>

      <p className="text-gray-300">
        Keep everything in one place — applications, notes, interviews, and
        progress.
      </p>

      <div className="space-y-3">
        {features.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-gray-400 text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterLeft;

import AuthLeftPanel from "../AuthLeftPanel";

const RegisterLeft = () => (
  <div className="space-y-6 lg:pr-10">
    <AuthLeftPanel
      title="Stop losing track of your job applications."
      subtitle="Keep everything in one place — applications, notes, interviews, and progress."
      features={[
        "Never miss an interview",
        "Track every application",
        "Stay focused with clean UI",
      ]}
    />
  </div>
);

export default RegisterLeft;
import AuthLeftPanel from "../AuthLeftPanel";

const LoginLeft = () => (
  <div className="space-y-6 lg:pr-10">
    <AuthLeftPanel
      title="Welcome back!"
      subtitle="Access all your applications and stay on top of your job hunt."
      features={[
        "Quick login",
        "Track pending applications",
        "Clean and distraction-free UI",
      ]}
    />
  </div>
);

export default LoginLeft;
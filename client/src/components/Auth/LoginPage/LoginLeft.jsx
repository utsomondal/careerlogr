import AuthLeftPanel from "../AuthLeftPanel";

const LoginLeft = () => (
  <AuthLeftPanel
    title="Welcome back!"
    subtitle="Access all your applications and stay on top of your job hunt."
    features={[
      "Quick login",
      "Track pending applications",
      "Clean and distraction-free UI",
    ]}
  />
);

export default LoginLeft;

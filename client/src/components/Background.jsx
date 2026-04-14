const Background = () => {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none hidden sm:block opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="fixed inset-0 pointer-events-none opacity-60 sm:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 50%, rgba(91,159,236,0.05) 0%, transparent 65%)",
        }}
      />
    </>
  );
};

export default Background;

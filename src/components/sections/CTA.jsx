import React from "react";

const CTA = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] py-20 text-center"
      id="register"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.05%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      <div className="relative z-10 mx-auto max-w-400 px-5">
        <h2 className="mb-4 text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif]">
          Ready to Hack the Future?
        </h2>
        <p className="mb-8 text-[1.2rem] opacity-90">
          Join us for 48 hours of coding, learning, and innovation. Break a leg!
        </p>
        <a
          href="https://bit.ly/vectorhack2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] bg-white px-8 py-3.5 text-base font-semibold text-[#005b96] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
        >
          <span>Register Now</span>
          <span>→</span>
        </a>
        <p className="mt-4 text-[0.9rem] opacity-80">
          Registration closes on February 6, 2026 at 5:00 PM
        </p>
      </div>
    </section>
  );
};

export default CTA;

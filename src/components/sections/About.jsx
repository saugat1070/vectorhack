import React from "react";
import { statsData } from "../../data";

const About = () => {
  return (
    <section
      className="relative py-15 sm:py-25 bg-[linear-gradient(180deg,#0a0a0f_0%,#12121a_100%)]"
      id="about"
    >
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          About The Hackathon
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          A platform for the convergence of technology and problem-solving
        </p>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-4 text-2xl text-[#4aacd3]">
              What is VectorHack?
            </h3>
            <p className="mb-6 leading-[1.8] text-[#535353]">
              Software Hackathon is a 48-hours long national hackathon organized
              by{" "}
              <strong className="text-[#4aacd3]">
                i-CES (Innovative Computer Engineering Students' Society)
              </strong>
              , as a part of VECTOR at IOE, Pashchimanchal Campus.
            </p>
            <p className="mb-6 leading-[1.8] text-[#535353]">
              This hackathon serves as a platform for the convergence of
              technology and problem-solving. We encourage participants to apply
              modern tools and creative thinking to address real-world
              challenges. Through intense collaboration and innovation, the
              hackathon aims to foster practical learning, teamwork, and the
              development of solutions that create meaningful technological
              impact across various sectors.
            </p>
            <p className="leading-[1.8] text-[#535353]">
              <strong className="text-[#ffdf42]">
                Unique and innovative ideas are highly encouraged!
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {statsData.map((stat, index) => (
              <div
                className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a0f] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#4aacd3]"
                key={index}
              >
                <span className="text-[2.5rem] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#005b96_100%)] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-[#535353]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

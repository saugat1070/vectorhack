import React from "react";
import { themesData } from "../../data";
import { LeafIcon, EducationIcon, HealthIcon, InnovationIcon } from "../Icons";

const getThemeIcon = (iconName) => {
  const icons = {
    leaf: <LeafIcon size={32} />,
    education: <EducationIcon size={32} />,
    health: <HealthIcon size={32} />,
    innovation: <InnovationIcon size={32} />,
  };
  return icons[iconName] || null;
};

const Themes = () => {
  return (
    <section className="relative py-15 sm:py-25" id="themes">
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Hackathon Themes
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          Choose your domain and build solutions that matter
        </p>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {themesData.map((theme) => (
            <div
              className="relative overflow-hidden rounded-[20px] border border-[#2a2a3a] bg-[#12121a] p-8 text-center transition duration-300 before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:origin-left before:scale-x-0 before:bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] before:transition before:duration-300 before:content-[''] hover:-translate-y-2.5 hover:border-[#005b96] hover:shadow-[0_20px_40px_rgba(0,91,150,0.2)] hover:before:scale-x-100"
              key={theme.id}
            >
              <div className="mx-auto mb-6 flex h-17.5 w-17.5 items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-2xl text-white">
                {getThemeIcon(theme.icon)}
              </div>
              <h3 className="mb-3 text-[1.3rem]">{theme.title}</h3>
              <p className="text-[0.95rem] text-[#535353]">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Themes;

import React from "react";
import { rulesData } from "../../data";
import { DocumentIcon, ChartIcon, CodeIcon, HeartIcon } from "../Icons";

const getRuleIcon = (iconName) => {
  const icons = {
    document: <DocumentIcon size={24} />,
    chart: <ChartIcon size={24} />,
    code: <CodeIcon size={24} />,
    heart: <HeartIcon size={24} />,
  };
  return icons[iconName] || null;
};

const Rules = () => {
  return (
    <section className="relative py-15 sm:py-25" id="rules">
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Rules & Guidelines
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          Please read carefully before registering
        </p>

        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {rulesData.map((category) => (
            <div
              className="rounded-[20px] border border-[#2a2a3a] bg-[#12121a] p-8"
              key={category.id}
            >
              <h3 className="mb-6 flex items-center gap-3 text-[1.3rem] text-[#4aacd3]">
                <span className="text-[#4aacd3]">{getRuleIcon(category.icon)}</span>
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.rules.map((rule, index) => (
                  <li
                    key={index}
                    className="relative pl-7 text-[0.95rem] leading-6 text-[#535353] before:absolute before:left-0 before:text-[1.2rem] before:text-[#4aacd3] before:content-['▹']"
                  >
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;

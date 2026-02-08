import React, { useState } from "react";
import { faqData } from "../../data";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative py-15 sm:py-25" id="faq">
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          Got questions? We've got answers
        </p>

        <div className="mx-auto max-w-200">
          {faqData.map((item) => (
            <div
              className={`mb-4 overflow-hidden rounded-2xl border border-[#2a2a3a] bg-[#12121a] transition duration-300 hover:border-[#4aacd3] ${
                activeId === item.id ? "border-[#4aacd3]" : ""
              }`}
              key={item.id}
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left text-[1.1rem] font-medium text-white"
                onClick={() => toggleFAQ(item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={`text-[1.5rem] text-[#4aacd3] transition duration-300 ${
                    activeId === item.id ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                  activeId === item.id ? "max-h-125" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-[#535353] leading-[1.8]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

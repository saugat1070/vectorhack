import React from "react";
import { timelineData } from "../../data";

const Timeline = () => {
  return (
    <section className="relative py-15 sm:py-25" id="timeline">
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Event Timeline
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          Mark your calendars and prepare for an amazing experience
        </p>

        <div className="relative mx-auto max-w-200">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] md:left-1/2 md:-translate-x-1/2" />
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                className={`relative mb-12 flex justify-start pl-12.5 pr-0 md:pl-0 md:pr-0 ${
                  isEven
                    ? "md:justify-start md:pl-[50%]"
                    : "md:justify-end md:pr-[50%]"
                }`}
                key={item.id}
              >
                <div
                  className={`absolute top-6 h-5 w-5 rounded-full border-4 border-[#0a0a0f] bg-[#4aacd3] left-2.5 ${
                    isEven
                      ? "md:left-[calc(50%-10px)]"
                      : "md:right-[calc(50%-10px)] md:left-auto"
                  }`}
                />
                <div
                  className={`relative max-w-full rounded-2xl border border-[#2a2a3a] bg-[#12121a] p-6 transition duration-300 hover:scale-[1.02] hover:border-[#4aacd3] md:max-w-87.5 ${
                    isEven ? "md:ml-7.5" : "md:mr-7.5"
                  }`}
                >
                  <span className="mb-2 block text-[0.9rem] text-[#ffdf42] font-['JetBrains_Mono',monospace]">
                    {item.date}
                  </span>
                  <h3 className="mb-2 text-[1.1rem]">{item.title}</h3>
                  <p className="text-[0.9rem] text-[#535353]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

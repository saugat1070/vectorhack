import React from "react";
import { prizesData } from "../../data";
import { TrophyIcon, StarIcon } from "../Icons";

const Prizes = () => {
  return (
    <section className="relative py-15 sm:py-25" id="prizes">
      <div className="mx-auto max-w-300 px-5">
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Prizes & Rewards
        </h2>
        <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
          Amazing prizes await the winners
        </p>

        <div className="mx-auto grid max-w-200 grid-cols-1 items-end gap-8 md:grid-cols-2">
          {prizesData.map((prize) => (
            <div
              className={`relative rounded-3xl border border-[#2a2a3a] bg-[#12121a] p-10 text-center transition duration-300 hover:-translate-y-2.5 ${
                prize.featured
                  ? "md:scale-[1.08] border-[#ffdf42] bg-[linear-gradient(180deg,rgba(255,223,66,0.1)_0%,#12121a_100%)]"
                  : ""
              }`}
              key={prize.id}
            >
              <span
                className={`absolute left-1/2 -top-3.75 -translate-x-1/2 rounded-full px-6 py-2 text-[0.85rem] font-semibold ${
                  prize.featured
                    ? "bg-[#ffdf42] text-[#0a0a0f]"
                    : "bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-white"
                }`}
              >
                {prize.badge}
              </span>
              <div
                className={`mb-4 text-4xl ${
                  prize.featured ? "text-[#ffdf42]" : "text-[#4aacd3]"
                }`}
              >
                {prize.featured ? (
                  <TrophyIcon size={64} />
                ) : (
                  <StarIcon size={64} />
                )}
              </div>
              <p className="mb-2 text-[1.2rem] text-[#535353]">
                {prize.place}
              </p>
              <p
                className={`mb-4 text-[2.5rem] font-bold font-['Space_Grotesk',Inter,sans-serif] ${
                  prize.featured ? "text-[#ffdf42]" : "text-white"
                }`}
              >
                {prize.amount}
              </p>
              <ul className="space-y-2 text-[0.9rem] text-[#535353]">
                {prize.perks.map((perk, index) => (
                  <li key={index}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;

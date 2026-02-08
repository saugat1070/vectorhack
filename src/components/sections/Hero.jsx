import React from "react";
import { useCountdown } from "../../hooks";
import { heroMetaData } from "../../data";
import { CalendarIcon, ClockIcon, LocationIcon, TeamIcon } from "../Icons";

const getMetaIcon = (iconName) => {
  const icons = {
    calendar: <CalendarIcon size={28} />,
    clock: <ClockIcon size={28} />,
    location: <LocationIcon size={28} />,
    team: <TeamIcon size={28} />,
  };
  return icons[iconName] || null;
};

const Hero = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    "February 9, 2026 09:00:00",
  );

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section
      className="relative flex min-h-screen items-center justify-center pt-20"
      id="home"
    >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,transparent_55%)] opacity-40" />
      <div className="mx-auto w-full max-w-300 px-5">
        <div className="mx-auto max-w-300 text-center">
          {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(74,172,211,0.3)] bg-[rgba(74,172,211,0.1)] px-5 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-[#ffdf42] animate-pulse" />
            <span>Registration Open • Limited Seats</span>
          </div> */}
          <div className="mx-auto h-90 w-90 md:h-120 md:w-120 animate-bounce-slow">
            <img
              src="/VectorHack.svg"
              alt="VectorHack Logo"
              className="h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(74,172,211,0.35)]"
            />
          </div>
          <h1 className="mb-6 text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-[1.1] font-['Space_Grotesk',Inter,sans-serif]">
            <span className="bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
              VectorHack
            </span>{" "}
            2026
          </h1>

          <p className="mb-4 text-[clamp(1.2rem,3vw,1.8rem)] font-semibold text-[#4aacd3]">
            Green Tech for Green Pokhara
          </p>

          <p className="mx-auto mb-8 max-w-150 text-[1.1rem] text-[#535353]">
            A 48-hour national software hackathon organized by i-CES, as part of
            VECTOR at IOE, Pashchimanchal Campus. Build innovative solutions
            that create meaningful impact.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-6 md:gap-12">
            {heroMetaData.map((item) => (
              <div className="flex flex-col items-center" key={item.label}>
                <span className="mb-2 text-[#4aacd3]">
                  {getMetaIcon(item.icon)}
                </span>
                <span className="text-base font-semibold">{item.value}</span>
                <span className="text-[0.85rem] text-[#535353]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-[10px] bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] px-8 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,91,150,0.4)]"
            >
              <span>Register Your Team</span>
              <span>→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-[#2a2a3a] px-8 py-3.5 text-base font-semibold text-white transition duration-300 hover:border-[#4aacd3] hover:text-[#4aacd3]"
            >
              <span>Learn More</span>
            </a>
          </div>

          {/* <div className="mt-12">
            <p className="mb-4 text-sm text-[#535353]">Hackathon Starts In</p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className="min-w-[60px] rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:min-w-[80px] sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-2xl">
                  {formatNumber(days)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Days
                </span>
              </div>
              <div className="min-w-[60px] rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:min-w-[80px] sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-2xl">
                  {formatNumber(hours)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Hours
                </span>
              </div>
              <div className="min-w-[60px] rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:min-w-[80px] sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-2xl">
                  {formatNumber(minutes)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Mins
                </span>
              </div>
              <div className="min-w-[60px] rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:min-w-[80px] sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-2xl">
                  {formatNumber(seconds)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Secs
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

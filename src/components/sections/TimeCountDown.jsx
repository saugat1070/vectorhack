import  React from 'react'
import { useCountdown } from '../../hooks'

function TimeCountDown() {

    const { days, hours, minutes, seconds } = useCountdown(
        "February 9, 2026 09:00:00",
      );
  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section className="w-full py-12  mx-auto ">
        <h1 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">Hackathon Starts In</h1>
        <div className="mx-auto mt-12 flex flex-col items-center px-4 w-[90%] md:w-[70%] rounded-xl border border-[rgba(74,172,211,0.3)] bg-[rgba(74,172,211,0.1)] p-6 md:p-10">
            <div className="flex justify-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center min-w-16 sm:min-w-22 md:min-w-28 rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-4xl md:text-8xl">
                  {formatNumber(days)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Days
                </span>
              </div>
              <div className="flex flex-col items-center min-w-16 sm:min-w-22 md:min-w-28 rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-4xl md:text-8xl">
                  {formatNumber(hours)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center min-w-16 sm:min-w-22 md:min-w-28 rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-4xl md:text-8xl">
                  {formatNumber(minutes)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Mins
                </span>
              </div>
              <div className="flex flex-col items-center min-w-16 sm:min-w-22 md:min-w-28 rounded-xl border border-[#2a2a3a] bg-[#12121a] px-4 py-3 sm:px-6 sm:py-4">
                <span className="text-xl font-bold text-[#4aacd3] font-['JetBrains_Mono',monospace] sm:text-4xl md:text-8xl">
                  {formatNumber(seconds)}
                </span>
                <span className="block text-[0.75rem] uppercase tracking-[1px] text-[#535353]">
                  Secs
                </span>
              </div>
            </div>
          </div> 
          </section>
)
}

export default TimeCountDown;
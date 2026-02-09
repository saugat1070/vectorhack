import React, { useMemo } from "react";
import { useCountdown } from "../hooks/useCountdown";

const HACKATHON_DURATION_MS = 48 * 60 * 60 * 1000;
const HACKATHON_START_ISO = "2026-02-09T10:35:00+05:45";

function TimeLeft() {
  const hackathonStart = useMemo(
    () => new Date(HACKATHON_START_ISO),
    [],
  );

  const hackathonEnd = useMemo(
    () => new Date(hackathonStart.getTime() + HACKATHON_DURATION_MS),
    [hackathonStart],
  );

  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    hackathonEnd,
  );

  const remainingSeconds = useMemo(() => {
    if (isExpired) {
      return 0;
    }
    return days * 86400 + hours * 3600 + minutes * 60 + seconds;
  }, [days, hours, minutes, seconds, isExpired]);

  const totalSeconds = Math.round(HACKATHON_DURATION_MS / 1000);

  const eventStatus = useMemo(() => {
    const currentEstimate = hackathonEnd.getTime() - remainingSeconds * 1000;
    if (currentEstimate < hackathonStart.getTime()) {
      return "upcoming";
    }
    if (isExpired) {
      return "complete";
    }
    return "running";
  }, [hackathonEnd, hackathonStart, remainingSeconds, isExpired]);

  const progress = useMemo(() => {
    if (eventStatus === "upcoming") {
      return 0;
    }
    if (eventStatus === "complete") {
      return 100;
    }
    const elapsed = totalSeconds - remainingSeconds;
    const ratio = elapsed / totalSeconds;
    return Math.min(100, Math.max(0, Math.round(ratio * 100)));
  }, [eventStatus, remainingSeconds, totalSeconds]);

  const hoursRemaining = useMemo(
    () => Math.max(0, Math.floor(remainingSeconds / 3600)),
    [remainingSeconds],
  );

  const statusMessage = useMemo(() => {
    if (eventStatus === "upcoming") {
      return "The hackathon kicks off soon. Timer will start counting down from 48 hours once we begin.";
    }
    if (eventStatus === "complete") {
      return "Hackathon complete! Submit final demos and celebrate the sprint.";
    }
    return `Approximately ${progress}% of the hackathon has elapsed. ${hoursRemaining} hours remain.`;
  }, [eventStatus, progress, hoursRemaining]);

  const timeBlocks = useMemo(
    () => [
      { label: "Days", value: String(days).padStart(2, "0") },
      { label: "Hours", value: String(hours).padStart(2, "0") },
      { label: "Minutes", value: String(minutes).padStart(2, "0") },
      { label: "Seconds", value: String(seconds).padStart(2, "0") },
    ],
    [days, hours, minutes, seconds],
  );

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,transparent_60%)] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,rgba(59,130,246,0.22)_0%,transparent_65%)]" />

      <div className="relative z-10 flex w-full max-w-6xl flex-1 flex-col items-center gap-12 px-6 py-20 md:py-45 md:px-12">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-white/10 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            48-Hour Sprint
          </span>
        <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
          Time Left to Submit Your Project
        </h2>
          <p className="max-w-2xl text-base text-white/70 md:text-lg">
            Keep Coding. The clock below shows how much time is left before we close submissions for this 48-hour build Hackathon.
          </p>
        </header>

        <div className="flex w-full flex-col items-center gap-10">
          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/80 px-8 py-10 shadow-[0_30px_80px_rgba(8,18,45,0.55)]"
              >
                <div className="text-8xl font-bold text-sky-200 drop-shadow-[0_10px_25px_rgba(14,116,204,0.45)]">
                  {block.value}
                </div>
                <span className="text-sm uppercase tracking-[0.28em] text-white/50">
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex w-full max-w-3xl flex-col gap-4">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/50">
              <span>Kickoff</span>
              <span>Finish</span>
            </div>
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-sm text-white/70">{statusMessage}</div>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-3 text-center text-xs uppercase tracking-[0.24em] text-white/40">
          <span>Build • Iterate • Deliver</span>
          <span>VectorHack 48 Hour Challenge</span>
        </footer>
      </div>
    </section>
  );
}

export default TimeLeft;
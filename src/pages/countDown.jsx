import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const COUNTDOWN_SECONDS = 10;
const DOT_LOTTIE_URL =
  "https://lottie.host/71f827df-4e40-4730-b037-6d953f587b9e/MrkRvfMvAy.lottie";
const ANIMATION_SPEED = 0.5;

function CountDown() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);
  const [player, setPlayer] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLaunchPending, setIsLaunchPending] = useState(false);
  const launchScheduledRef = useRef(false);
  const redirectTimeoutRef = useRef(null);

  const triggerLaunch = useCallback(() => {
    if (!player || !isReady || hasError) {
      return false;
    }
    launchScheduledRef.current = false;
    setIsLaunchPending(false);
    setIsAnimating(true);
    player.stop();
    if (typeof player.setSpeed === "function") {
      player.setSpeed(ANIMATION_SPEED);
    }
    player.play();
    return true;
  }, [player, isReady, hasError]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }
    if (timeLeft === 0) {
      setIsRunning(false);
      if (isReady && !hasError) {
        triggerLaunch();
      }
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [isRunning, timeLeft, isReady, hasError, triggerLaunch]);

  useEffect(() => {
    if (!isLaunchPending) {
      return;
    }
    if (timeLeft > 0) {
      return;
    }
    if (!isReady || hasError) {
      return;
    }
    triggerLaunch();
  }, [isLaunchPending, timeLeft, isReady, hasError, triggerLaunch]);

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  const dotLottieRefCallback = useCallback((instance) => {
    setPlayer(instance);
    if (!instance) {
      setIsReady(false);
    }
  }, []);

  useEffect(() => {
    if (!player) {
      return undefined;
    }

    const handleLoad = () => {
      setHasError(false);
      setIsReady(true);
      if (typeof player.setSpeed === "function") {
        player.setSpeed(ANIMATION_SPEED);
      }
      const launched =
        launchScheduledRef.current && timeLeft === 0 ? triggerLaunch() : false;
      if (!launched && !isAnimating) {
        player.stop();
      }
    };

    const handleLoadError = () => {
      launchScheduledRef.current = false;
      setIsLaunchPending(false);
      setIsAnimating(false);
      setIsReady(false);
      setHasError(true);
      setIsRunning(false);
    };

    const handleComplete = () => {
      launchScheduledRef.current = false;
      setIsLaunchPending(false);
      setIsAnimating(false);
      setTimeLeft(0);
      setIsRunning(false);
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
      redirectTimeoutRef.current = window.setTimeout(() => {
        navigate("/timeleft");
      }, 1500);
    };

    player.addEventListener("load", handleLoad);
    player.addEventListener("loadError", handleLoadError);
    player.addEventListener("complete", handleComplete);

    return () => {
      player.removeEventListener("load", handleLoad);
      player.removeEventListener("loadError", handleLoadError);
      player.removeEventListener("complete", handleComplete);
    };
  }, [player, timeLeft, triggerLaunch, isAnimating, navigate]);

  const statusLabel = useMemo(() => {
    if (hasError) {
      return "Animation failed to load";
    }
    if (isRunning) {
      return `Countdown - ${timeLeft}s`;
    }
    if (isLaunchPending && !isReady) {
      return "Waiting for animation";
    }
    if (isAnimating) {
      return "Lift off!";
    }
    if (!isReady) {
      return "Loading animation";
    }
    if (timeLeft === 0) {
      return "Start successfully";
    }
    if (isLaunchPending) {
      return "Start armed";
    }
    return "Ready for Begin";
  }, [hasError, isRunning, timeLeft, isLaunchPending, isReady, isAnimating]);

  const handleStart = () => {
    if (hasError) {
      setHasError(false);
      setIsReady(false);
      setIsLaunchPending(false);
      setIsAnimating(false);
      launchScheduledRef.current = false;
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
        redirectTimeoutRef.current = null;
      }
      setReloadToken((prev) => prev + 1);
      return;
    }
    launchScheduledRef.current = true;
    setIsLaunchPending(true);
    setIsAnimating(false);
    setTimeLeft(COUNTDOWN_SECONDS);
    setIsRunning(true);
    if (player) {
      player.stop();
    }
    if (redirectTimeoutRef.current) {
      window.clearTimeout(redirectTimeoutRef.current);
      redirectTimeoutRef.current = null;
    }
  };

  const buttonLabel = hasError
    ? "Retry animation"
    : isAnimating
      ? "Starting..."
      : isRunning
        ? "Countdown running"
        : isLaunchPending
          ? "Waiting for start"
          : timeLeft === 0
            ? "Start again"
            : "Start";
  const buttonDisabled = hasError
    ? false
    : isRunning || isLaunchPending || isAnimating;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,transparent_55%)] opacity-40" />

      <div className="relative z-10 flex h-full w-full flex-1 flex-col items-center gap-12 px-6 py-10 md:px-12">
        <div className="flex w-full max-w-5xl flex-col items-center gap-6 text-center">
			<span>{""}</span>
			<span>{""}</span>
          <h2 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
            VectorHack Launch Sequence
          </h2>
        </div>

        <div className="relative flex w-full flex-1 items-center justify-center">
          <div className="relative flex h-full min-h-105 w-full max-w-6xl flex-1 items-center justify-center overflow-hidden rounded-[36px] border border-white/10 bg-linear-to-br from-slate-900/80 via-slate-950 to-slate-900/70 p-8 shadow-[0_45px_120px_rgba(6,11,30,0.65)]">
            <DotLottieReact
              key={reloadToken}
              src={DOT_LOTTIE_URL}
              autoplay={false}
              loop={false}
              dotLottieRefCallback={dotLottieRefCallback}
              className="h-full w-full max-h-[75vh]"
            />

            {!isReady && !hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/50 text-white/60 backdrop-blur-md">
                <span className="h-12 w-12 animate-spin rounded-full border-2 border-white/15 border-t-white" />
                <span className="text-xs uppercase tracking-[0.32em] text-white/40">
                  Loading launch
                </span>
              </div>
            )}

            {hasError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/60 text-white/70 backdrop-blur-md">
                <span className="text-sm font-semibold uppercase tracking-[0.28em]">
                  Animation unavailable
                </span>
                <span className="text-xs text-white/50">
                  Check your connection and retry.
                </span>
              </div>
            )}

            {isRunning && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/25 backdrop-blur-sm">
                <span className="text-8xl font-bold text-[#7dd3fc] drop-shadow-[0_18px_48px_rgba(30,64,175,0.55)]">
                  {timeLeft}
                </span>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleStart}
          className="relative z-10 rounded-full bg-[linear-gradient(135deg,#60a5fa_0%,#4338ca_100%)] px-16 py-4 text-lg font-semibold text-white shadow-[0_24px_60px_rgba(67,56,202,0.45)] transition-transform hover:-translate-y-[3px] active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={buttonDisabled}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}

export default CountDown;

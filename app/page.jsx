"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  Play,
  Waves,
  Boxes,
  Sparkles,
  ChevronRight,
  Film,
  Clock,
  CheckCircle2,
  Zap,
  CheckCircle,
  Mail,
} from "lucide-react";

const WEB3FORMS_KEY = "ca415c8f-0773-4391-8564-11a8d5ffc2a8";
const HERO_VIDEO_SRC = "/logistics-flow-hero.mp4";

const HERO_VIDEO_SHOTLIST = [
  "Slow aerial or elevated movement over a container yard at blue hour",
  "Warehouse interior with moving pallets, forklifts, and soft cinematic motion blur",
  "Close tracking shot of containers, loading flow, or conveyor movement",
  "Route-line or network overlay moving across a dark logistics map interface",
  "Truck departure or fleet motion with premium stabilized camera movement",
  "Abstract dashboard-style UI overlay showing shipment flow, tracking, or status",
  "Cross-border or port-style movement shot with cranes, stacks, and depth",
  "Final calm wide shot with elegant motion that feels premium and trustworthy",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

function FloatingOrb({ className, delay = 0, duration = 12 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -28, 14, 0],
        x: [0, 18, -12, 0],
        scale: [1, 1.1, 0.94, 1],
        opacity: [0.6, 0.9, 0.7, 0.6],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb
        className="absolute left-[8%] top-12 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl"
        duration={14}
      />
      <FloatingOrb
        className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        delay={1.2}
        duration={16}
      />
      <FloatingOrb
        className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl"
        delay={0.5}
        duration={18}
      />
    </div>
  );
}

function AnimatedGrid() {
  return (
    <motion.div
      className="absolute inset-0 opacity-20"
      animate={{ backgroundPosition: ["0px 0px", "0px 48px", "48px 96px"] }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(circle at center, black 40%, transparent 80%)",
      }}
    />
  );
}

function ShimmerButton({ href, children, className = "" }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04, y: -3 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,0.4)] ${className}`}
    >
      <motion.span
        className="absolute inset-y-0 left-[-60%] w-[40%] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm"
        animate={{ x: ["0%", "400%"] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
      />
      {children}
    </motion.a>
  );
}

function HeroVideoLayer({ src }) {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-[32px]">
      {!videoFailed && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-45 saturate-[0.9]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            try {
              e.currentTarget.playbackRate = 0.82;
            } catch {}
          }}
          onError={() => setVideoFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.22),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.22),transparent_18%),radial-gradient(circle_at_55%_75%,rgba(99,102,241,0.18),transparent_22%),linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.88))]" />

      {videoFailed && (
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 100%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.22), transparent 20%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.24), transparent 18%), radial-gradient(circle at 60% 78%, rgba(99,102,241,0.18), transparent 22%), linear-gradient(135deg, rgba(2,6,23,0.95), rgba(15,23,42,0.96), rgba(10,25,47,0.95))",
            backgroundSize: "180% 180%",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
          <div className="absolute left-1/2 top-1/2 w-[78%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-slate-950/70 p-6 text-left shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 text-cyan-200">
              <Film className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                Video preview unavailable
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Add{" "}
              <span className="font-semibold text-white">
                logistics-flow-hero.mp4
              </span>{" "}
              to <span className="font-semibold text-white">/public</span> to
              display the hero film.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {HERO_VIDEO_SHOTLIST.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-5 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function BackgroundStage({ progress }) {
  const rawY = useTransform(progress, [0, 1], [0, 130]);
  const rawScale = useTransform(progress, [0, 1], [1, 0.91]);
  const rawRotateX = useTransform(progress, [0, 1], [8, 0]);
  const rawRotateY = useTransform(progress, [0, 1], [-8, 7]);

  const y = useSpring(rawY, { stiffness: 60, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 60, damping: 20 });
  const rotateX = useSpring(rawRotateX, { stiffness: 60, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 60, damping: 20 });

  return (
    <motion.div
      style={{ y, scale }}
      className="relative h-[420px] w-full [perspective:1800px] md:h-[500px] lg:h-[560px]"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-[0_30px_120px_rgba(15,23,42,0.55)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <HeroVideoLayer src={HERO_VIDEO_SRC} />
        <AnimatedGrid />

        <motion.div
          className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl"
          animate={{ x: [0, 32, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-4 top-20 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl"
          animate={{ x: [0, -28, 0], y: [0, 28, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-x-8 top-8 rounded-[24px] border border-white/10 bg-white/[0.08] backdrop-blur-sm"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white/80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Play className="h-4 w-4 text-cyan-300" />
              Logistics Clarity Engine
            </div>
            <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
              7-day delivery
            </div>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
                <Waves className="h-4 w-4 text-cyan-300" />
                Prospect journey
              </div>
              <div className="space-y-4">
                {[
                  "Complex service offer",
                  "90-sec visual explanation",
                  "Prospect self-qualifies",
                  "Sales call already sold",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                    animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.4,
                    }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
                      {index + 1}
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <motion.div
                className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-sm text-slate-300">
                  Discovery call time saved
                </div>
                <div className="mt-3 text-4xl font-bold text-white">−45 min</div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                    animate={{ width: ["38%", "85%", "62%", "90%"] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-sm text-slate-300">Built for</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["3PL", "Freight", "Warehousing", "Customs"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">
                Visual movement
              </div>
              <div className="mt-2 text-xl font-semibold text-white">
                Cinematic logistics motion — done in 7 days
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              cinematic gradients • logistics film • premium motion
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function FloatingText({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function ScrollReactiveSection({ id, className = "", children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 12%"],
  });

  const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -65]);
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.2, 1, 1, 0.5]
  );
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.985]);

  const y = useSpring(rawY, { stiffness: 55, damping: 22 });
  const opacity = useSpring(rawOpacity, { stiffness: 55, damping: 22 });
  const scale = useSpring(rawScale, { stiffness: 55, damping: 22 });

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ y, opacity, scale }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function ThankYouCard() {
  return (
    <motion.div
      key="thankyou"
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -16 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-6 py-10 text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-400/40"
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        />
        <CheckCircle className="h-9 w-9 text-emerald-300" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3 className="text-2xl font-bold text-white md:text-3xl">
          You're in. We'll be in touch within 48 hours.
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-300">
          We're already looking at your website. Your free custom storyboard
          concept is being built and will land in your inbox shortly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md rounded-[24px] border border-white/10 bg-white/5 p-6 text-left"
      >
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          <Mail className="h-4 w-4" />
          What happens next
        </div>
        <div className="space-y-4">
          {[
            {
              step: "1",
              text: "We research your logistics offer and identify the #1 clarity gap",
            },
            {
              step: "2",
              text: "We build a free 15-second storyboard concept tailored to your service",
            },
            {
              step: "3",
              text: "We email it to you within 48 hours — no call required to receive it",
            },
          ].map(({ step, text }) => (
            <div key={step} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-bold text-cyan-200">
                {step}
              </div>
              <p className="text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="text-sm text-slate-500"
      >
        Check your inbox — including your spam folder — for an email from{" "}
        <span className="text-slate-400">isa@nexapixelai.com</span>
      </motion.p>
    </motion.div>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -120]);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.75, 1], [1, 0.9, 0.5]);

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        form.reset();
        setSubmitted(true);
      } else {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_bottom_center,rgba(99,102,241,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_40%,#020617_100%)]" />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
        style={{ scaleX: progressScaleX }}
      />

      <SectionGlow />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xl font-bold tracking-[0.18em] text-white">
              NEXA-PIXEL
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Explainer videos for logistics & supply chain companies
            </div>
          </motion.div>

          <motion.a
            href="#interest-form"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_10px_40px_rgba(34,211,238,0.12)] transition"
          >
            Get Free Storyboard
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </header>

      <main>
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:py-12">
            <motion.div
              className="relative z-10"
              style={{ y: heroTextY, opacity: heroTextOpacity }}
            >
              <FloatingText delay={0.1}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
                  <Waves className="h-4 w-4" />
                  For B2B Logistics & Supply Chain Teams
                </div>
              </FloatingText>

              <motion.h1
                className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.2}
              >
                Stop losing 45 minutes on discovery calls
                <motion.span
                  className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  explaining what you do.
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.35}
              >
                We turn complex logistics services into clear, 90-second visual
                assets. Prospects understand your offer instantly, qualify
                themselves, and enter your sales cycle ready to buy.
              </motion.p>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.5}
              >
                <ShimmerButton href="#interest-form">
                  Get a Free Storyboard Concept
                  <ChevronRight className="h-4 w-4" />
                </ShimmerButton>

                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md"
                >
                  See How It Works
                  <Play className="h-4 w-4" />
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.62}
              >
                {[
                  { icon: Clock, label: "7-Day Delivery" },
                  { icon: CheckCircle2, label: "Done-For-You Scripting" },
                  { icon: Zap, label: "Built for Logistics" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-cyan-300" />
                    {label}
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6"
                initial="hidden"
                animate="show"
                variants={staggerContainer}
              >
                {[
                  [
                    "90 Seconds",
                    "Prospects understand your full offer before the first call",
                  ],
                  [
                    "Self-Qualifying Leads",
                    "Buyers arrive on the call already sold on the mechanism",
                  ],
                  [
                    "7-Day Turnaround",
                    "Script, visuals, and final asset — done for you, fast",
                  ],
                ].map(([title, copy], index) => (
                  <motion.div
                    key={title}
                    variants={staggerItem}
                    whileHover={{
                      y: -12,
                      rotateX: 5,
                      rotateY: index === 1 ? 0 : index % 2 === 0 ? -5 : 5,
                      scale: 1.02,
                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-xl [transform-style:preserve-3d]"
                  >
                    <motion.div
                      className="mb-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                      animate={{ width: [56, 80, 56] }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="text-2xl font-bold leading-tight text-white">
                      {title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-slate-300">
                      {copy}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full self-start lg:justify-self-end"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <BackgroundStage progress={heroProgress} />
            </motion.div>
          </div>
        </section>

        <ScrollReactiveSection className="relative py-24">
          <SectionGlow />
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[36px] border border-rose-400/10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 px-8 py-12 shadow-[0_30px_120px_rgba(8,47,73,0.2)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(239,68,68,0.08),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.1),transparent_24%)]" />
              <motion.div
                className="absolute inset-y-0 left-[-20%] w-[40%] bg-gradient-to-r from-transparent via-white/6 to-transparent blur-2xl"
                animate={{ x: ["0%", "280%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-300/80">
                  The Problem
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Great logistics offers are dying in translation.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Whether you run a 3PL, freight forwarding, or customs
                  brokerage, your service is complex. When prospects land on
                  your site or take a first call, they are met with industry
                  jargon and tangled processes. They get confused. They bounce.
                  Or worse — your sales team wastes 45 minutes on a discovery
                  call just explaining the basics to a lead who was never
                  qualified in the first place.
                </p>
                <p className="mt-4 text-lg font-semibold text-white">
                  You don't need a longer pitch. You need a faster path to
                  clarity.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReactiveSection>

        <ScrollReactiveSection id="how-it-works" className="relative py-24">
          <SectionGlow />
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                The Solution
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                The Logistics Clarity Engine.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We replace confusion with a premium, 90-second visual
                explanation. No busy stock footage. No talking heads. Just
                clean, cinematic motion that maps out exactly how your supply
                chain solution works — so prospects qualify themselves before
                the first call.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Step 1",
                  title: "Clarify the Message",
                  copy: "We strip away the jargon. We identify exactly what your buyers find confusing and shape it into a sharp, undeniable 90-second script.",
                },
                {
                  label: "Step 2",
                  title: "Build the Visual",
                  copy: "We produce a premium cinematic asset using route-line overlays, container motion, and clean UI that makes your complex operation look effortless.",
                },
                {
                  label: "Step 3",
                  title: "Deploy & Close Faster",
                  copy: "You embed the asset on your landing pages and in your cold outreach. Prospects watch, understand, and book a call already sold on the mechanism.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.14,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -14,
                    rotateX: 6,
                    rotateY: index === 1 ? 0 : index % 2 === 0 ? -5 : 5,
                    scale: 1.02,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_80px_rgba(15,23,42,0.2)] backdrop-blur-xl [transform-style:preserve-3d]"
                >
                  <div className="mb-4 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                    {item.label}
                  </div>
                  <div className="text-xl font-bold text-white">{item.title}</div>
                  <p className="mt-4 leading-7 text-slate-300">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReactiveSection>

        <ScrollReactiveSection className="relative py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                Who It's For
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Built exclusively for the supply chain.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We don't make videos for local bakeries or SaaS startups. We
                only build visual assets for companies that move physical goods
                and data. If your service is hard to explain, we are the
                translation layer.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Freight Forwarders",
                  "3PL Providers",
                  "Warehousing Operations",
                  "Customs Brokers",
                  "Cold Chain Logistics",
                  "Fulfillment Centers",
                  "Last-Mile Delivery",
                  "Supply Chain Tech",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-slate-100 backdrop-blur-sm transition-all duration-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/5 p-8 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3 text-cyan-100">
                <Boxes className="h-5 w-5" />
                <span className="text-lg font-semibold">What you get</span>
              </div>
              <div className="space-y-4 text-slate-300">
                {[
                  "A custom 90-second cinematic explainer video built for your specific logistics offer",
                  "Done-for-you scripting — we research your service and write the narrative",
                  "7-day delivery from brief to final asset, ready to deploy",
                  "Embed-ready format for your website, cold outreach, and LinkedIn",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex gap-3 rounded-[22px] border border-white/10 bg-black/10 px-4 py-4"
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 5 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="mt-0.5 text-cyan-300">✓</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReactiveSection>

        <ScrollReactiveSection className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[36px] border border-cyan-300/10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-8 py-12 shadow-[0_30px_120px_rgba(8,47,73,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.18),transparent_24%)]" />
              <motion.div
                className="absolute inset-y-0 left-[-20%] w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
                animate={{ x: ["0%", "280%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                  The Guarantee
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  If prospects don't understand your offer faster, we fix it
                  free.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  We call it the Clarity Guarantee. If your video doesn't make
                  your offer immediately clear to a cold prospect, we revise it
                  until it does — at no extra cost. We only win when your
                  prospects understand.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReactiveSection>

        <ScrollReactiveSection id="interest-form" className="relative py-24">
          <SectionGlow />
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.28)] backdrop-blur-2xl md:p-12"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <ThankYouCard key="thankyou" />
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97, y: -12 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mx-auto max-w-2xl text-center">
                      <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                        Zero Risk Offer
                      </div>
                      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                        Let us map out your offer — for free.
                      </h2>
                      <p className="mt-5 text-lg leading-8 text-slate-300">
                        Send us your website and we'll build a custom 15-second
                        storyboard concept for your specific logistics offer —
                        completely free. If you like it, we talk. If you don't,
                        you keep it. Zero risk.
                      </p>
                    </div>

                    <form
                      className="mt-10 grid gap-5"
                      onSubmit={handleLeadSubmit}
                    >
                      <input
                        type="hidden"
                        name="subject"
                        value="New Nexa Pixel Storyboard Request"
                      />
                      <input
                        type="hidden"
                        name="from_name"
                        value="Nexa Pixel Website"
                      />
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                      />

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-200">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-200">
                            Work Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@company.com"
                            className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Company Website
                        </label>
                        <input
                          type="url"
                          name="website"
                          required
                          placeholder="https://yourcompany.com"
                          className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          What's the #1 thing prospects misunderstand about your
                          service?{" "}
                          <span className="text-slate-500">(optional)</span>
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          placeholder="e.g. They don't realise we handle customs clearance end-to-end, not just freight..."
                          className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={isSubmitting ? {} : { scale: 1.03, y: -3 }}
                        whileTap={isSubmitting ? {} : { scale: 0.97 }}
                        className="relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <motion.span
                          className="absolute inset-y-0 left-[-60%] w-[40%] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm"
                          animate={isSubmitting ? {} : { x: ["0%", "400%"] }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "linear",
                            repeatDelay: 1.5,
                          }}
                        />
                        {isSubmitting
                          ? "Sending..."
                          : "Request Free Storyboard Concept"}
                        <ArrowRight className="h-4 w-4" />
                      </motion.button>

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-[22px] border border-rose-400/25 bg-rose-400/10 px-4 py-4 text-sm leading-6 text-rose-100"
                        >
                          {submitError}
                        </motion.div>
                      )}

                      <p className="text-center text-sm text-slate-400">
                        No credit card required. You'll receive your custom
                        storyboard concept via email within 48 hours.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </ScrollReactiveSection>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
          <div>
            <div className="font-bold tracking-[0.16em] text-white">
              NEXA-PIXEL
            </div>
            <div className="text-sm text-slate-400">
              Turning complex logistics offers into 90-second visual assets that
              close deals faster.
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Film className="h-4 w-4 text-cyan-300" />
              7-day delivery
            </div>
            <a
              href="#interest-form"
              className="font-semibold text-cyan-200 transition hover:text-white"
            >
              Get Free Storyboard →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
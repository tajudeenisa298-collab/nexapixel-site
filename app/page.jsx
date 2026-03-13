"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  Waves,
  Boxes,
  Sparkles,
  ChevronRight,
  Film,
} from "lucide-react";

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
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardLift = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: {
    y: -10,
    rotateX: 4,
    rotateY: -4,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function FloatingOrb({ className, delay = 0, duration = 12 }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -22, 12, 0],
        x: [0, 14, -10, 0],
        scale: [1, 1.08, 0.96, 1],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingOrb
        className="absolute left-[8%] top-12 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
        duration={14}
      />
      <FloatingOrb
        className="absolute right-[10%] top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
        delay={1.2}
        duration={16}
      />
      <FloatingOrb
        className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-indigo-500/15 blur-3xl"
        delay={0.5}
        duration={18}
      />
    </div>
  );
}

function AnimatedGrid() {
  return (
    <motion.div
      className="absolute inset-0 opacity-25"
      animate={{ backgroundPosition: ["0px 0px", "0px 40px", "40px 80px"] }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(circle at center, black 45%, transparent 85%)",
      }}
    />
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
          onLoadedMetadata={(event) => {
            try {
              event.currentTarget.playbackRate = 0.82;
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
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Hero video not loaded yet</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              The page is ready for a real MP4, but the file is missing from your project right now. Add <span className="font-semibold text-white">logistics-flow-hero.mp4</span> to <span className="font-semibold text-white">/public</span> to make the hero video appear.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {HERO_VIDEO_SHOTLIST.slice(0, 4).map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-5 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/65 px-4 py-2 text-xs text-slate-200 backdrop-blur-md">
        Premium logistics hero film enabled
      </div>
      <div className="absolute bottom-5 left-5 max-w-[420px] rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-xs leading-5 text-slate-300 backdrop-blur-md">
        Best-performing hero style: cinematic logistics motion, route-line overlays, container and warehouse movement, no talking heads, no busy stock montage. Use <span className="font-semibold text-cyan-200">/public/logistics-flow-hero.mp4</span>.
      </div>
    </div>
  );
}

function BackgroundStage({ progress }) {
  const y = useTransform(progress, [0, 1], [0, 120]);
  const scale = useTransform(progress, [0, 1], [1, 0.92]);
  const rotateX = useTransform(progress, [0, 1], [8, 0]);
  const rotateY = useTransform(progress, [0, 1], [-8, 7]);

  return (
    <motion.div style={{ y, scale }} className="relative h-[420px] w-full [perspective:1800px] md:h-[500px] lg:h-[560px]">
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 shadow-[0_30px_120px_rgba(15,23,42,0.55)]"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <HeroVideoLayer src={HERO_VIDEO_SRC} />
        <AnimatedGrid />

        <motion.div
          className="absolute -left-8 top-12 h-40 w-40 rounded-full bg-cyan-400/25 blur-3xl"
          animate={{ x: [0, 28, 0], y: [0, -18, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-4 top-20 h-44 w-44 rounded-full bg-blue-500/25 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, 24, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 h-36 w-36 rounded-full bg-indigo-400/20 blur-3xl"
          animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute inset-x-8 top-8 rounded-[24px] border border-white/10 bg-white/8 backdrop-blur-sm"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-white/80">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Play className="h-4 w-4 text-cyan-300" />
              Logistics Clarity Engine
            </div>
            <div className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
              premium hero film
            </div>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/55 p-5">
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
                <Waves className="h-4 w-4 text-cyan-300" />
                Clear buyer understanding path
              </div>
              <div className="space-y-4">
                {[
                  "Complex service offer",
                  "Clear visual explanation",
                  "Faster buyer understanding",
                  "Higher-quality interest",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
                    animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
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
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-sm text-slate-300">Message clarity</div>
                <div className="mt-3 text-4xl font-bold text-white">+73%</div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                    animate={{ width: ["38%", "82%", "64%", "88%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="rounded-[22px] border border-white/10 bg-white/5 p-5"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-sm text-slate-300">Ideal use cases</div>
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
              <div className="text-sm uppercase tracking-[0.2em] text-cyan-200/80">Visual movement</div>
              <div className="mt-2 text-xl font-semibold text-white">
                A premium visual experience built around a tailored logistics hero film
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
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
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
    offset: ["start 85%", "end 15%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.25, 1, 1, 0.55]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.985]);

  return (
    <motion.section id={id} ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.section>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "idle", message: "" });
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -110]);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.8, 1], [1, 0.95, 0.55]);
  const leadRecipientEmail = "isa@nexapixelai.com";

  const handleLeadSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${leadRecipientEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      form.reset();
      setSubmitState({
        type: "success",
        message: "Thanks — your details have been sent. We’ll review them and reach out if this looks like a fit.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_bottom_center,rgba(99,102,241,0.14),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_40%,#020617_100%)]" />
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400" style={{ scaleX: progressScaleX }} />
      <SectionGlow />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="text-xl font-bold tracking-[0.18em] text-white">NEXA-PIXEL</div>
            <div className="mt-1 text-xs text-slate-400">Explainer videos for logistics & supply chain companies</div>
          </motion.div>
          <motion.a
            href="#interest-form"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_10px_40px_rgba(34,211,238,0.12)] transition"
          >
            See if this fits
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </header>

      <main>
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 lg:py-12">
            <motion.div className="relative z-10" style={{ y: heroTextY, opacity: heroTextOpacity }}>
              <FloatingText delay={0.1}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-sm">
                  <Waves className="h-4 w-4" />
                  For small and mid-sized logistics teams
                </div>
              </FloatingText>

              <motion.h1
                className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight md:text-5xl lg:text-6xl"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.2}
              >
                Explain complex logistics services with
                <motion.span
                  className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  clear 60–90 second videos.
                </motion.span>
              </motion.h1>

              <motion.p
                className="mt-4 max-w-xl text-base leading-7 text-slate-300 md:text-lg"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.35}
              >
                We produce clear, conversion-focused explainer videos for small and medium logistics and supply chain businesses, so the right buyers understand your offer faster and are more likely to express interest.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.5}
              >
                <motion.a
                  href="#interest-form"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_60px_rgba(59,130,246,0.35)]"
                >
                  See if this fits
                  <ChevronRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md"
                >
                  See the Process
                  <Play className="h-4 w-4" />
                </motion.a>
              </motion.div>

              <motion.div
                className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6"
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0.65}
              >
                {[
                  ["60–90 Seconds", "Short, focused explainer videos"],
                  ["Clearer Buyer Understanding", "Complex services explained with clarity"],
                  ["Built for SMB Logistics", "Made for growing logistics and supply chain teams"],
                ].map(([title, copy], index) => (
                  <motion.div
                    key={title}
                    variants={cardLift}
                    initial="rest"
                    whileHover="hover"
                    className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-6 backdrop-blur-xl [transform-style:preserve-3d]"
                  >
                    <motion.div
                      className="mb-3 h-1.5 w-14 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400"
                      animate={{ width: [56, 80, 56] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="text-2xl font-bold leading-tight text-white">{title}</div>
                    <div className="mt-3 text-sm leading-6 text-slate-300">{copy}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full self-start lg:justify-self-end"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <BackgroundStage progress={heroProgress} />
            </motion.div>
          </div>
        </section>

        <ScrollReactiveSection id="how-it-works" className="relative py-24">
          <SectionGlow />
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">What we do</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Explainer videos built to clarify complex logistics offers.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                From freight forwarding to warehousing, customs, fulfillment, and cross-border operations, we turn difficult-to-explain services into clear 60–90 second videos that help buyers understand your value quickly.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "1. Clarify the message",
                  copy: "We identify what buyers usually find confusing and shape it into a simple, credible message.",
                },
                {
                  title: "2. Produce the video",
                  copy: "We create a 60–90 second explainer video that shows what you do, how it works, and why it matters.",
                },
                {
                  title: "3. Validate demand",
                  copy: "Use the video to make your offer easier to understand and collect interest from qualified businesses.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.12 }}
                  whileHover={{ y: -12, rotateX: 6, rotateY: index === 1 ? 0 : index % 2 === 0 ? -5 : 5 }}
                  className="rounded-[30px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl shadow-[0_20px_80px_rgba(15,23,42,0.2)] [transform-style:preserve-3d]"
                >
                  <div className="mb-4 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                    Process {index + 1}
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
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Who it is for</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                Built for logistics and supply chain businesses with complex services to explain.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Freight forwarders",
                  "3PL providers",
                  "Warehousing companies",
                  "Customs brokers",
                  "Cold chain logistics",
                  "Fulfillment providers",
                  "Last-mile delivery companies",
                  "Supply chain software businesses",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-4 text-slate-100 backdrop-blur-sm"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-3 text-cyan-100">
                <Boxes className="h-5 w-5" />
                <span className="text-lg font-semibold">What you get</span>
              </div>
              <div className="space-y-4 text-slate-300">
                {[
                  "Early access to our explainer video offer for logistics and supply chain businesses",
                  "Sample concepts and early launch updates",
                  "A quick way to see whether the service fits your business",
                  "Priority contact when new production slots open",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex gap-3 rounded-[22px] border border-white/10 bg-black/10 px-4 py-4"
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="relative overflow-hidden rounded-[36px] border border-cyan-300/10 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 px-8 py-12 shadow-[0_30px_120px_rgba(8,47,73,0.25)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_80%_50%,rgba(99,102,241,0.18),transparent_24%)]" />
              <motion.div
                className="absolute inset-y-0 left-[-20%] w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl"
                animate={{ x: ["0%", "260%"] }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">The promise</div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Help the right businesses understand your solution faster.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  When your solution is easier to understand, it becomes easier for qualified buyers to trust it, remember it, and take the next step.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReactiveSection>

        <ScrollReactiveSection id="interest-form" className="relative py-24">
          <SectionGlow />
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_30px_120px_rgba(15,23,42,0.28)] backdrop-blur-2xl md:p-12"
            >
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">See if this fits</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  If you run a logistics or supply chain business and want a clearer way to explain your solution, leave your details and we’ll let you know when early access opens.
                </p>
              </div>

              <form
                className="mt-10 grid gap-5"
                onSubmit={handleLeadSubmit}
              >
                <input type="hidden" name="_subject" value="New NEXA-PIXEL lead" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Your company"
                      className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">Business Type</label>
                    <select
                      name="business_type"
                      required
                      className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                    >
                      <option>Freight Forwarder</option>
                      <option>3PL</option>
                      <option>Warehousing</option>
                      <option>Customs Brokerage</option>
                      <option>Fulfillment</option>
                      <option>Cold Chain</option>
                      <option>Supply Chain Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">What do you need help explaining?</label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell us a little about your service, process, or offer"
                    className="w-full rounded-[22px] border border-white/10 bg-slate-950/60 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02, y: -2 }}
                  whileTap={isSubmitting ? {} : { scale: 0.985 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-[0_18px_70px_rgba(59,130,246,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "See if this fits"}
                  <ArrowRight className="h-4 w-4" />
                </motion.button>

                {submitState.type !== "idle" && (
                  <div
                    className={`rounded-[22px] border px-4 py-4 text-sm leading-6 ${
                      submitState.type === "success"
                        ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                        : "border-rose-400/25 bg-rose-400/10 text-rose-100"
                    }`}
                  >
                    {submitState.message}
                  </div>
                )}

                <p className="text-center text-sm text-slate-400">
                  No spam. Just early access updates, sample ideas, and a chance to see whether our explainer video service is a fit for your business. Every submission is sent to isa@nexapixelai.com.
                </p>
              </form>
            </motion.div>
          </div>
        </ScrollReactiveSection>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center">
          <div>
            <div className="font-bold tracking-[0.16em] text-white">NEXA-PIXEL</div>
            <div className="text-sm text-slate-400">Helping logistics and supply chain businesses explain complex solutions clearly with short explainer videos.</div>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
  <Film className="h-4 w-4 text-cyan-300" />
  Logistics-focused hero film
</div>
            <a href="#interest-form" className="font-semibold text-cyan-200 transition hover:text-white">
              See if this fits
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

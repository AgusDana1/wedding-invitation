import { motion, useScroll, useTransform } from "framer-motion";
import { FloralCorner } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";
import useCountdown from "../hooks/useCountdown";

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, 180]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const countdown = useCountdown(weddingData.date.ceremonyDate);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1E1915]"
    >
      {/* Background Image with Parallax & Gold Tinted Vignette */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        <img
          src={weddingData.couple.bride.photo}
          alt="Wedding Couple"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        {/* Soft Golden & Dark Gradient Overlays for Editorial Look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,rgba(0,0,0,0.5)_100%)]" />
      </motion.div>

      {/* 4 Corner Botanical Gold Line Art (Exact style from reference image) */}
      <div className="absolute top-6 left-6 z-20 hidden sm:block">
        <FloralCorner position="top-left" color="#F6E7B8" />
      </div>
      <div className="absolute top-6 right-6 z-20 hidden sm:block">
        <FloralCorner position="top-right" color="#F6E7B8" />
      </div>
      <div className="absolute bottom-6 left-6 z-20 hidden sm:block">
        <FloralCorner position="bottom-left" color="#F6E7B8" />
      </div>
      <div className="absolute bottom-6 right-6 z-20 hidden sm:block">
        <FloralCorner position="bottom-right" color="#F6E7B8" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: opacityText }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center text-white px-4 max-w-3xl mx-auto pt-16 pb-12"
      >
        {/* Subtitle */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#F6E7B8] font-sans font-medium mb-3 sm:mb-4">
          Together With Their Families
        </p>

        {/* Couple Names */}
        <div className="py-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-wide text-white leading-tight">
            {weddingData.couple.bride.shortName}{" "}
            <span className="font-script text-[#D4AF37] text-5xl sm:text-7xl md:text-8xl font-normal mx-1 italic">
              &
            </span>{" "}
            {weddingData.couple.groom.shortName}
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/80 font-sans mt-3 mb-6">
          Are Getting Married
        </p>

        {/* Date Divider Badge */}
        <div className="inline-flex flex-col items-center justify-center border-y border-[#D4AF37]/60 py-3 px-8 my-2">
          <span className="text-sm sm:text-lg tracking-[0.3em] font-serif font-medium text-[#F6E7B8]">
            {weddingData.date.displayDate}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-[#D4AF37] mt-1">
            {weddingData.date.day}
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="mt-8 flex justify-center items-center gap-3 sm:gap-4">
          {[
            { label: "Days", value: countdown.days },
            { label: "Hours", value: countdown.hours },
            { label: "Mins", value: countdown.minutes },
            { label: "Secs", value: countdown.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl px-3 py-2 sm:px-4 sm:py-3 min-w-[64px] sm:min-w-[76px] text-center shadow-lg"
            >
              <div className="text-lg sm:text-2xl font-serif font-semibold text-[#F6E7B8]">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#D4AF37]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 flex flex-col items-center justify-center text-[#D4AF37] opacity-80"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] mb-1">Scroll</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

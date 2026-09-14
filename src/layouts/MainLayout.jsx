import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Navbar from "../components/Navbar";
import { FloralDivider, WeddingRingsIcon } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";
import leafImg from "../assets/images/bunga.png";
import audioFile from "../assets/music/SeribuBidadari.mp3";

export default function MainLayout({ children }) {
  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => setIsAudioPlaying(false));
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#2C2723] overflow-x-hidden">
      {/* BACKGROUND PARTICLES (Golden flower petals falling softly) */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 12 },
            move: {
              enable: true,
              speed: 0.8,
              direction: "bottom",
              gravity: { enable: true, acceleration: 0.1 },
            },
            shape: {
              type: "image",
              image: {
                src: leafImg,
                width: 32,
                height: 32,
              },
            },
            opacity: { value: { min: 0.4, max: 0.7 } },
            size: { value: { min: 14, max: 26 } },
          },
        }}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      {/* BACKGROUND AUDIO */}
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>

      {/* LUXURY GOLDEN ENVELOPE / COVER SCREEN */}
      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1613] bg-[radial-gradient(ellipse_at_center,rgba(60,50,40,1)_0%,rgba(20,17,14,1)_100%)] text-white"
          >
            {/* Ambient Gold Halo */}
            <div className="absolute w-96 h-96 rounded-full bg-[#D4AF37]/10 filter blur-3xl pointer-events-none" />

            <div className="relative max-w-md w-full bg-[#FAF7F2] text-[#2C2723] rounded-3xl p-8 sm:p-10 border-2 border-gold shadow-2xl text-center gold-shadow">
              {/* Top Rings Icon */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold/10 border border-gold flex items-center justify-center">
                <WeddingRingsIcon className="w-6 h-6 text-gold" />
              </div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8C6D1F] font-semibold mb-2">
                The Wedding Of
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#2C2723] mb-2 font-normal">
                {weddingData.couple.bride.shortName}{" "}
                <span className="font-script text-[#D4AF37] text-4xl">&</span>{" "}
                {weddingData.couple.groom.shortName}
              </h2>

              <FloralDivider className="my-3" />

              <p className="text-xs sm:text-sm text-[#7A7067] mb-6 font-light">
                {weddingData.date.fullDateText}
              </p>

              <div className="border-t border-[#E8DECE] pt-6">
                <p className="text-xs text-[#7A7067] mb-4">
                  Kepada Yth. Bapak/Ibu/Saudara/i
                  <br />
                  <span className="font-medium text-[#2C2723] text-sm">Tamu Undangan Terhormat</span>
                </p>

                <button
                  onClick={handleOpen}
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#B38728] via-[#D4AF37] to-[#B38728] text-white font-sans text-xs uppercase tracking-[0.25em] font-semibold py-3.5 px-6 rounded-full shadow-lg hover:brightness-110 hover:scale-[1.02] transition duration-300 group"
                >
                  <svg className="w-4 h-4 text-white group-hover:rotate-12 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5m0 0l-2.25 1.5a2 2 0 01-2.25 0L6.75 14.5" />
                  </svg>
                  <span>Buka Undangan</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN WEBSITE CONTENT */}
      <div className={`relative z-20 transition-opacity duration-700 ${opened ? "opacity-100" : "opacity-0"}`}>
        <Navbar isAudioPlaying={isAudioPlaying} toggleAudio={toggleAudio} />
        <main>{children}</main>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { WeddingRingsIcon } from "./FloralOrnament";
import { weddingData } from "../data/wedding";

export default function Navbar({ isAudioPlaying, toggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Story", href: "#story" },
    { name: "Timeline", href: "#timeline" },
    { name: "Events", href: "#events" },
    { name: "Venue", href: "#venue" },
    { name: "Dress Code", href: "#dresscode" },
    { name: "Gallery", href: "#gallery" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#E8DECE] py-3"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#hero"
          className="flex items-center gap-2 group transition"
        >
          <div className="w-8 h-8 rounded-full border border-gold/70 flex items-center justify-center bg-white/20 backdrop-blur-sm group-hover:scale-105 transition">
            <WeddingRingsIcon className="w-5 h-5 text-gold" />
          </div>
          <span
            className={`font-serif tracking-widest text-base sm:text-lg font-semibold uppercase ${
              isScrolled ? "text-[#2C2723]" : "text-white drop-shadow"
            }`}
          >
            {weddingData.couple.title}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition duration-200 hover:text-gold ${
                isScrolled
                  ? "text-[#4A433E]"
                  : "text-white/90 drop-shadow hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Audio toggle button */}
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border transition duration-300 flex items-center justify-center ${
                isAudioPlaying
                  ? "border-gold text-gold bg-gold/10 animate-pulse"
                  : isScrolled
                  ? "border-gray-300 text-gray-500"
                  : "border-white/50 text-white"
              }`}
              title={isAudioPlaying ? "Mute Music" : "Play Music"}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isAudioPlaying ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 19H5a2 2 0 01-2-2V7a2 2 0 012-2h4l5-5v22l-5-5z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                )}
              </svg>
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {toggleAudio && (
            <button
              onClick={toggleAudio}
              className={`p-1.5 rounded-full border ${
                isAudioPlaying
                  ? "border-gold text-gold bg-gold/10"
                  : isScrolled
                  ? "border-gray-300 text-gray-500"
                  : "border-white/50 text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19H5a2 2 0 01-2-2V7a2 2 0 012-2h4l5-5v22l-5-5z"
                />
              </svg>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition ${
              isScrolled ? "text-[#2C2723]" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E8DECE] px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase tracking-widest text-[#4A433E] hover:text-gold py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}


import { WeddingRingsIcon } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";

export default function Footer() {
  return (
    <footer>
      {/* Luxury Gold/Dark Blue Banner (As seen in the bottom of the reference image) */}
      <div className="bg-[#1C1815] border-t border-[#D4AF37]/30 text-white py-8 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand / Names */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-gold/60 flex items-center justify-center bg-white/5">
              <WeddingRingsIcon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <span className="font-serif tracking-widest text-lg font-semibold block text-[#F6E7B8]">
                {weddingData.couple.title}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
                Official Wedding Celebration
              </span>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-xs sm:text-sm text-gray-300 font-light tracking-wide max-w-md">
            Create. Celebrate. Share.
            <br />
            <span className="text-gray-400 text-xs">
              All in One Beautiful Wedding Invitation Website.
            </span>
          </div>

          {/* Action Button */}
          <div>
            <a
              href="#rsvp"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#B38728] text-[#1C1815] text-xs uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full hover:brightness-110 transition shadow-lg"
            >
              <span>Kirim Doa & Hadir</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Closing Greetings Note */}
      <div className="bg-[#14110E] py-6 text-center text-xs text-gray-400 border-t border-white/5">
        <p className="font-serif text-[#D4AF37] text-base mb-1">
          {weddingData.couple.title}
        </p>
        <p className="text-[11px] text-gray-500">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.
        </p>
        <p className="text-[10px] text-gray-600 mt-3 tracking-widest uppercase">
          © 2026 {weddingData.couple.title}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

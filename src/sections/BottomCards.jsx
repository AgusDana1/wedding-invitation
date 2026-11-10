import { useState } from "react";
import DOMPurify from "dompurify";
import { FloralBottomSprig, WeddingRingsIcon } from "../components/FloralOrnament";
import Modal from "../components/Modal";
import { weddingData } from "../data/wedding";

export default function BottomCards() {
  // RSVP Form State
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: "",
  });
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [wishesList, setWishesList] = useState([
    {
      name: "Andi & Maya",
      message: "Selamat untuk Ratna & Dika! Semoga langgeng dan bahagia selalu sampai kakek nenek.",
      time: "1 jam lalu",
    },
    {
      name: "Keluarga Wijaya",
      message: "Semoga perjalanan baru ini diberkahi kesehatan, rezeki melimpah, dan cinta abadi.",
      time: "3 jam lalu",
    },
  ]);

  // Gallery Lightbox State
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  // Hashtag Copy State
  const [copied, setCopied] = useState(false);

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const safeName = DOMPurify.sanitize(formData.name);
    const safeMessage = DOMPurify.sanitize(formData.message);

    const newWish = {
      name: safeName,
      message: safeMessage || "Selamat berbahagia!",
      time: "Baru saja",
    };

    setWishesList([newWish, ...wishesList]);
    setRsvpSuccess(true);
    setFormData({ name: "", attending: "yes", guests: "1", message: "" });
  };

  const copyHashtag = () => {
    navigator.clipboard.writeText(weddingData.couple.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 4 Cards Grid - Exactly matching the mockup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* ================= CARD 1: RSVP ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DECE] shadow-lg flex flex-col justify-between hover:border-gold transition duration-300">
            <div>
              <div className="text-center mb-5">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
                  RSVP
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#2C2723]">
                  Kindly Respond
                </h3>
                <p className="text-xs text-[#7A7067] mt-0.5">
                  by {weddingData.date.rsvpDeadline}
                </p>
              </div>

              {rsvpSuccess ? (
                <div className="bg-[#FAF7F2] border border-gold/40 rounded-xl p-4 text-center my-6">
                  <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-[#8C6D1F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-[#2C2723]">Konfirmasi Terkirim</p>
                  <p className="text-[11px] text-[#7A7067] mt-1">Terima kasih atas konfirmasi Anda!</p>
                  <button
                    onClick={() => setRsvpSuccess(false)}
                    className="mt-3 text-[10px] uppercase tracking-wider text-[#8C6D1F] underline"
                  >
                    Kirim respon lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRsvpSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#E8DECE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-gold transition"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">
                      Will You Attend?
                    </label>
                    <div className="space-y-1 text-xs text-[#4A433E]">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          checked={formData.attending === "yes"}
                          onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                          className="accent-[#8C6D1F]"
                        />
                        <span>Yes, can't wait!</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          checked={formData.attending === "no"}
                          onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                          className="accent-[#8C6D1F]"
                        />
                        <span>Sorry, can't make it</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#E8DECE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-gold transition"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#7A7067] font-semibold block mb-1">
                      Wishes & Blessings
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Write your wishes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs px-3.5 py-2 rounded-lg border border-[#E8DECE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-gold transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#2C2723] hover:bg-[#8C6D1F] text-white text-[11px] uppercase tracking-[0.25em] font-semibold transition duration-300 shadow-md"
                  >
                    Submit RSVP
                  </button>
                </form>
              )}
            </div>

            <FloralBottomSprig className="mt-6" />
          </div>

          {/* ================= CARD 2: PHOTO GALLERY ================= */}
          <div id="gallery" className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DECE] shadow-lg flex flex-col justify-between hover:border-gold transition duration-300">
            <div>
              <div className="text-center mb-5">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
                  Moments
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#2C2723]">
                  Photo Gallery
                </h3>
                <p className="text-xs text-[#7A7067] mt-0.5">Capturing the beauty</p>
              </div>

              {/* 2x3 Grid of thumbnails (exact mockup representation) */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {weddingData.gallery.slice(0, 4).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActivePhoto(item);
                      setGalleryModalOpen(true);
                    }}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-[#E8DECE]"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setActivePhoto(weddingData.gallery[0]);
                  setGalleryModalOpen(true);
                }}
                className="w-full py-3 rounded-xl border border-[#2C2723] text-[#2C2723] hover:bg-[#2C2723] hover:text-white text-[11px] uppercase tracking-[0.2em] font-semibold transition duration-300"
              >
                View Full Gallery
              </button>
            </div>

            <FloralBottomSprig className="mt-6" />
          </div>

          {/* ================= CARD 3: SCAN TO RSVP ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DECE] shadow-lg flex flex-col justify-between hover:border-gold transition duration-300 text-center">
            <div>
              <div className="mb-5">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
                  Quick Access
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#2C2723]">
                  Scan to RSVP
                </h3>
                <p className="text-xs text-[#7A7067] mt-1 max-w-[200px] mx-auto leading-relaxed">
                  Please scan the QR code to respond quickly
                </p>
              </div>

              {/* QR Code Container with Gold Borders and Heart Center */}
              <div className="relative inline-block p-3 rounded-xl bg-white border-2 border-[#D4AF37]/50 shadow-md my-2">
                <svg
                  className="w-40 h-40 mx-auto"
                  viewBox="0 0 210 210"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background putih */}
                  <rect width="210" height="210" fill="white"/>

                  {/* === FINDER PATTERN KIRI ATAS === */}
                  <rect x="10" y="10" width="56" height="56" rx="6" fill="#2C2723"/>
                  <rect x="17" y="17" width="42" height="42" rx="4" fill="white"/>
                  <rect x="24" y="24" width="28" height="28" rx="3" fill="#2C2723"/>

                  {/* === FINDER PATTERN KANAN ATAS === */}
                  <rect x="144" y="10" width="56" height="56" rx="6" fill="#2C2723"/>
                  <rect x="151" y="17" width="42" height="42" rx="4" fill="white"/>
                  <rect x="158" y="24" width="28" height="28" rx="3" fill="#2C2723"/>

                  {/* === FINDER PATTERN KIRI BAWAH === */}
                  <rect x="10" y="144" width="56" height="56" rx="6" fill="#2C2723"/>
                  <rect x="17" y="151" width="42" height="42" rx="4" fill="white"/>
                  <rect x="24" y="158" width="28" height="28" rx="3" fill="#2C2723"/>

                  {/* === ALIGNMENT PATTERN (kanan bawah) === */}
                  <rect x="152" y="152" width="22" height="22" rx="3" fill="#2C2723"/>
                  <rect x="157" y="157" width="12" height="12" rx="2" fill="white"/>
                  <rect x="161" y="161" width="4" height="4" fill="#2C2723"/>

                  {/* === TIMING PATTERN Horizontal === */}
                  {[76,86,96,106,116,126].map((x, i) => i % 2 === 0 && (
                    <rect key={`th-${i}`} x={x} y="68" width="8" height="8" fill="#2C2723"/>
                  ))}
                  {/* === TIMING PATTERN Vertical === */}
                  {[76,86,96,106,116,126].map((y, i) => i % 2 === 0 && (
                    <rect key={`tv-${i}`} x="68" y={y} width="8" height="8" fill="#2C2723"/>
                  ))}

                  {/* === DATA MODULES - baris atas (di bawah finder atas) === */}
                  <rect x="76" y="10" width="8" height="8" fill="#2C2723"/>
                  <rect x="96" y="10" width="8" height="8" fill="#2C2723"/>
                  <rect x="116" y="10" width="8" height="8" fill="#2C2723"/>
                  <rect x="136" y="10" width="8" height="8" fill="#2C2723"/>
                  <rect x="86" y="20" width="8" height="8" fill="#2C2723"/>
                  <rect x="106" y="20" width="8" height="8" fill="#2C2723"/>
                  <rect x="126" y="20" width="8" height="8" fill="#2C2723"/>
                  <rect x="76" y="30" width="8" height="8" fill="#2C2723"/>
                  <rect x="96" y="30" width="8" height="8" fill="#2C2723"/>
                  <rect x="136" y="30" width="8" height="8" fill="#2C2723"/>
                  <rect x="86" y="40" width="8" height="8" fill="#2C2723"/>
                  <rect x="116" y="40" width="8" height="8" fill="#2C2723"/>
                  <rect x="76" y="50" width="8" height="8" fill="#2C2723"/>
                  <rect x="106" y="50" width="8" height="8" fill="#2C2723"/>
                  <rect x="136" y="50" width="8" height="8" fill="#2C2723"/>
                  <rect x="96" y="60" width="8" height="8" fill="#2C2723"/>
                  <rect x="126" y="60" width="8" height="8" fill="#2C2723"/>

                  {/* === DATA MODULES - kolom kiri (di kanan finder kiri) === */}
                  <rect x="10" y="76" width="8" height="8" fill="#2C2723"/>
                  <rect x="10" y="96" width="8" height="8" fill="#2C2723"/>
                  <rect x="10" y="116" width="8" height="8" fill="#2C2723"/>
                  <rect x="10" y="136" width="8" height="8" fill="#2C2723"/>
                  <rect x="20" y="86" width="8" height="8" fill="#2C2723"/>
                  <rect x="20" y="106" width="8" height="8" fill="#2C2723"/>
                  <rect x="30" y="76" width="8" height="8" fill="#2C2723"/>
                  <rect x="30" y="116" width="8" height="8" fill="#2C2723"/>
                  <rect x="40" y="86" width="8" height="8" fill="#2C2723"/>
                  <rect x="40" y="136" width="8" height="8" fill="#2C2723"/>
                  <rect x="50" y="96" width="8" height="8" fill="#2C2723"/>
                  <rect x="50" y="126" width="8" height="8" fill="#2C2723"/>
                  <rect x="60" y="76" width="8" height="8" fill="#2C2723"/>
                  <rect x="60" y="106" width="8" height="8" fill="#2C2723"/>

                  {/* === DATA MODULES - kolom kanan === */}
                  <rect x="144" y="76" width="8" height="8" fill="#2C2723"/>
                  <rect x="154" y="86" width="8" height="8" fill="#2C2723"/>
                  <rect x="144" y="96" width="8" height="8" fill="#2C2723"/>
                  <rect x="164" y="106" width="8" height="8" fill="#2C2723"/>
                  <rect x="144" y="116" width="8" height="8" fill="#2C2723"/>
                  <rect x="154" y="126" width="8" height="8" fill="#2C2723"/>
                  <rect x="174" y="86" width="8" height="8" fill="#2C2723"/>
                  <rect x="184" y="96" width="8" height="8" fill="#2C2723"/>
                  <rect x="174" y="116" width="8" height="8" fill="#2C2723"/>
                  <rect x="184" y="136" width="8" height="8" fill="#2C2723"/>
                  <rect x="192" y="76" width="8" height="8" fill="#2C2723"/>
                  <rect x="192" y="106" width="8" height="8" fill="#2C2723"/>
                  <rect x="192" y="126" width="8" height="8" fill="#2C2723"/>

                  {/* === DATA MODULES - baris bawah === */}
                  <rect x="76" y="144" width="8" height="8" fill="#2C2723"/>
                  <rect x="96" y="154" width="8" height="8" fill="#2C2723"/>
                  <rect x="116" y="144" width="8" height="8" fill="#2C2723"/>
                  <rect x="136" y="154" width="8" height="8" fill="#2C2723"/>
                  <rect x="86" y="164" width="8" height="8" fill="#2C2723"/>
                  <rect x="106" y="144" width="8" height="8" fill="#2C2723"/>
                  <rect x="126" y="164" width="8" height="8" fill="#2C2723"/>
                  <rect x="76" y="174" width="8" height="8" fill="#2C2723"/>
                  <rect x="96" y="184" width="8" height="8" fill="#2C2723"/>
                  <rect x="116" y="174" width="8" height="8" fill="#2C2723"/>
                  <rect x="136" y="184" width="8" height="8" fill="#2C2723"/>
                  <rect x="86" y="192" width="8" height="8" fill="#2C2723"/>
                  <rect x="106" y="192" width="8" height="8" fill="#2C2723"/>
                  <rect x="126" y="192" width="8" height="8" fill="#2C2723"/>

                  {/* === DATA MODULES - area tengah === */}
                  <rect x="78" y="80" width="6" height="6" fill="#2C2723"/>
                  <rect x="90" y="78" width="6" height="6" fill="#2C2723"/>
                  <rect x="102" y="82" width="6" height="6" fill="#2C2723"/>
                  <rect x="118" y="78" width="6" height="6" fill="#2C2723"/>
                  <rect x="130" y="80" width="6" height="6" fill="#2C2723"/>
                  <rect x="78" y="92" width="6" height="6" fill="#2C2723"/>
                  <rect x="130" y="90" width="6" height="6" fill="#2C2723"/>
                  <rect x="78" y="128" width="6" height="6" fill="#2C2723"/>
                  <rect x="90" y="134" width="6" height="6" fill="#2C2723"/>
                  <rect x="118" y="130" width="6" height="6" fill="#2C2723"/>
                  <rect x="130" y="126" width="6" height="6" fill="#2C2723"/>
                  <rect x="102" y="132" width="6" height="6" fill="#2C2723"/>
                  <rect x="130" y="138" width="6" height="6" fill="#2C2723"/>
                  <rect x="78" y="138" width="6" height="6" fill="#2C2723"/>

                  {/* === CENTER HEART EMBLEM === */}
                  <rect x="88" y="88" width="34" height="34" rx="8" fill="white" stroke="#D4AF37" strokeWidth="2"/>
                  <path
                    d="M105 116 C99 110, 92 105, 92 99 C92 95, 95 92, 99 92 C101.5 92, 103.5 93.5, 105 95.5 C106.5 93.5, 108.5 92, 111 92 C115 92, 118 95, 118 99 C118 105, 111 110, 105 116 Z"
                    fill="#8C6D1F"
                  />
                </svg>
              </div>

              {/* Script Thank You Font (As seen in mockup) */}
              <div className="mt-4">
                <p className="font-script text-3xl sm:text-4xl text-[#8C6D1F]">
                  Thank You!
                </p>
              </div>
            </div>

            <FloralBottomSprig className="mt-6" />
          </div>

          {/* ================= CARD 4: SHARE THE LOVE ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DECE] shadow-lg flex flex-col justify-between hover:border-gold transition duration-300 text-center">
            <div>
              <div className="mb-5">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
                  Social
                </span>
                <h3 className="text-2xl font-serif font-semibold text-[#2C2723]">
                  Share the Love
                </h3>
                <p className="text-xs text-[#7A7067] mt-1 max-w-[200px] mx-auto leading-relaxed">
                  Help us capture our special day! Use our hashtag
                </p>
              </div>

              {/* Hashtag Badge with Copy Button */}
              <div className="my-6">
                <button
                  onClick={copyHashtag}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#D4AF37] hover:bg-gold/10 transition group"
                  title="Click to copy hashtag"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#8C6D1F]">
                    {weddingData.couple.hashtag}
                  </span>
                  <svg className="w-4 h-4 text-gold group-hover:scale-110 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
                {copied && (
                  <p className="text-[10px] text-[#8C6D1F] mt-1 font-medium animate-fadeIn">
                    Hashtag copied to clipboard!
                  </p>
                )}
              </div>

              {/* Follow Us & Social Icons */}
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#7A7067] font-semibold mb-3">
                  Follow Us
                </p>
                <div className="flex justify-center items-center gap-3">
                  {/* Instagram */}
                  <a
                    href={weddingData.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gold/60 text-[#8C6D1F] hover:bg-[#8C6D1F] hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href={weddingData.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gold/60 text-[#8C6D1F] hover:bg-[#8C6D1F] hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a
                    href={weddingData.social.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gold/60 text-[#8C6D1F] hover:bg-[#8C6D1F] hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href={weddingData.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-gold/60 text-[#8C6D1F] hover:bg-[#8C6D1F] hover:text-white flex items-center justify-center transition duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <FloralBottomSprig className="mt-6" />
          </div>
        </div>

        {/* Wishes Real-time Board */}
        {wishesList.length > 0 && (
          <div className="mt-14 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DECE] shadow-md">
            <h4 className="text-xl font-serif text-center text-[#2C2723] mb-4">
              Doa & Ucapan Hangat
            </h4>
            <div className="divide-y divide-[#E8DECE] max-h-48 overflow-y-auto pr-2">
              {wishesList.map((wish, i) => (
                <div key={i} className="py-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[#8C6D1F]">{wish.name}</span>
                    <span className="text-[10px] text-gray-400">{wish.time}</span>
                  </div>
                  <p className="text-xs text-[#5A5046] font-light leading-relaxed">{wish.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Gallery Lightbox Modal */}
      <Modal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        title="Galeri Prewedding"
      >
        <div className="space-y-4">
          {activePhoto && (
            <div className="rounded-xl overflow-hidden border border-[#E8DECE] aspect-[4/3] bg-black/5">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="grid grid-cols-6 gap-2 pt-2">
            {weddingData.gallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition ${
                  activePhoto?.id === photo.id ? "border-gold scale-105" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}


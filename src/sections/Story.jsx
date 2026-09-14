import { useState } from "react";
import { FloralDivider, FloralCorner } from "../components/FloralOrnament";
import Modal from "../components/Modal";
import { weddingData } from "../data/wedding";

export default function Story() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-[#FAF7F2] overflow-hidden">
      {/* Delicate floral sprig in background corner */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-40">
        <FloralCorner position="bottom-right" color="#D4AF37" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Ornamental Floral Divider */}
        <div className="text-center mb-12 sm:mb-16">
          <FloralDivider className="mb-2" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C2723] tracking-wide">
            Our Love Story
          </h2>
        </div>

        {/* 2-Column Content Layout (Matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Portrait Photo with Gold Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative p-2.5 rounded-2xl bg-white border border-[#E8DECE] shadow-xl">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-64 sm:w-72">
                <img
                  src={weddingData.couple.groom.photo}
                  alt="Couple Story"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 border border-gold/40 rounded-xl pointer-events-none m-2" />
              </div>
            </div>
          </div>

          {/* Right Column: Quote, Narrative & Milestones */}
          <div className="md:col-span-7 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold mb-2">
              Chapter of Love
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2C2723] mb-4">
              {weddingData.story.subtitle}
            </h3>

            <p className="text-[#4A433E] text-sm sm:text-base leading-relaxed font-sans font-light mb-8 max-w-xl">
              {weddingData.story.summary}
            </p>

            {/* 3 Milestone Stat Counters (Directly from reference image: 850 Days / 25 Trips / 12 Countries) */}
            <div className="grid grid-cols-3 gap-4 border-y border-[#E8DECE] py-6 mb-8 max-w-lg mx-auto md:mx-0">
              {weddingData.story.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#8C6D1F]">
                    {stat.number}
                  </div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#7A7067] mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Read Our Story Button */}
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#2C2723] text-white text-xs uppercase tracking-[0.25em] font-medium px-8 py-3.5 rounded-full hover:bg-[#8C6D1F] transition duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                <span>Read Our Story</span>
                <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Kisah Kasih Kami"
      >
        <div className="space-y-6 max-h-[60vh] overflow-y-auto px-2">
          {weddingData.story.fullStory.map((item, idx) => (
            <div key={idx} className="border-l-2 border-gold pl-4 py-1">
              <span className="text-xs uppercase font-bold tracking-widest text-gold">
                {item.year}
              </span>
              <h4 className="text-lg font-serif font-semibold text-[#2C2723] mt-0.5">
                {item.title}
              </h4>
              <p className="text-sm text-[#5A5046] mt-1 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </section>
  );
}


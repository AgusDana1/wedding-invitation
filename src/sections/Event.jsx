import { FloralDivider } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";

export default function Event() {
  const { ceremony, reception } = weddingData.events;

  return (
    <section id="events" className="py-20 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <FloralDivider className="mb-2" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C2723] tracking-wide">
            Ceremony & Reception
          </h2>
        </div>

        {/* 2 Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ceremony Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DECE] shadow-lg text-center relative overflow-hidden group hover:border-[#D4AF37] transition duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FAF7F2] border border-gold flex items-center justify-center">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="7" strokeWidth="1.8" />
                <path strokeLinecap="round" strokeWidth="1.8" d="M12 5V3m-2 1h4" />
              </svg>
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
              The Vows
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2723] mb-2">
              Ceremony
            </h3>

            <div className="inline-block py-1 px-4 rounded-full bg-[#FAF7F2] text-[#8C6D1F] text-xs font-semibold tracking-wider mb-4 border border-[#E8DECE]">
              {ceremony.time}
            </div>

            <h4 className="text-lg font-serif font-medium text-[#2C2723] mb-2">
              {ceremony.venue}
            </h4>
            <p className="text-sm text-[#6B6258] font-light leading-relaxed max-w-xs mx-auto mb-6">
              {ceremony.address}
            </p>

            <a
              href={ceremony.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C2723] font-semibold border-b border-[#D4AF37] pb-1 hover:text-[#8C6D1F] transition"
            >
              <span>View Map</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Reception Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DECE] shadow-lg text-center relative overflow-hidden group hover:border-[#D4AF37] transition duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#FAF7F2] border border-gold flex items-center justify-center">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 21V8a2 2 0 012-2h12a2 2 0 012 2v13" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 21v-6a3 3 0 016 0v6" />
              </svg>
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold block mb-1">
              The Celebration
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2723] mb-2">
              Reception
            </h3>

            <div className="inline-block py-1 px-4 rounded-full bg-[#FAF7F2] text-[#8C6D1F] text-xs font-semibold tracking-wider mb-4 border border-[#E8DECE]">
              {reception.time}
            </div>

            <h4 className="text-lg font-serif font-medium text-[#2C2723] mb-2">
              {reception.venue}
            </h4>
            <p className="text-sm text-[#6B6258] font-light leading-relaxed max-w-xs mx-auto mb-6">
              {reception.address}
            </p>

            <a
              href={reception.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C2723] font-semibold border-b border-[#D4AF37] pb-1 hover:text-[#8C6D1F] transition"
            >
              <span>View Map</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

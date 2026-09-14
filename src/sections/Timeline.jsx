import { FloralDivider } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";

export default function Timeline() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "ring":
        return (
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="7" strokeWidth="1.8" />
            <path strokeLinecap="round" strokeWidth="1.8" d="M12 5V3m-2 1h4" />
          </svg>
        );
      case "cocktail":
        return (
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 5l-7 7-7-7h14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 12v7m-4 0h8" />
          </svg>
        );
      case "reception":
        return (
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 21V8a2 2 0 012-2h12a2 2 0 012 2v13" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 21v-6a3 3 0 016 0v6" />
            <path strokeLinecap="round" strokeWidth="1.8" d="M12 3v3" />
          </svg>
        );
      case "party":
      default:
        return (
          <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
    }
  };

  return (
    <section id="timeline" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <FloralDivider className="mb-2" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C2723] tracking-wide">
            Wedding Timeline
          </h2>
        </div>

        {/* Timeline Grid / Horizontal Nodes */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-0" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {weddingData.timeline.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Node Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-[#8C6D1F] transition duration-300 mb-4">
                  {getIcon(item.icon)}
                </div>

                {/* Time */}
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D1F] mb-1">
                  {item.time}
                </div>

                {/* Title */}
                <div className="text-base sm:text-lg font-serif font-semibold text-[#2C2723] mb-1">
                  {item.title}
                </div>

                {/* Description */}
                <div className="text-xs text-[#7A7067] font-light max-w-[140px]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


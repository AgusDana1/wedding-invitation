import { FloralDivider } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";

export default function Venue() {
  const { venue } = weddingData;

  return (
    <section id="venue" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <FloralDivider className="mb-2" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C2723] tracking-wide">
            Venue
          </h2>
        </div>

        {/* Venue Photo & Details */}
        <div className="text-center">
          {/* Framed Landscape Photo */}
          <div className="relative p-3 rounded-3xl bg-[#FAF7F2] border border-[#E8DECE] shadow-xl max-w-3xl mx-auto mb-8">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 text-left text-white hidden sm:block">
                <p className="text-xs uppercase tracking-[0.2em] text-[#F6E7B8]">Official Location</p>
                <h4 className="text-xl font-serif font-semibold">{venue.name}</h4>
              </div>
            </div>
          </div>

          {/* Venue Info */}
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C2723] mb-2">
            {venue.name}
          </h3>
          <p className="text-sm sm:text-base text-[#6B6258] font-light max-w-lg mx-auto mb-8 leading-relaxed">
            {venue.address}
          </p>

          {/* View Location Button (Styled exactly like the solid button in mockup) */}
          <a
            href={venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2C2723] text-white text-xs uppercase tracking-[0.25em] font-medium px-8 py-3.5 rounded-full hover:bg-[#8C6D1F] transition duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <span>View Location</span>
            <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


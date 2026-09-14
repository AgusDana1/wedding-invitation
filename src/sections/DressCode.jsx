import { FloralDivider } from "../components/FloralOrnament";
import { weddingData } from "../data/wedding";

export default function DressCode() {
  const { dressCode } = weddingData;

  return (
    <section id="dresscode" className="py-20 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <FloralDivider className="mb-2" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C2723] tracking-wide">
            Dress Code
          </h2>
          <p className="text-sm uppercase tracking-[0.25em] text-[#8C6D1F] font-semibold mt-2">
            {dressCode.title}
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#6B6258] max-w-lg mx-auto font-light leading-relaxed mb-10">
          {dressCode.description}
        </p>

        {/* 5 Palette Swatch Circles (Matching reference image) */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {dressCode.colors.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-md border-2 border-white ring-1 ring-gold/40 group-hover:scale-110 transition duration-300 transform"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-[10px] sm:text-xs text-[#7A7067] tracking-wider uppercase mt-2 font-medium">
                {color.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


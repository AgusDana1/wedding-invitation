// Komponen Ornamen Bunga Botanikal Vektor Emas (Sharp SVG)

export function FloralDivider({ className = "my-4", color = "#D4AF37" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <svg
        className="w-16 sm:w-24 h-4 text-gold"
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 C30 10, 40 2, 50 10 C60 18, 70 10, 100 10"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="85" cy="5" r="1.5" fill={color} />
        <circle cx="70" cy="15" r="1.5" fill={color} />
        <path
          d="M65 10 Q70 6 75 10 Q70 14 65 10"
          stroke={color}
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Central Botanical Emblem */}
      <svg
        className="w-8 h-8 flex-shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="20" cy="20" r="3" fill={color} />
        {/* Petals */}
        <path
          d="M20 7 C18 12, 18 15, 20 17 C22 15, 22 12, 20 7 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M20 33 C18 28, 18 25, 20 23 C22 25, 22 28, 20 33 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M7 20 C12 18, 15 18, 17 20 C15 22, 12 22, 7 20 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M33 20 C28 18, 25 18, 23 20 C25 22, 28 22, 33 20 Z"
          fill={color}
          opacity="0.85"
        />
        {/* Diagonal Petals */}
        <circle cx="13" cy="13" r="1.5" fill={color} />
        <circle cx="27" cy="13" r="1.5" fill={color} />
        <circle cx="13" cy="27" r="1.5" fill={color} />
        <circle cx="27" cy="27" r="1.5" fill={color} />
      </svg>

      <svg
        className="w-16 sm:w-24 h-4 text-gold transform scale-x-[-1]"
        viewBox="0 0 100 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10 C30 10, 40 2, 50 10 C60 18, 70 10, 100 10"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="85" cy="5" r="1.5" fill={color} />
        <circle cx="70" cy="15" r="1.5" fill={color} />
        <path
          d="M65 10 Q70 6 75 10 Q70 14 65 10"
          stroke={color}
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function FloralCorner({ position = "top-left", className = "", color = "#D4AF37" }) {
  let transform = "";
  if (position === "top-right") transform = "scale-x-[-1]";
  if (position === "bottom-left") transform = "scale-y-[-1]";
  if (position === "bottom-right") transform = "scale-x-[-1] scale-y-[-1]";

  return (
    <div className={`pointer-events-none ${transform} ${className}`}>
      <svg
        className="w-24 h-24 sm:w-36 sm:h-36 opacity-75"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Branch Stem */}
        <path
          d="M5 5 Q35 15, 60 45 Q80 75, 115 95"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Secondary Tendril */}
        <path
          d="M20 12 Q45 35, 50 70"
          stroke={color}
          strokeWidth="0.9"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path
          d="M25 14 Q32 8, 38 15 Q30 18, 25 14 Z"
          fill={color}
          fillOpacity="0.25"
          stroke={color}
          strokeWidth="0.8"
        />
        <path
          d="M42 25 Q52 20, 56 30 Q47 32, 42 25 Z"
          fill={color}
          fillOpacity="0.25"
          stroke={color}
          strokeWidth="0.8"
        />
        <path
          d="M58 43 Q70 40, 72 52 Q62 52, 58 43 Z"
          fill={color}
          fillOpacity="0.25"
          stroke={color}
          strokeWidth="0.8"
        />
        <path
          d="M78 72 Q92 70, 93 84 Q82 82, 78 72 Z"
          fill={color}
          fillOpacity="0.25"
          stroke={color}
          strokeWidth="0.8"
        />
        {/* Flower Blossom in Corner */}
        <circle cx="28" cy="40" r="5" stroke={color} strokeWidth="1" />
        <circle cx="28" cy="40" r="2" fill={color} />
        <path
          d="M28 32 C26 35, 26 37, 28 39 C30 37, 30 35, 28 32 Z"
          fill={color}
        />
        <path
          d="M28 48 C26 45, 26 43, 28 41 C30 43, 30 45, 28 48 Z"
          fill={color}
        />
        <path
          d="M20 40 C23 38, 25 38, 27 40 C25 42, 23 42, 20 40 Z"
          fill={color}
        />
        <path
          d="M36 40 C33 38, 31 38, 29 40 C31 42, 33 42, 36 40 Z"
          fill={color}
        />
        {/* Bud Berries */}
        <circle cx="98" cy="85" r="2" fill={color} />
        <circle cx="108" cy="92" r="2.5" fill={color} />
        <circle cx="48" cy="65" r="2" fill={color} />
      </svg>
    </div>
  );
}

export function FloralBottomSprig({ className = "", color = "#D4AF37" }) {
  return (
    <div className={`flex justify-center pointer-events-none ${className}`}>
      <svg
        className="w-28 sm:w-36 h-12 opacity-80"
        viewBox="0 0 160 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 38 Q45 30, 80 32 Q115 30, 150 38"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Center Bloom */}
        <circle cx="80" cy="22" r="4.5" stroke={color} strokeWidth="1.2" />
        <circle cx="80" cy="22" r="2" fill={color} />
        {/* Petals */}
        <path d="M80 13 Q77 17 80 20 Q83 17 80 13 Z" fill={color} />
        <path d="M80 31 Q77 27 80 24 Q83 27 80 31 Z" fill={color} />
        <path d="M71 22 Q75 19 78 22 Q75 25 71 22 Z" fill={color} />
        <path d="M89 22 Q85 19 82 22 Q85 25 89 22 Z" fill={color} />

        {/* Delicate Side Leaves */}
        <path
          d="M50 32 Q45 22, 55 24 Q53 30, 50 32 Z"
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="0.8"
        />
        <path
          d="M110 32 Q115 22, 105 24 Q107 30, 110 32 Z"
          fill={color}
          fillOpacity="0.3"
          stroke={color}
          strokeWidth="0.8"
        />
        <circle cx="35" cy="31" r="1.5" fill={color} />
        <circle cx="125" cy="31" r="1.5" fill={color} />
      </svg>
    </div>
  );
}

export function WeddingRingsIcon({ className = "w-6 h-6", color = "#D4AF37" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="13" r="6" stroke={color} strokeWidth="1.6" />
      <circle cx="15" cy="11" r="6" stroke={color} strokeWidth="1.6" />
      {/* Gem on top of right ring */}
      <path
        d="M15 4 L16.5 6 L13.5 6 Z"
        fill={color}
      />
    </svg>
  );
}


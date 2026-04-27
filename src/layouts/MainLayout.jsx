import { useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import leafImg from '../assets/images/bunga.png';
import audioFile from '../assets/music/SeribuBidadari.mp3';

export default function MainLayout({ children }) {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-cream min-h-screen">

      {/* PARTICLES */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 15 },
            move: {
              enable: true,
              speed: 1,
              direction: "bottom",
              gravity: { enable: true, acceleration: 0.2 },
              outModes: { default: "out" },
            },
            rotate: {
              value: { min: 0, max: 360 },
              animation: { enable: true, speed: 5 },
            },
            shape: {
              type: "image",
              image: {
                src: leafImg,
                width: 32,
                height: 32,
              },
            },
            size: { value: { min: 15, max: 30 } },
            opacity: { value: 0.8 },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>

      {/* OPEN BUTTON */}
      {!isPlaying && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <button
            onClick={playMusic}
            className="px-8 py-4 bg-gold text-white rounded-full shadow-lg"
          >
            Buka Undangan
          </button>
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

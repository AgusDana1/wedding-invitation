import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import leafImg from '../assets/images/bunga.png';
import audioFile from '../assets/music/SeribuBidadari.mp3';

export default function MainLayout({ children }) {

  const audioRef = useRef(null);
  const [opened, setOpened] = useState(false);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const handleOpen = () => {
    setOpened(true);
    audioRef.current?.play();
  };

  return (
    <div className="relative overflow-hidden bg-cream min-h-screen">

      {/* PARTICLES */}
      <Particles
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
          },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* AUDIO */}
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>

      {/* ENVELOPE OPENING */}
      {!opened && (
        <div className="fixed inset-0 bg-cream flex items-center justify-center z-50">

          <div onClick={handleOpen} className="cursor-pointer">

            {/* Envelope */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: opened ? 180 : 0 }}
              transition={{ duration: 1 }}
              className="w-72 h-44 relative perspective"
            >

              {/* Body */}
              <div className="absolute w-full h-full bg-white border border-gold rounded-lg shadow-lg"></div>

              {/* Flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: opened ? -180 : 0 }}
                transition={{ duration: 1 }}
                className="absolute top-0 w-full h-1/2 bg-gold origin-top"
                style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
              />

              {/* Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gold font-wedding text-xl">
                  Buka Undangan
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className={`relative z-10 transition duration-700 ${opened ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
}

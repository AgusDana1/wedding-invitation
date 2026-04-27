import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import leafImg from '../assets/images/bunga.png';

export default function MainLayout({ children }) {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative overflow-hidden bg-cream min-h-screen">

      {/* LEAF EFFECT */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },

          particles: {
            number: {
              value: 15,
            },

            move: {
              enable: true,
              speed: 1,
              direction: "bottom",
              outModes: { default: "out" },
              gravity: {
                enable: true,
                acceleration: 0.2, // jatuh natural
              },
            },

            rotate: {
              value: { min: 0, max: 360 },
              animation: {
                enable: true,
                speed: 5,
              },
            },

            shape: {
              type: "image",
              image: {
                src: leafImg,
                width: 32,
                height: 32,
              },
            },

            size: {
              value: { min: 15, max: 30 },
            },

            opacity: {
              value: 0.8,
            },
          },
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Background music */}
            <audio autoPlay loop>
                <source src="/src/assets/music/SeribuBidadari.mp3" type="audio/mp3"/>
            </audio>

      {/* CONTENT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../components/Container";
import heroImg from "../assets/images/prewed.jpg";

export default function Hero() {

  const { scrollY } = useScroll();

  // Parallax background (lebih lambat)
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);

  // Text naik + fade
  const yText = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="h-[120vh] relative overflow-hidden">

      {/* Background Image (Parallax) */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <img
          src={heroImg}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 h-screen flex items-center justify-center"
      >
        <Container>
          <div className="text-center">

            <h1 className="text-5xl sm:text-5xl md:text-7xl text-gold font-wedding leading-tight">
              Ratna & Dika
            </h1>

            <div className="w-20 h-[2px] bg-gold mx-auto my-6"></div>

            <p className="text-gray-700 text-sm sm:text-base">
              30 Mei 2026 • Bali, Indonesia
            </p>

          </div>
        </Container>
      </motion.div>
    </section>
  );
}

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import prewedImg from '../assets/images/prewed.jpg';

export default function Couple() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <SectionTitle>The Couple</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">

          {/* Groom */}
          <div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold">

              <img
                src={prewedImg}
                alt="Groom"
                className="w-full h-full object-cover"
              />

            </div>

            <h3 className="mt-4 text-lg sm:text-xl font-semibold">
              Dika
            </h3>
          </div>

          {/* Bride */}
          <div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-gold">

              <img
                src={prewedImg}
                alt="Bride"
                className="w-full h-full object-cover"
              />

            </div>

            <h3 className="mt-4 text-lg sm:text-xl font-semibold">
              Ratna
            </h3>
          </div>

        </div>
      </Container>
    </section>
  );
}

import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Event() {
  return (
    <section className="py-16 sm:py-20 bg-cream text-center">
      <Container>
        <SectionTitle>Event</SectionTitle>

        <p className="text-gray-700">Bali, Indonesia</p>
        <p className="text-gray-500">30 Mei 2026</p>
      </Container>
    </section>
  );
}

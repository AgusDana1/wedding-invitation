import { useState } from "react";
import DOMPurify from "dompurify";

export default function RSVP() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const safeName = DOMPurify.sanitize(name);
    alert(`Terima kasih ${safeName}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-white flex justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-10 w-full max-w-md text-center border border-[#f1e7d0]">

        <h2 className="text-3xl sm:text-4xl text-gold font-wedding mb-3">
          RSVP
        </h2>

        <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full px-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-gold outline-none"
            onChange={(e) => setName(e.target.value)}
          />

          <button className="w-full py-3 rounded-full bg-gold text-white shadow-md hover:opacity-90 transition">
            Kirim Kehadiran
          </button>

        </form>
      </div>
    </section>
  );
}

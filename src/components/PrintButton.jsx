import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintableInvitation from "./PrintableInvitation";

/**
 * PrintButton — Tombol cetak mengambang (Floating Action Button).
 * Muncul di sudut kanan bawah layar setelah website dibuka.
 * Menggunakan react-to-print untuk memunculkan dialog cetak browser
 * yang menampilkan layout PrintableInvitation (3 halaman A5).
 */
export default function PrintButton() {
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Undangan Pernikahan — Ratna & Dika",
    pageStyle: `
      @page {
        size: A5 landscape;
        margin: 0;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
      }
    `,
  });

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={handlePrint}
        title="Cetak Undangan Fisik"
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-2
          bg-gradient-to-r from-[#B38728] via-[#D4AF37] to-[#B38728]
          text-[#1C1815] text-xs uppercase tracking-[0.2em] font-bold
          px-5 py-3 rounded-full shadow-xl
          hover:brightness-110 hover:scale-105
          transition-all duration-300
          group
          no-print
        "
        aria-label="Cetak Undangan Fisik"
      >
        {/* Printer Icon */}
        <svg
          className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-10 0v4h8v-4H6z"
          />
        </svg>
        <span className="hidden sm:inline">Cetak Undangan</span>
      </button>

      {/* Hidden printable content — tidak tampil di layar, hanya saat print */}
      <div style={{ display: "none" }}>
        <PrintableInvitation ref={printRef} />
      </div>
    </>
  );
}

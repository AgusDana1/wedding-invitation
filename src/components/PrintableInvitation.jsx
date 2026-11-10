import { forwardRef } from "react";
import { weddingData } from "../data/wedding";

/**
 * PrintableInvitation — Konten undangan yang dioptimalkan untuk cetak fisik.
 * Komponen ini hanya tampil saat dialog print (window.print / react-to-print).
 * Layout A5 landscape dengan warna emas & ivory agar indah saat dicetak.
 */
const PrintableInvitation = forwardRef(function PrintableInvitation(_, ref) {
  const { couple, date, events, venue, dressCode, story } = weddingData;

  return (
    <div ref={ref} className="print-only">
      {/* ============================================================
          Halaman 1: Cover Undangan
      ============================================================ */}
      <div className="print-page print-cover">
        {/* Border frame simetris keemasan */}
        <div className="print-frame">
          {/* Corner ornaments (CSS borders) */}
          <div className="print-corner top-left" />
          <div className="print-corner top-right" />
          <div className="print-corner bottom-left" />
          <div className="print-corner bottom-right" />

          <div className="print-cover-content">
            {/* Top label */}
            <p className="print-label-sm">Together With Their Families</p>

            {/* Divider Line */}
            <div className="print-divider-line" />

            {/* Names */}
            <h1 className="print-couple-names">
              {couple.bride.shortName}
              <span className="print-ampersand"> & </span>
              {couple.groom.shortName}
            </h1>

            {/* Sub label */}
            <p className="print-label-sm print-muted">Are Getting Married</p>

            {/* Floral divider ornament */}
            <div className="print-floral-divider">
              <span className="print-floral-line" />
              <span className="print-floral-diamond">◆</span>
              <span className="print-floral-line" />
            </div>

            {/* Date Badge */}
            <div className="print-date-badge">
              <p className="print-date-text">{date.displayDate}</p>
              <p className="print-date-day">{date.day}</p>
            </div>

            {/* Full date text */}
            <p className="print-label-sm print-muted">{date.fullDateText}</p>

            {/* Hashtag */}
            <p className="print-hashtag">{couple.hashtag}</p>
          </div>
        </div>
      </div>

      {/* ============================================================
          Halaman 2: Detail Acara & Pasangan
      ============================================================ */}
      <div className="print-page print-details">
        <div className="print-frame">
          <div className="print-corner top-left" />
          <div className="print-corner top-right" />
          <div className="print-corner bottom-left" />
          <div className="print-corner bottom-right" />

          <div className="print-details-content">
            {/* Section: Pasangan */}
            <div className="print-section">
              <div className="print-section-header">
                <span className="print-floral-line" />
                <span className="print-section-title">The Couple</span>
                <span className="print-floral-line" />
              </div>

              <div className="print-couple-grid">
                {/* Bride */}
                <div className="print-person">
                  <p className="print-person-name">{couple.bride.fullName}</p>
                  <p className="print-person-parents">
                    Putri dari {couple.bride.fatherName}
                  </p>
                  <p className="print-person-parents">
                    & {couple.bride.motherName}
                  </p>
                </div>

                {/* Ampersand Center */}
                <div className="print-couple-ampersand">&amp;</div>

                {/* Groom */}
                <div className="print-person">
                  <p className="print-person-name">{couple.groom.fullName}</p>
                  <p className="print-person-parents">
                    Putra dari {couple.groom.fatherName}
                  </p>
                  <p className="print-person-parents">
                    & {couple.groom.motherName}
                  </p>
                </div>
              </div>
            </div>

            {/* Floral separator */}
            <div className="print-separator">
              <span className="print-floral-line" />
              <span className="print-floral-diamond">◆</span>
              <span className="print-floral-line" />
            </div>

            {/* Section: Ceremony */}
            <div className="print-section">
              <div className="print-section-header">
                <span className="print-floral-line" />
                <span className="print-section-title">Ceremony</span>
                <span className="print-floral-line" />
              </div>
              <p className="print-event-time">{events.ceremony.time}</p>
              <p className="print-event-venue">{events.ceremony.venue}</p>
              <p className="print-event-address">{events.ceremony.address}</p>
            </div>

            {/* Floral separator */}
            <div className="print-separator">
              <span className="print-floral-line" />
              <span className="print-floral-diamond">◆</span>
              <span className="print-floral-line" />
            </div>

            {/* Section: Reception */}
            <div className="print-section">
              <div className="print-section-header">
                <span className="print-floral-line" />
                <span className="print-section-title">Reception</span>
                <span className="print-floral-line" />
              </div>
              <p className="print-event-time">{events.reception.time}</p>
              <p className="print-event-venue">{events.reception.venue}</p>
              <p className="print-event-address">{events.reception.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          Halaman 3: Venue, Dress Code & Penutup
      ============================================================ */}
      <div className="print-page print-closing">
        <div className="print-frame">
          <div className="print-corner top-left" />
          <div className="print-corner top-right" />
          <div className="print-corner bottom-left" />
          <div className="print-corner bottom-right" />

          <div className="print-closing-content">
            {/* Venue */}
            <div className="print-section">
              <div className="print-section-header">
                <span className="print-floral-line" />
                <span className="print-section-title">Venue</span>
                <span className="print-floral-line" />
              </div>
              <p className="print-event-venue">{venue.name}</p>
              <p className="print-event-address">{venue.address}</p>
            </div>

            {/* Floral separator */}
            <div className="print-separator">
              <span className="print-floral-line" />
              <span className="print-floral-diamond">◆</span>
              <span className="print-floral-line" />
            </div>

            {/* Dress Code */}
            <div className="print-section">
              <div className="print-section-header">
                <span className="print-floral-line" />
                <span className="print-section-title">Dress Code</span>
                <span className="print-floral-line" />
              </div>
              <p className="print-dresscode-title">{dressCode.title}</p>
              <p className="print-dresscode-desc">{dressCode.description}</p>
              <div className="print-swatch-row">
                {dressCode.colors.map((c, i) => (
                  <div key={i} className="print-swatch">
                    <div
                      className="print-swatch-circle"
                      style={{ backgroundColor: c.hex, border: "1.5px solid #C8A83E" }}
                    />
                    <span className="print-swatch-label">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="print-separator">
              <span className="print-floral-line" />
              <span className="print-floral-diamond">◆</span>
              <span className="print-floral-line" />
            </div>

            {/* Quote / Closing */}
            <div className="print-section print-closing-quote">
              <p className="print-quote-text">
                &ldquo;{story.summary}&rdquo;
              </p>
              <p className="print-closing-names">
                {couple.bride.shortName} &amp; {couple.groom.shortName}
              </p>
              <p className="print-closing-date">{date.fullDateText}</p>
              <p className="print-closing-hashtag">{couple.hashtag}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PrintableInvitation;

import { HOURS } from '../constants/restaurant';

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-label">Find Us</div>
            <h2>Hours &amp; Contact</h2>

            <div className="hours-list">
              {HOURS.map(({ day, hours, closed }) => (
                <div className={`hours-row${closed ? ' closed' : ''}`} key={day}>
                  <span>{day}</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>12 Rue de la Paix, 75002 Paris</strong>
                  <small>Nearest parking: Parking Vendôme, 2 min walk</small>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">📞</span>
                <a href="tel:+33142000000">+33 1 42 00 00 00</a>
              </div>
              <div className="contact-row">
                <span className="contact-icon">✉️</span>
                <a href="mailto:hello@theolivetree-paris.com">hello@theolivetree-paris.com</a>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-inner">
              <span className="map-pin">📍</span>
              <strong>The Olive Tree</strong>
              <small>12 Rue de la Paix, Paris</small>
              <a
                href="https://maps.google.com/?q=12+Rue+de+la+Paix+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

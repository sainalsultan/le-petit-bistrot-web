import { FEATURES, STATS } from '../constants/restaurant';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <div className="section-label">Our Story</div>
            <h2>Where the Mediterranean<br /><em>comes to Paris</em></h2>
            <p>
              Tucked away on Rue de la Paix in the 2nd arrondissement, The Olive Tree was born
              from a simple idea: bring the warmth, freshness, and colour of Mediterranean cooking
              to the Parisian table.
            </p>
            <p>
              Every dish is made with seasonal ingredients sourced from small producers across
              Greece, Italy, Lebanon and Spain. No shortcuts. No pretension. Just honest, beautiful food.
            </p>
            <div className="about-stats">
              {STATS.map(({ value, label }) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-features">
            {FEATURES.map(({ icon, title, desc }) => (
              <div className="feature-card" key={title}>
                <span className="feature-icon">{icon}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

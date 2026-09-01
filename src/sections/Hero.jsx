export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Paris · France & International
          </p>

          <h1 className="hero__title">
            Conseil en recrutement
            <br />
            de cadres, dirigeants
            <br />
            et profils rares.
          </h1>

          <p className="hero__subtitle">
            Executive Search & Conseil en Ressources Humaines
          </p>

          <div className="hero__actions">
            <a href="#clients" className="btn btn--primary">
              Nous confier une mission
              <span aria-hidden="true">→</span>
            </a>

            <a href="#candidats" className="btn btn--outline-light">
              Déposer un CV
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
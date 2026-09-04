export default function About() {
  return (
    <section id="presentation" className="section section--white about">
      <div className="container about__grid">

        <div className="about__content">

          <div className="about__heading-grid">

            <div className="about__heading">
              <p className="section-kicker">
                Présentation
              </p>

              <h2 className="display-title about__title">
                Stellenbosch
                <br />
                Conseil
              </h2>

              <div className="rule" />
            </div>


            <div className="about__visual">
              
              <img
                src="/images/guggenheim.png"
                alt=""
                loading="lazy"
              />
            </div>

          </div>

          <div className="about__copy">
            <p>
              Stellenbosch Conseil est un cabinet de conseil spécialisé dans
              les ressources humaines et le recrutement.
            </p>

            <p>
              Nous accompagnons depuis 2022 des PME et des grands groupes dans
              le recrutement de leurs profils rares, cadres et dirigeants en
              France comme à l&apos;international.
            </p>

            <p>
              Notre méthodologie est basée sur l’approche directe des candidats.
            </p>

            <p>
              Notre expertise est particulièrement développée dans le secteur
              automobile et notamment la distribution automobile.
            </p>

            <p className="about__founder">
              Le cabinet est dirigé par son fondateur
              Emmanuel Porte.
            </p>
          </div>

        </div>

        <div className="about__media">

          <img
            src="/images/emPorte.png"
            alt="Emmanuel Porte, fondateur de Stellenbosch Conseil"
            className="about__image"
            loading="lazy"
          />

          <div className="about__caption">
  <strong>Emmanuel Porte</strong>

  <div className="about__role">
    <span>Fondateur</span>
    <span>Stellenbosch</span>
    <span>Conseil</span>
  </div>

  <p>
    Après un parcours dans l’industrie automobile et dans la distribution
    automobile où il a occupé des postes de direction, Emmanuel Porte a fondé
    le cabinet Stellenbosch Conseil en 2022.
  </p>
</div>
        </div>

      </div>
    </section>
  );
}
const steps = [
  {
    number: "01",
    title: "Comprendre",
    text: "Étude du contexte, de l’entreprise et définition précise du poste.",
  },
  {
    number: "02",
    title: "Identifier",
    text: "Élaboration de la stratégie de recherche, ciblage et approche directe.",
  },
  {
    number: "03",
    title: "Évaluer",
    text: "Entretiens approfondis et analyse de l’adéquation des candidats au poste..",
  },
  {
    number: "04",
    title: "Sélectionner",
    text: "Présentation des meilleurs profils composant la short-list.",
  },
  {
    number: "05",
    title: "Accompagner",
    text: "Suivi jusqu’à la signature et la prise de poste.",
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="section methodology">
      <div className="container methodology__grid">

        <div className="methodology__content">

          <div className="methodology__heading-grid">
            <div className="methodology__heading">
              <p className="section-kicker">
                Méthodologie
              </p>

              <h2 className="display-title methodology__title">
                Stellenbosch
                <br />
                Conseil
              </h2>

              <div className="rule" />
            </div>

            <div className="methodology__visual">
              <img
                src="/images/galeriaO.jpg"
                alt=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="methodology__copy">
            <p>
              Stellenbosch Conseil développe une méthodologie qualitative très
              structurée et sur mesure centrée sur l’approche directe des
              candidats.
            </p>

            <p>
              Cette méthode permet de cibler les meilleurs profils et
              d’optimiser la qualité des recrutements.
            </p>

            <p>
              Le cabinet propose un agenda précis qui intègre les éléments
              humains, financiers et temporels inhérents à la réussite d’un
              projet de recrutement.
            </p>
          </div>

        </div>

        <div className="methodology__right">

          <div className="methodology__steps">
            {steps.map((step) => (
              <article
                className="method-step"
                key={step.number}
              >
                <div className="method-step__number">
                  {step.number}
                </div>

                <div className="method-step__content">
                  <h3 className="method-step__title">
                    {step.title}
                  </h3>

                  <p className="method-step__text">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
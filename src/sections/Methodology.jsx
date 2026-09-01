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
    text: "Entretiens approfondis et analyse de l’adéquation au poste.",
  },
  {
    number: "04",
    title: "Sélectionner",
    text: "Présentation argumentée des meilleurs profils et de la short-list.",
  },
  {
    number: "05",
    title: "Accompagner",
    text: "Suivi du processus jusqu’à la signature et à la prise de poste.",
  },
];

export default function Methodology() {
  return (
    <section id="methodologie" className="section methodology">
      <div className="container">
        <div className="methodology__header">
          <p className="section-kicker">Notre méthodologie</p>

          <h2 className="display-title">
            Une approche structurée
            <br />
            et sur mesure.
          </h2>

          <p className="methodology__intro">
            Une méthode centrée sur l’approche directe et la compréhension
            fine des enjeux humains et professionnels.
          </p>
        </div>

        <div className="methodology__steps">
          {steps.map((step) => (
            <article className="method-step" key={step.number}>
              <div className="method-step__number">
                {step.number}
              </div>

              <div className="method-step__dot" />

              <div className="method-step__icon" aria-hidden="true">
                {step.number}
              </div>

              <h3 className="method-step__title">
                {step.title}
              </h3>

              <p className="method-step__text">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
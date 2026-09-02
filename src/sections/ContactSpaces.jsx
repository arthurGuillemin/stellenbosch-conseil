export default function ContactSpaces() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="contact-spaces">
      <div className="contact-spaces__grid">

        {/* ESPACE CLIENTS */}
        <div id="clients" className="contact-panel">

          <div className="contact-panel__heading-grid">

            <div className="contact-panel__heading">
              <p className="section-kicker">
                Espace clients
              </p>

              <h3>
                Parlons de vos
                <br />
                recrutements.
              </h3>
            </div>

            <div className="contact-panel__visual">
              <img
                src="/images/clients.webp"
                alt=""
                loading="lazy"
              />
            </div>

          </div>
          <p className="form-required-note">
  * Champs obligatoires
</p>

          <form
            className="form-grid"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nom et prénom *"
                autoComplete="name"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="text"
                name="company"
                placeholder="Société"
                autoComplete="organization"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                autoComplete="email"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder="Téléphone"
                autoComplete="tel"
              />
            </div>

            <div className="form-field--full">
              <textarea
                className="form-control"
                name="request"
                placeholder="Vos besoins"
              />
            </div>

            <div className="form-field--full form-submit">
              <button
                className="btn btn--primary btn--full"
                type="submit"
              >
                Envoyer ma demande
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>

        {/* ESPACE CANDIDATS */}
        <div id="candidats" className="contact-panel">

          <div className="contact-panel__heading-grid">

            <div className="contact-panel__heading">
              <p className="section-kicker">
                Espace candidats
              </p>

              <h3>
                Construisons la suite
                <br />
                de votre parcours
              </h3>
            </div>

            <div className="contact-panel__visual">
              <img
                src="/images/candidats.avif"
                alt=""
                loading="lazy"
              />
            </div>

          </div>
            <p className="form-required-note">
    * Champs obligatoires
  </p>

          <form
            className="form-grid"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="form-control"
                type="text"
                name="firstname"
                placeholder="Prénom *"
                autoComplete="given-name"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="text"
                name="lastname"
                placeholder="Nom *"
                autoComplete="family-name"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Adresse e-mail *" 
                autoComplete="email"
              />
            </div>

            <div>
              <input
                className="form-control"
                type="tel"
                name="phone"
                placeholder="Téléphone"
                autoComplete="tel"
              />
            </div>

            <div className="form-field--full">
              <input
                className="form-control"
                type="text"
                name="position"
                placeholder="Poste recherché"
              />
            </div>

            <div className="form-field--full">
              <label className="file-input">
                <span className="file-input__label">
                  Ajouter votre CV
                </span>

                <span className="file-input__button">
                  Parcourir
                </span>

                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  hidden
                />
              </label>
            </div>

            <div className="form-field--full form-submit">
              <button
                className="btn btn--primary btn--full"
                type="submit"
              >
                Envoyer mon CV
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
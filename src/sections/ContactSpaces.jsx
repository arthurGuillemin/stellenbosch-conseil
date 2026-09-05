import { useState } from "react";

import { useContactForm } from "../hooks/useContactForm";

import {
  sendClientRequest,
  sendCandidateApplication,
} from "../services/contactService";


export default function ContactSpaces() {
  const [cvName, setCvName] = useState("");

  const clientForm =
    useContactForm(sendClientRequest);

  const candidateForm =
    useContactForm(
      sendCandidateApplication
    );


  /* =========================
     CLIENT
  ========================= */

  async function handleClientSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData =
      new FormData(form);

    const payload =
      Object.fromEntries(
        formData.entries()
      );

    console.log(
      "Envoi formulaire client :",
      payload
    );

    const success =
      await clientForm.submit(payload);

    if (success) {
      form.reset();
    }
  }


  /* =========================
     CANDIDAT
  ========================= */

  function handleCvChange(event) {
    const file =
      event.target.files?.[0];

    if (file) {
      setCvName(file.name);
    } else {
      setCvName("");
    }
  }


  async function handleCandidateSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const formData =
      new FormData(form);

    console.log(
      "Envoi candidature :",
      {
        firstname:
          formData.get("firstname"),

        lastname:
          formData.get("lastname"),

        email:
          formData.get("email"),

        phone:
          formData.get("phone"),

        position:
          formData.get("position"),

        cv:
          formData.get("cv")?.name ||
          null,
      }
    );

    const success =
      await candidateForm.submit(
        formData
      );

    if (success) {
      form.reset();
      setCvName("");
    }
  }


  return (
    <section className="contact-spaces">

      <div className="contact-spaces__grid">


        {/* =========================
            ESPACE CLIENTS
        ========================= */}

        <div
          id="clients"
          className="contact-panel"
        >

          <div className="contact-panel__heading-grid">

            <div className="contact-panel__heading">

              <p className="section-kicker">
                Espace clients
              </p>

              <h3>
                Parlons de vos
                <br />
                recrutements
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
            onSubmit={handleClientSubmit}
          >

            <div>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nom et prénom *"
                autoComplete="name"
                required
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
                required
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
                placeholder="Vos besoins *"
                required
              />

            </div>


            <div className="form-field--full form-submit">

              <button
                className="btn btn--primary btn--full"
                type="submit"
                disabled={
                  clientForm.isLoading
                }
              >
                {clientForm.isLoading
                  ? "Envoi en cours..."
                  : "Envoyer ma demande"}

                {!clientForm.isLoading && (
                  <span aria-hidden="true">
                    →
                  </span>
                )}
              </button>

            </div>


            {clientForm.message && (
              <div
                className="form-field--full"
                aria-live="polite"
              >
                <p
                  className={
                    clientForm.isSuccess
                      ? "form-message form-message--success"
                      : "form-message form-message--error"
                  }
                >
                  {clientForm.message}
                </p>
              </div>
            )}

          </form>

        </div>


        {/* =========================
            ESPACE CANDIDATS
        ========================= */}

        <div
          id="candidats"
          className="contact-panel"
        >

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
            onSubmit={
              handleCandidateSubmit
            }
          >

            <div>
              <input
                className="form-control"
                type="text"
                name="firstname"
                placeholder="Prénom *"
                autoComplete="given-name"
                required
              />
            </div>


            <div>
              <input
                className="form-control"
                type="text"
                name="lastname"
                placeholder="Nom *"
                autoComplete="family-name"
                required
              />
            </div>


            <div>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Adresse e-mail *"
                autoComplete="email"
                required
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
                placeholder="Poste recherché *"
                required
              />

            </div>


            <div className="form-field--full">

              <label className="file-input">

                <span className="file-input__label">
                  {cvName
                    ? cvName
                    : "Ajouter votre CV"}
                </span>

                <span className="file-input__button">
                  {cvName
                    ? "Modifier"
                    : "Parcourir"}
                </span>

                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleCvChange}
                  hidden
                />

              </label>


              {cvName && (
                <p className="file-input__selected">
                  ✓ CV sélectionné : {cvName}
                </p>
              )}

            </div>


            <div className="form-field--full form-submit">

              <button
                className="btn btn--primary btn--full"
                type="submit"
                disabled={
                  candidateForm.isLoading
                }
              >
                {candidateForm.isLoading
                  ? "Envoi en cours..."
                  : "Envoyer mon CV"}

                {!candidateForm.isLoading && (
                  <span aria-hidden="true">
                    →
                  </span>
                )}
              </button>

            </div>


            {candidateForm.message && (
              <div
                className="form-field--full"
                aria-live="polite"
              >
                <p
                  className={
                    candidateForm.isSuccess
                      ? "form-message form-message--success"
                      : "form-message form-message--error"
                  }
                >
                  {candidateForm.message}
                </p>
              </div>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}
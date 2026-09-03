import { Link } from "react-router-dom";
export default function LegalPage() {
  return (
    <main className="legal-page">
      <div className="container legal-page__container">
        <header className="legal-page__header">
          <p className="section-kicker">Informations légales</p>

          <h1 className="display-title">
            Mentions légales
          </h1>

          <p className="legal-page__updated">
            Dernière mise à jour : septembre 2026
          </p>
        </header>

        <div className="legal-page__content">

          <section className="legal-section">
            <h2>1. Éditeur du site</h2>

            <p>
              Le présent site internet est édité par :
            </p>

            <p>
              <strong>Stellenbosch Conseil</strong>
              <br />
              SASU
              <br />
              Capital social : 10 000 €
              <br />
              Siège social : 9, rue Vineuse, 75116 Paris, France
              <br />
              SIREN : 911774685
              <br />
              RCS :  911774685RCS Paris
              <br />
              Numéro de TVA intracommunautaire : FR18911774685
            </p>

            <p>
              Téléphone : +33 (0)6 30 70 50 88
              <br />
              E-mail :{" "}
              <a href="mailto:eporte@stellenboschconseil.com">
                eporte@stellenboschconseil.com
              </a>
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Directeur de la publication</h2>

            <p>
              Le directeur de la publication du site est :
            </p>

            <p>
              <strong>Emmanuel Porte</strong>
              <br />
              Président de Stellenbosch Conseil.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Hébergement</h2>

            <p>
              Le site est hébergé par :
            </p>

            <p>
              <strong>Netlify, Inc.</strong>
              <br />
              [ADRESSE LÉGALE NETLIFY À VÉRIFIER AU MOMENT DE LA MISE EN LIGNE]
              <br />
              [TÉLÉPHONE OU COORDONNÉES OFFICIELLES DE L’HÉBERGEUR]
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Conception et réalisation</h2>

            <p>
              Le site a été conçu et développé pour Stellenbosch Conseil.
            </p>

            <p>
              [OPTIONNEL : NOM DU DÉVELOPPEUR / PRESTATAIRE]
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Propriété intellectuelle</h2>

            <p>
              L’ensemble des contenus présents sur ce site, notamment les
              textes, éléments graphiques, logos, photographies, illustrations,
              vidéos, icônes, éléments de mise en page et, plus généralement,
              tout élément composant le site, est protégé par les dispositions
              applicables en matière de propriété intellectuelle.
            </p>

            <p>
              Sauf mention contraire, ces éléments sont la propriété de
              Stellenbosch Conseil ou sont utilisés avec l’autorisation de
              leurs titulaires respectifs.
            </p>

            <p>
              Toute reproduction, représentation, adaptation, modification,
              diffusion ou exploitation, totale ou partielle, de tout ou partie
              du site sans autorisation préalable écrite du titulaire des droits
              concernés est interdite, sous réserve des exceptions prévues par
              la législation applicable.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Marques et logos</h2>

            <p>
              Les marques, dénominations sociales et logos de sociétés tierces
              éventuellement présentés sur ce site demeurent la propriété de
              leurs titulaires respectifs.
            </p>

            <p>
              Leur présence sur le site a pour seul objet de présenter les
              références ou expériences professionnelles de Stellenbosch
              Conseil et ne saurait être interprétée comme accordant un
              quelconque droit de propriété ou d’utilisation sur ces marques.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Responsabilité</h2>

            <p>
              Stellenbosch Conseil s’efforce de fournir sur ce site des
              informations aussi exactes et à jour que possible. Toutefois,
              aucune garantie ne peut être donnée quant à l’exhaustivité,
              l’exactitude ou l’actualité permanente des informations
              diffusées.
            </p>

            <p>
              Stellenbosch Conseil se réserve le droit de modifier à tout
              moment et sans préavis le contenu du site.
            </p>

            <p>
              L’utilisateur reste seul responsable de l’utilisation qu’il fait
              des informations disponibles sur le site.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Liens hypertextes</h2>

            <p>
              Le site peut contenir des liens vers des sites ou services
              exploités par des tiers. Stellenbosch Conseil n’exerce aucun
              contrôle sur ces sites et ne saurait être tenu responsable de
              leur contenu, de leur disponibilité ou de leurs pratiques en
              matière de protection des données.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Données personnelles</h2>

            <p>
              Stellenbosch Conseil peut être amené à collecter et traiter des
              données à caractère personnel dans le cadre notamment des
              demandes de contact, des demandes de prestations et des
              candidatures.
            </p>

            <p>
              Les modalités de ces traitements sont détaillées dans notre{" "}
              <a href="/confidentialite">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Droit applicable</h2>

            <p>
              Le présent site et ses mentions légales sont soumis au droit
              français.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
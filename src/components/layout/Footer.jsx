import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <img
              src="/images/Logo-bleu.jpeg"
              alt="Stellenbosch Conseil"
              width="260"
              height="120"
            />

            <p>
             Cabinet de conseil en recrutement de profils rares , cadres et dirigeants
            </p>
          </div>

          <div>
            <div className="footer__contact">
              <span>
                 Paris - France
              </span>

              <a href="mailto:eporte@stellenboschconseil.com">
                eporte@stellenboschconseil.com
              </a>

              <a href="tel:+33630705088">
                +33 (0)6 30 70 50 88
              </a>
            </div>
          </div>

          <div>
            <p className="footer__title">
              Réseaux
            </p>
            <div className="footer__social">
              <a
                href="https://www.linkedin.com/company/stellenbosch-conseil/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Stellenbosch Conseil"
              >
                in
              </a>

              <a
                href="https://www.facebook.com/stellenbosch.conseil"
                className="social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Stellenbosch Conseil"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.3c-.3 0-1.4-.3-2.7-.3-2.7 0-4.6 1.7-4.6 4.8v2.7H7V13h2.7v9h3.8Z"
                  />
                </svg>
              </a>
              <a
                href=""
                className="social-link"
                aria-label="Instagram Stellenbosch Conseil"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Stellenbosch Conseil
          </span>

          <div className="footer__legal">
            <Link to="/mentions-legales">
              Mentions légales
            </Link>

             <Link to="/confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">

          <div className="footer__brand">
            <img
              src="/images/Logo-bleu.png"
              alt="Stellenbosch Conseil"
            />

            <p>
              Conseil en recrutement de cadres,
              dirigeants et profils experts.
            </p>
          </div>

          <div>
            <p className="footer__title">
              Nous contacter
            </p>

            <div className="footer__contact">
              <span>
                9, rue Vineuse
                <br />
                75116 Paris
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
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Stellenbosch Conseil
          </span>

          <div className="footer__legal">
            <a href="/mentions-legales">
              Mentions légales
            </a>

            <a href="/confidentialite">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
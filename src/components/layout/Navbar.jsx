import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-nav">

          <a
            href="#top"
            className="site-logo fade-in is-visible"
            onClick={closeMenu}
          >
            <img
              src="/images/Logo-bleu.png"
              alt="Stellenbosch Conseil"
              width="260"
              height="120"
            />
          </a>

          {/* NAV DESKTOP */}
          <div className="site-nav__links">
            <a href="#presentation">Présentation</a>
            <a href="#methodologie">Méthodologie</a>
            <a href="#clients">Espace clients</a>
            <a href="#candidats">Espace candidats</a>
          </div>

          {/* BOUTON BURGER */}
          <button
            className={`nav-burger ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          {/* MENU MOBILE */}
          <div
            className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
          >
            <a href="#presentation" onClick={closeMenu}>
              Présentation
            </a>

            <a href="#methodologie" onClick={closeMenu}>
              Méthodologie
            </a>

            <a href="#clients" onClick={closeMenu}>
              Espace clients
            </a>

            <a href="#candidats" onClick={closeMenu}>
              Espace candidats
            </a>
          </div>

        </nav>
      </div>
    </header>
  );
}
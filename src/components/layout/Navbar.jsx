export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-nav">
          <a href="#top" className="site-logo">
            <img
              src="/images/Logo-bleu.png"
              alt="Stellenbosch Conseil"
            />
          </a>

          <div className="site-nav__links">
            <a href="#presentation">Présentation</a>
            <a href="#methodologie">Méthodologie</a>
            <a href="#clients">Espace clients</a>
            <a href="#candidats">Espace candidats</a>
          </div>

          <a href="#clients" className="nav-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
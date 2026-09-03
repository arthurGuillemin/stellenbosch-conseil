export default function Quote() {
  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-mark" aria-hidden="true">
          “
        </div>

        <blockquote className="quote-text">
          L’art de la réussite consiste à savoir
          <br />
          s’entourer des meilleurs.
        </blockquote>
                <div className="quote-mark" aria-hidden="true">
  
        </div>

        <p className="quote-author">
          John F. Kennedy
        </p>
      </div>
    </section>
  );
}
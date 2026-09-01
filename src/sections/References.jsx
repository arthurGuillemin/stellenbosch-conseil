const references = [
  {
    name: "Groupe CAT",
    logo: "/images/refs/groupe-cat.png",
  },
  {
    name: "Groupe Priod",
    logo: "/images/refs/groupe-priod.png",
  },
  {
    name: "BPM Exclusive",
    logo: "/images/refs/bpm-exclusive.png",
  },
  {
    name: "Groupe Vincent",
    logo: "/images/refs/groupe-vincent.png",
  },
  {
    name: "Stellantis &You",
    logo: "/images/refs/stellantis-and-you.png",
  },
  {
    name: "Transpolis",
    logo: "/images/refs/transpolis.png",
  },
  {
    name: "DBF Automobiles",
    logo: "/images/refs/dbf-automobiles.png",
  },
  {
    name: "GBH",
    logo: "/images/refs/gbh.png",
  },
  {
    name: "Flex-N-Gate",
    logo: "/images/refs/flex-n-gate.png",
  },
  {
    name: "Groupe Trujas",
    logo: "/images/refs/groupe-trujas.png",
  },
];

export default function References() {
  const duplicatedReferences = [
    ...references,
    ...references,
  ];

  return (
    <section className="references">
      <div className="container">
        <p className="references__title">
          Ils nous font confiance
        </p>
      </div>

      <div className="logo-marquee">
        <div className="logo-marquee__track">
          {duplicatedReferences.map((reference, index) => (
            <div
              className="logo-marquee__item"
              key={`${reference.name}-${index}`}
            >
              <img
                src={reference.logo}
                alt={reference.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
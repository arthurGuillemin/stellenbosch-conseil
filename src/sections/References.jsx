const references = [
  {
    name: "Groupe CAT",
    logo: "/images/refs/groupe-cat.png",
    className: "logo--cat",
  },
  {
    name: "Groupe Priod",
    logo: "/images/refs/groupe-priod.png",
    className: "logo--priod",
  },
  {
    name: "BPM Exclusive",
    logo: "/images/refs/bpm-exclusive.png",
  },
  {
    name: "Groupe Vincent",
    logo: "/images/refs/groupe-vincent.png",
        className: "logo--vincent",

  },
  {
    name: "Stellantis &You",
    logo: "/images/refs/stellantis-and-you.png",
    className: "logo--stellantis",
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
    className: "logo--flex-n-gate",
  },
  {
    name: "Groupe Trujas",
    logo: "/images/refs/groupe-trujas.png",
    className: "logo--trujas",

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
          Nos références
        </p>
      </div>

      <div className="logo-marquee">
        <div className="logo-marquee__track">

          {duplicatedReferences.map((reference, index) => (
            <div
              className="logo-marquee__item"
              key={`${reference.name}-${index}`}
              aria-hidden={index >= references.length}
            >
              <img
                src={reference.logo}
                alt={
                  index < references.length
                    ? reference.name
                    : ""
                }
                className={reference.className || ""}
                loading="lazy"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
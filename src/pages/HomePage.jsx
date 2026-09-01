import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Quote from "../sections/Quote";
import Methodology from "../sections/Methodology";
import ContactSpaces from "../sections/ContactSpaces";
import References from "../sections/References";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Quote />
        <Methodology />
        <ContactSpaces />
        <References />
      </main>

      <Footer />
    </>
  );
}
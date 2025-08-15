import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Menu />
        <CTA />
        <Contact />
        <Gallery />
      </main>

      <Footer />
    </>
  );
}

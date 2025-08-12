// src/App.jsx
import { Helmet } from "react-helmet";

//menu favorites
import Tacos from "./BirriaTacos.jpg";
import ShortRib from "./ShortRib.jpg";
import Nachos from "./NachosPorkBellyCarnitas.jpg";

//gallery photos
import BowlShortRibSuadero from "./BowlShortRibSuadero.jpg";
import ChipsGuac from "./ChipsGuac.jpg";
import ChickenTaco from "./ChickenTaco.jpg";
import GalleryNachos from "./Nachos.jpg";
import QuesodillaSoda from "./QuesadillaSoda.jpg";
import Quesodillas from "./Quesodillas.jpg";
import ShrimpTaco from "./ShrimpTaco1.jpg";
import Spread from "./Spread2.jpg";
import BurritoSmall from "./BurritoSmall.jpg";

//CTA BG
import Sodas from "./Sodas.jpg";

export default function App() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Playa Taqueria | Authentic, Fresh, Handcrafted</title>
        <meta
          name="description"
          content="For food lovers and Mexican cuisine enthusiasts in Montclair, Playa Taqueria is the only taqueria among all Mexican restaurants in the area that offers authentic, handcrafted nixtamal tortillas with creative flavor combinations because of its commitment to traditional Mexican techniques, fresh ingredients, and innovative culinary approach."
        />
        <link rel="canonical" href="https://eatplaya.com/" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 py-2">
        <nav className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center h-16">
          <div className="text-2xl font-bold text-amber-600">
            Playa Taqueria
          </div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#menu" className="hover:text-amber-600">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-600">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('HeroShot2.jpg')]"
        >
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Fresh, Local, Unforgettable
          </h1>
          <p className="mt-4 text-xl text-white max-w-2xl drop-shadow-lg">
            Experience locally sourced dishes made with passion and served with
            care.
          </p>
          <a
            href="#menu"
            className="mt-6 bg-amber-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition"
          >
            View Menu
          </a>
        </section>

        {/* Menu Section */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="max-w-6xl mx-auto px-4 py-16"
        >
          <h2
            id="menu-heading"
            className="text-4xl font-bold text-center mb-12"
          >
            Our Favorites
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Short Rib Tacos",
                desc: "Warm Totillas, Pico de gallo, slow cooked Short Rib",
                img: ShortRib,
              },
              {
                title: "Pork Belly Nachos & Carnitas",
                desc: "San Marzano tomatoes, fresh mozzarella, basil, olive oil.",
                img: Nachos,
              },
              {
                title: "Birria Tacos",
                desc: "Organic greens, roasted beets, goat cheese, balsamic glaze.",
                img: Tacos,
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section
          id="call-to-action"
          aria-labelledby="call-to-action-heading"
          className="bg-cover bg-center py-16 px-4 bg-fixed bg-[url('Sodas.jpg')]"
        >
          <div className="max-w-4xl mx-auto text-center bg-white rounded-lg py-16 px-8 flex flex-col gap-y-4">
            <h3 className="text-4xl font-bold text-center mb-6">
              Order Online
            </h3>
            <p className="text-gray-600">
              Enjoy the authentic flavors of Playa Taquería from the comfort of
              your home! From our handcrafted Mexican tacos to our fresh,
              house-made tortillas, order online for pickup or delivery and
              bring the true taste of Mexico to your table in Montclair.
            </p>
            <div>
              <a
                href=""
                className="bg-black text-white text-bold text-xl rounded-lg px-4 py-2"
              >
                Order Now
              </a>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="max-w-6xl mx-auto px-4 py-16"
        >
          <h2
            id="galery-heading"
            className="text-4xl font-bold text-center mb-12"
          >
            Gallery
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Short Rib Bowl",
                img: BowlShortRibSuadero,
              },
              {
                title: "Chips and Guac",
                img: ChipsGuac,
              },
              {
                title: "Chicken Tacos",
                img: ChickenTaco,
              },
              {
                title: "Nachos",
                img: GalleryNachos,
              },
              {
                title: "Quesodillas",
                img: Quesodillas,
              },
              {
                title: "Shrimp Tacos",
                img: ShrimpTaco,
              },
              {
                title: "Variety Spread",
                img: Spread,
              },
              {
                title: "Small Burrito",
                img: BurritoSmall,
              },
              {
                title: "Quesodilla and Jaritos",
                img: QuesodillaSoda,
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-110 transform transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="bg-gray-50 py-16 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="about-heading" className="text-4xl font-bold mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2010, Riverside Bistro brings the best of farm-to-table
              dining to the heart of the city. Our chefs work closely with local
              farmers to deliver fresh, flavorful dishes year-round.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="max-w-6xl mx-auto px-4 py-16"
        >
          <h2
            id="contact-heading"
            className="text-4xl font-bold text-center mb-8"
          >
            Visit Us
          </h2>
          <div className="text-center space-y-4">
            <address className="not-italic text-lg text-gray-700">
              206 Bellevue Ave, Montclair, NJ 07043
            </address>
            <a
              href="tel:+19736790322"
              className="text-amber-600 font-medium hover:underline"
            >
              (973) 679-0322
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Riverside Bistro. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
}

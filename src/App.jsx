//About photos
import AboutUs from "./AboutUS.jpg";

//menu feature photos
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

//visit us taunt
import Taunt from "./Taunt.jpg";

export default function App() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 py-2">
        <nav className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center h-16">
          <div className="text-2xl font-bold text-amber-600">
            Playa Taqueria
          </div>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#about" className="hover:text-amber-600">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-amber-600">
                Menu
              </a>
            </li>
            <li>
              <a href="#call-to-action" className="hover:text-amber-600">
                Order
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-amber-600">
                Gallery
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
          className="bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('HeroShot2.jpg')]"
        >
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold text-shadow-2xs drop-shadow-lg text-white"
          >
            Authentic, Fresh, Handcrafted
          </h1>
          <a
            href="#menu"
            className="mt-6 bg-red-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-orange-400 transition"
          >
            Order Now
          </a>
        </section>
        {/* About Section */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-16 px-4 bg-red-900 text-white flex flex-col-reverse md:flex-row justify-center items-center gap-y-6"
        >
          <div className="px-8 py-4">
            <img
              src={AboutUs}
              alt="About Us"
              className="w-100 rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="max-w-xl flex flex-col gap-y-10 text-center sm:text-left">
            <h2 id="about-heading" className="text-4xl font-bold my-4">
              About Us
            </h2>
            <p className="text-xl white leading-relaxed w-100">
              For food lovers and Mexican cuisine enthusiasts in Montclair,
              Playa Taqueria is the only taqueria among all Mexican restaurants
              in the area that offers authentic, handcrafted nixtamal tortillas
              with creative flavor combinations because of its commitment to
              traditional Mexican techniques, fresh ingredients, and innovative
              culinary approach.
            </p>
          </div>
        </section>
        {/* Menu Section */}
        <section
          id="menu"
          aria-labelledby="menu-heading"
          className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-y-12 mt-12"
        >
          <h2
            id="menu-heading"
            className="text-4xl font-bold flex flex-col-reverse sm:flex-row gap-y-12 justify-between"
          >
            Featured
            <a
              href="#"
              className="font-bold text-xl px-6 py-3 rounded-full shadow-lg text-center sm:text-left bg-red-900 hover:bg-orange-400 text-white"
            >
              View Menu
            </a>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Short Rib Tacos",
                desc: "Warm Totillas, Pico de gallo, slow cooked Short Rib",
                img: ShortRib,
                link: "www.google.com",
              },
              {
                title: "Pork Belly Nachos & Carnitas",
                desc: "Homemade tortilla chips topped with crunchy pork belly, and sweet carnitas",
                img: Nachos,
                link: "www.google.com",
              },
              {
                title: "Birria Tacos",
                desc: "Marinated beef, our famous homemade tortillas, topped with queso fresco.",
                img: Tacos,
                link: "#",
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
                  loading="lazy"
                />
                <div className="p-6 flex flex-col gap-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <a className="" href={item.link}>
                    Add to Order
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center"></div>
        </section>
        {/* CTA Section */}
        <section
          id="call-to-action"
          aria-labelledby="call-to-action-heading"
          className="bg-cover bg-center py-36 px-4 bg-fixed bg-[url('Sodas.jpg')] shadow-inner"
        >
          <div className="max-w-4xl mx-auto text-center bg-white rounded-lg py-16 px-8 flex flex-col gap-y-4">
            <h3 className="text-4xl font-bold text-center mb-6">
              Order Online
            </h3>
            <p className="text-black mb-6 text-bold text-xl">
              Enjoy the authentic flavors of Playa Taquería from the comfort of
              your home! From our handcrafted Mexican tacos to our fresh,
              house-made tortillas, order online for pickup or delivery and
              bring the true taste of Mexico to your table in Montclair.
            </p>
            <div>
              <a
                href=""
                className="bg-red-900 hover:bg-orange-400 text-white text-bold text-xl rounded-lg px-4 py-2"
              >
                Order Now
              </a>
            </div>
          </div>
        </section>
        {/* Contact Section */}8
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="max-w-screen mx-auto px-4 py-16 bg-red-900 text-white flex items-center justify-center gap-y-10 md:gap-x-10 flex-col md:flex-row"
        >
          <div>
            <h2
              id="contact-heading"
              className="text-4xl font-bold text-center md:text-right mb-8"
            >
              Visit Us
            </h2>
            <div className="text-center md:text-right space-y-4">
              <address className="not-italic text-xl">
                206 Bellevue Ave, Montclair, NJ 07043
              </address>
              <a
                href="tel:+19736790322"
                className="font-medium hover:text-amber-400 text-xl underline"
              >
                (973) 679-0322
              </a>
              <div className="py-4">
                <h3 className="text-2xl font-bold ">Restaurant Hours</h3>
                <p>
                  <span className="font-bold text-xl">Mon-Sat:</span> 11:00 AM -
                  8:00 PM
                </p>
                <p>
                  <span className="font-bold text-xl">Sun:</span> 11:00 AM -
                  7:00 PM
                </p>
              </div>
              <a
                href="#"
                className="bg-white rounded-full text-red-900 px-4 py-2 font-bold hover:bg-amber-400 hover:text-white"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div>
            <img src={Taunt} alt="Taunt" className="w-100 rounded-lg" />
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
                title: "Shrimp Tacos",
                img: ShrimpTaco,
              },
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
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover hover:scale-105 transform transition"
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-6 text-center flex flex-col justify-evenly sm:flex-row items-center">
        <div className="text-center md:text-left space-y-4">
          <address className="not-italic">
            206 Bellevue Ave, Montclair, NJ 07043
          </address>
          <a
            href="tel:+19736790322"
            className="font-medium hover:text-amber-400underline"
          >
            (973) 679-0322
          </a>
          <div className="py-4">
            <p>
              <span className="font-bold">Mon-Sat:</span> 11:00 AM - 8:00 PM
            </p>
            <p>
              <span className="font-bold">Sun:</span> 11:00 AM - 7:00 PM
            </p>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Playa Taqueria. All Rights Reserved.
        </p>
        <div>
          <ul className="flex gap-x-4">
            <li>
              <a href="https://www.facebook.com/">
                <img
                  src="https://cdn.simpleicons.org/facebook/0866FF"
                  alt="FaceBook"
                  className="h-8"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img
                  src="https://cdn.simpleicons.org/instagram/FF0069"
                  alt="Instagram"
                  className="h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

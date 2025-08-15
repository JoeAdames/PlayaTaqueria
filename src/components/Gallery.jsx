import React from "react";

//gallery photos
import BowlShortRibSuadero from "../gallery/BowlShortRibSuadero.jpg";
import ChipsGuac from "../gallery/ChipsGuac.jpg";
import ChickenTaco from "../gallery/ChickenTaco.jpg";
import GalleryNachos from "../gallery/Nachos.jpg";
import QuesodillaSoda from "../gallery/QuesadillaSoda.jpg";
import Quesodillas from "../gallery/Quesodillas.jpg";
import ShrimpTaco from "../gallery/ShrimpTaco.jpg";
import Spread from "../gallery/Spread2.jpg";
import BurritoSmall from "../gallery/BurritoSmall.jpg";

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="max-w-6xl mx-auto px-4 py-16"
    >
      <h2 id="galery-heading" className="text-4xl font-bold text-center mb-12">
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
  );
}

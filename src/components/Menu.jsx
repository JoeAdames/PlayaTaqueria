import React from "react";
//menu feature photos
import Tacos from "../gallery/BirriaTacos.jpg";
import ShortRib from "../gallery/ShortRib.jpg";
import Nachos from "../gallery/NachosPorkBellyCarnitas.jpg";

export default function Menu() {
  return (
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
  );
}

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-cover bg-center bg-fixed h-screen flex flex-col justify-center items-center text-center px-4 bg-[url('./gallery/Mobile/HeroShot2.webp')] md:bg-[url('./gallery/Desktop/HeroShot2.webp')]"
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
  );
}

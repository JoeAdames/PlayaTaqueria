import React from "react";
//About photos
import AboutUs from "../gallery/AboutUs.jpg";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 px-4 bg-red-900 text-white flex flex-col-reverse lg:flex-row justify-center items-center gap-y-6"
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
        <p className="text-xl white leading-relaxed ">
          For food lovers and Mexican cuisine enthusiasts in Montclair, Playa
          Taqueria is the only taqueria among all Mexican restaurants in the
          area that offers authentic, handcrafted nixtamal tortillas with
          creative flavor combinations because of its commitment to traditional
          Mexican techniques, fresh ingredients, and innovative culinary
          approach.
        </p>
      </div>
    </section>
  );
}

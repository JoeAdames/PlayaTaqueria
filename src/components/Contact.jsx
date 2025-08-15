import React from "react";
//visit us taunt
import Taunt from "../gallery/Taunt.jpg";

export default function Contact() {
  return (
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
              <span className="font-bold text-xl">Sun:</span> 11:00 AM - 7:00 PM
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
  );
}

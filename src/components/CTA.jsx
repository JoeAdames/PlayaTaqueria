import React from "react";

export default function CTA() {
  return (
    <section
      id="call-to-action"
      aria-labelledby="call-to-action-heading"
      className="bg-cover bg-center py-36 px-4 bg-fixed bg-[url('./gallery/Sodas.webp')] shadow-inner"
    >
      <div className="max-w-4xl mx-auto text-center bg-white rounded-lg py-16 px-8 flex flex-col gap-y-4">
        <h3 className="text-4xl font-bold text-center mb-6">Order Online</h3>
        <p className="text-black mb-6 text-bold text-xl">
          Enjoy the authentic flavors of Playa Taquería from the comfort of your
          home! From our handcrafted Mexican tacos to our fresh, house-made
          tortillas, order online for pickup or delivery and bring the true
          taste of Mexico to your table in Montclair.
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
  );
}

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-6 text-center flex flex-col gap-y-10 justify-evenly lg:flex-row items-center">
      <div>
        <ul className="flex gap-x-4">
          <li>
            <a href="https://www.facebook.com/playataqueria">
              <img
                src="https://cdn.simpleicons.org/facebook/0866FF"
                alt="FaceBook"
                className="h-8"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/playataqueria/#">
              <img
                src="https://cdn.simpleicons.org/instagram/FF0069"
                alt="Instagram"
                className="h-8"
              />
            </a>
          </li>
        </ul>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Playa Taqueria. All Rights Reserved.
      </p>
      <div className="text-center md:text-right space-y-4">
        <address className="not-italic">
          206 Bellevue Ave, Montclair, NJ 07043
        </address>
        <a
          href="tel:+19736790322"
          className="font-medium hover:text-amber-400 underline"
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
    </footer>
  );
}

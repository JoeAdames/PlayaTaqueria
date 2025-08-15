import React from 'react'

export default function Header() {
  return (
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
  )
}

// src/app/about/page.tsx
'use client';

import React from 'react';
import {FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope} from 'react-icons/fa';

export default function About() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* My Story and Work */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">My Story</h2>
            <p className="text-gray-700 mb-6">
              I&apos;m a passionate Henna artist with a flair for creativity and design.
              I create custom mehndi designs for special occasions and everyday beauty.
            </p>

            <h2 className="text-2xl font-semibold mb-4">My Work</h2>
            <p className="text-gray-700">
              I specialize in traditional, Arabic, bridal, and contemporary henna designs.
              Each piece reflects elegance and personal touch.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <ul className="space-y-3 text-blue-600">
              <li className="flex items-center gap-3 group">
              <FaInstagram className="text-pink-600 text-xl shrink-0" />
                <a
                  href="https://instagram.com/heena.vibezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline group-hover:text-pink-600 transition-colors"
                >
                  @heena.vibezz
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaWhatsapp className="text-green-500 text-xl shrink-0" />
                <a
                  href="https://wa.me/9122276486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline group-hover:text-green-600 transition-colors"
                >
                  Text me
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <FaPhoneAlt className="text-blue-500 text-xl shrink-0" />
                <a href="tel:9122276486" className="text-blue-600 hover:underline group-hover:text-blue-700 transition-colors">
                  Call me
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <FaEnvelope className="text-gray-600 text-xl shrink-0 mt-1" />
                <div className="flex flex-col">
                  <a
                    href="mailto:aahidakhan19@gmail.com"
                    className="text-blue-600 hover:underline break-words group-hover:text-amber-700 transition-colors"
                  >
                    aahidakhan19@gmail.com
                  </a>
                  <a
                    href="mailto:hennavibezz@proton.me"
                    className="text-blue-600 hover:underline break-words group-hover:text-amber-700 transition-colors"
                  >
                    hennavibezz@proton.me
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}

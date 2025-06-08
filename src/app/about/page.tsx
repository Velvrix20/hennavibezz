// src/app/about/page.tsx
'use client';

import Nav from '@/site/Nav';
import Footer from '@/site/Footer';
import React from 'react';

export default function About() {
  return (
    <>
      <Nav siteDomainOrTitle="HennaVibezz" />

      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

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
              <li>
                <a
                  href="https://instagram.com/heena.vibezz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram: @heena.vibezz
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9122276486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp: Chat with me
                </a>
              </li>
              <li>
                <a href="tel:9122276486" className="hover:underline">
                  Phone: +91 9122276486
                </a>
              </li>
              <li>
                <span className="block">
                  <a
                    href="mailto:aahidakhan19@gmail.com"
                    className="hover:underline break-words"
                  >
                    aahidakhan19@gmail.com
                  </a>
                </span>
                <span className="block">
                  <a
                    href="mailto:hennavibezz@proton.me"
                    className="hover:underline break-words"
                  >
                    hennavibezz@proton.me
                  </a>
                </span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

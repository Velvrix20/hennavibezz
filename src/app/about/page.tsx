// src/app/about/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import React from "react";

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-2xl font-semibold mb-2">My Story</h2>
            <p className="text-gray-700">
              I'm a passionate Henna artist with a flair for creativity and design.
              I create custom mehndi designs for special occasions and everyday beauty.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-2">My Work</h2>
            <p className="text-gray-700">
              I specialize in traditional, Arabic, bridal, and contemporary henna designs.
              Each piece reflects elegance and personal touch.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <a href="https://instagram.com/heena.vibezz" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/9122276486" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:9122276486">Phone: +91 9122276486</a>
              </li>
              <li>
                <a href="mailto:aahidakhan19@gmail.com">aahidakhan19@gmail.com</a>
                <a href="mailto:hennavibezz@proton.me">hennavibezz@proton.me</a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Search />
      <Footer />
    </>
  );
}

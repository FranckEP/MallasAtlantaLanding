// app/page.tsx
"use client";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-white flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: 1,
              }}
            >
              <Image
                src="/logo1oscuro.svg"
                alt="Mallas Atlanta"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
              />
            </motion.div>
            <motion.h1
              className="mt-4 text-2xl font-bold text-[#01548a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Mallas Atlanta
            </motion.h1>
            <motion.div
              className="mt-4 w-16 h-1 bg-[#e11d1e] rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <main className="bg-[#ddf4e7] text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-[#01548a] text-white py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo2claro.svg"
            alt="Mallas Atlanta"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Mallas Atlanta</span>
        </div>
        {/* Nav */}
        <nav className="hidden sm:flex space-x-6">
          <a href="#quienes" className="hover:text-[#ddf4e7] transition">
            Quiénes somos
          </a>
          <a href="#galeria" className="hover:text-[#ddf4e7] transition">
            Galería
          </a>
          <a href="#contacto" className="hover:text-[#ddf4e7] transition">
            Contacto
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-[#01548a] text-white py-20 px-6 text-center flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Protegiendo lo que más valoras
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Instalación de mallas de seguridad en Barranquilla, Colombia
        </motion.p>
        <motion.a
          href="#contacto"
          className="mt-8 bg-[#dd393a] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#01548a] hover:scale-105 transition-all cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contáctanos
        </motion.a>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes" className="max-w-6xl mx-auto py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-[#01548a] mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ¿Quiénes somos?
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          En Mallas Atlanta, instalamos mallas de seguridad en Barranquilla,
          Colombia, con un compromiso inquebrantable hacia la protección de lo
          que más valoras. Desde nuestros inicios, ofrecemos soluciones
          innovadoras y de alta calidad que brindan tranquilidad a miles de
          hogares en la región.
        </motion.p>
        <motion.p
          className="font-semibold text-[#e11d1e] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Confía en nosotros para hacer de tu hogar un lugar seguro y armonioso.
          ¡Tu tranquilidad es nuestra prioridad!
        </motion.p>
      </section>

      {/* Datos */}
      <section className="bg-[#e11d1e] py-12 px-6 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { number: "8+", label: "Años de experiencia" },
            { number: "500+", label: "Clientes satisfechos" },
            { number: "600+", label: "Hogares seguros" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-4 md:p-6 rounded-xl bg-[#dd393a] shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold">{item.number}</h3>
              <p className="text-sm md:text-base">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="bg-[#ddf4e7] py-16 px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-[#01548a] mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestro trabajo
        </motion.h2>

        {/* Grid Layout Profesional */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {[
              {
                src: "/trabajo1.jpg",
                alt: "Instalación de mallas en balcón",
                size: "large",
              },
              {
                src: "/trabajo5.jpg",
                alt: "Mallas de seguridad en ventanas",
                size: "medium",
              },
              {
                src: "/trabajo2.jpg",
                alt: "Protección para mascotas",
                size: "medium",
              },
              {
                src: "/trabajo3.jpg",
                alt: "Mallas transparentes",
                size: "large",
              },
              {
                src: "/trabajo7.jpg",
                alt: "Mallas polietileno",
                size: "medium",
              },
              {
                src: "/trabajo4.jpg",
                alt: "Seguridad para niños",
                size: "medium",
              },
              {
                src: "/trabajo6.jpg",
                alt: "Instalación profesional",
                size: "medium",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className={`
                  relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer
                  ${
                    item.size === "large"
                      ? "md:col-span-2 lg:col-span-1 h-64 md:h-80"
                      : "h-64"
                  }
                  ${idx === 0 ? "lg:row-span-2 lg:h-full lg:min-h-[520px]" : ""}
                  ${idx === 3 ? "md:col-span-2 lg:col-span-2" : ""}
                `}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Imagen */}
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Texto descriptivo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.alt}</h3>
                  <p className="text-sm opacity-90">
                    Mallas Atlanta - Calidad garantizada
                  </p>
                </div>

                {/* Icono de ampliación */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-[#01548a] text-white py-12 px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            {
              href: "tel:+573016528406",
              icon: FaPhone,
              text: "+57 301 652 8406",
            },
            {
              href: "mailto:eidergarcia02@gmail.com",
              icon: FaEnvelope,
              text: "Gmail",
              className: "break-all",
            },
            {
              href: "https://wa.me/573016528406",
              icon: FaWhatsapp,
              text: "WhatsApp",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              href: "https://maps.google.com/?q=Barranquilla,+Colombia",
              icon: FaMapMarkerAlt,
              text: "Barranquilla",
              target: "_blank",
              rel: "noopener noreferrer",
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="flex flex-col items-center space-y-3 p-4 md:p-6 rounded-xl hover:bg-[#328cc6] hover:scale-105 transition-all cursor-pointer group shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="text-2xl md:text-3xl text-[#ddf4e7] group-hover:text-white">
                <item.icon />
              </div>
              <p
                className={`text-sm md:text-base group-hover:text-white ${
                  item.className || ""
                }`}
              >
                {item.text}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#01548a] text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <p className="mb-4 sm:mb-0 text-center">
            &copy; 2025 Mallas Atlanta. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.facebook.com/share/QEEefNuD1qM7UTTB/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#328cc6] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/mallasatlanta020982/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#328cc6] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/573016528406"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#328cc6] transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

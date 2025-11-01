"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    image: "/assets/hero/thales1.webp",
    subtitle: "Excelencia Académica",
    title: "Conecta saberes transforma realidades.",
    description:
      "En el Instituto Thales unimos ciencia, arte y humanidades para formar mentes críticas, creativas y conscientes del mundo que habitan. Porque aprender no es acumular conocimiento, sino iluminar la realidad desde nuevas perspectivas.",
    primaryButton: {
      text: "Explorar Oferta Educativa",
      href: "/oferta-educativa",
    },
    secondaryButton: { text: "Conoce UNSZA", href: "/about-us" },
  },
  {
    image: "/assets/hero/child-hospital.webp",
    subtitle: "Educación en Salud",
    title: "Diplomado Integral en Urgencias Pediátricas",
    description:
      "Formación integral para el abordaje oportuno y humano de las urgencias pediátricas. Dirigido a profesionales y cuidadores que buscan actuar con conocimiento, ética y sensibilidad ante cada emergencia infantil.",
    primaryButton: { text: "Ver Diplomado", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete Ahora", href: "#cta" },
  },
  {
    image: "/assets/hero/perinatal.webp",
    subtitle: "Ciencia y Bienestar",
    title: "Diplomado en Psicología Perinatal",
    description:
      "Formación especializada en evaluación, prevención e intervención psicológica durante el embarazo, parto y posparto. Desarrolla competencias clínicas y humanas para promover vínculos sanos y bienestar perinatal.",
    primaryButton: { text: "Más Información", href: "/oferta-educativa" },
    secondaryButton: { text: "Inscríbete", href: "#cta" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const hovering = useRef(false);

  // Auto-advance (pausa al hacer hover sobre el hero)
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) setCurrent((p) => (p + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent(i);
  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center bg-primary text-white overflow-hidden"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {/* Fondo slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.01 }} // <= menos upscale
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            quality={90} // <= más nitidez
            sizes="100vw" // <= describe el ancho real ocupado
            className="absolute inset-0 object-cover object-[70%_center] pointer-events-none transform-gpu will-change-transform"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Contenido (mismo layout) */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Texto */}
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            {/* Subtítulo dinámico */}
            {/* <motion.h5
              className="text-white/90 text-sm md:text-base lg:text-lg uppercase tracking-widest font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {slides[current].subtitle}
            </motion.h5> */}

            <h1 className="font-bold leading-tight mb-6 text-[clamp(2rem,6vw,4.5rem)]">
              {slides[current].title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <motion.p
              className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={slides[current].primaryButton.href}
                className="group inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition"
              >
                {slides[current].primaryButton.text}
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              {/* Secundario (opcional) */}
              {/* <Link
                href={slides[current].secondaryButton.href}
                className="inline-block px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/20 hover:border-white/50 transition"
              >
                {slides[current].secondaryButton.text}
              </Link> */}
            </motion.div>
          </motion.div>

          {/* Columna derecha para balance (se mantiene vacía) */}
          <div className="lg:col-span-6" />
        </div>

        {/* Controladores: flechas y puntos (opcionales) */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center transition"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-6 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="h-9 w-9 rounded-full bg-white/15 hover:bg-white/25 grid place-items-center transition"
          >
            ›
          </button>
        </div>

        {/* Cards debajo (sin cambios) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* <button
            // href={`#`}
            className="relative h-32 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10 flex h-full items-center p-6">
              <p className="text-white/90 font-medium">
                Tu próximo logro comienza aquí. Contacta con nosotros
              </p>
            </div>
          </button> */}
          <button className="relative h-32 rounded-lg overflow-hidden cursor-pointer group">
            {/* Fondo base */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20" />

            {/* Efecto de barrido */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

            {/* Contenido */}
            <div className="relative z-10 flex h-full items-center p-6">
              <p className="text-white/90 font-medium">
                Tu próximo logro comienza aquí. Contacta con nosotros
              </p>
            </div>
          </button>
          <button className="relative h-32 rounded-lg overflow-hidden cursor-pointer group">
            {/* Fondo base */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20" />

            {/* Efecto de barrido */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

            {/* Contenido */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10 flex h-full items-center p-6">
              <p className="text-white/90 font-medium">Conocenos</p>
            </div>
          </button>
          <button className="relative h-32 rounded-lg overflow-hidden cursor-pointer group">
            {/* Fondo base */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20" />

            {/* Efecto de barrido */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

            {/* Contenido */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="relative z-10 flex h-full items-center p-6">
              <p className="text-white/90 font-medium">
                Conoce nuestra oferta educativa
              </p>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative w-full min-h-[90svh] bg-primary text-white overflow-hidden">
//         {/* Imagen de fondo, ocupa todo */}
//         <Image
//           src="/assets/hero/thles1.png"
//           alt="Profesional de la salud usando tablet"
//           fill
//           priority
//           sizes="100vw"
//           className="absolute inset-0 object-cover object-[70%_center] pointer-events-none"
//         />

//         {/* Overlay para legibilidad del texto */}
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-transparent" />

//         {/* Vignette sutil inferior (opcional) */}
//         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary/50 to-transparent" />

//         {/* Contenido */}
//         <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 pb-16">
//           <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
//             {/* Texto */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-6"
//             >
//               <h1 className="font-bold mt-[200px] leading-tight mb-8 text-[clamp(2rem,6vw,4.5rem)]">
//                 Tu próximo
//                 <br />
//                 logro
//                 <br />
//                 comienza aquí
//               </h1>

//               <motion.button
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 className="group inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3 text-secondary-foreground font-semibold shadow-md hover:shadow-lg transition"
//               >
//                 Comienza tu experiencia
//                 <svg
//                   className="h-5 w-5 transition-transform group-hover:translate-x-1"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </motion.button>
//             </motion.div>

//             {/* Columna “imagen” (solo para balance; el fondo ya trae la composición) */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="lg:col-span-6"
//             >
//               {/* Si quieres tarjetas o elementos flotando, colócalos aquí */}
//             </motion.div>
//           </div>

//           {/* Cards debajo */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
//           >
//             <div className="relative h-32 rounded-lg overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
//               <div className="relative z-10 flex h-full items-center p-6">
//                 <p className="text-white/90 font-medium">
//                   Tu próximo logro comienza aquí
//                 </p>
//               </div>
//             </div>
//             <div className="relative h-32 rounded-lg overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
//               <div className="relative z-10 flex h-full items-center p-6">
//                 <p className="text-white/90 font-medium">
//                   Diplomado Integral en Urgencias Pediátricas
//                 </p>
//               </div>
//             </div>
//             <div className="relative h-32 rounded-lg overflow-hidden">
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
//               <div className="relative z-10 flex h-full items-center p-6">
//                 <p className="text-white/90 font-medium">
//                   Diplomado en Psicologia Perinata
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }

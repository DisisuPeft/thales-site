"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#2A2A2A" }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-medium mb-4"
              style={{ color: "#F8F2E9" }}
            >
              IESDA
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#7D8EA3" }}>
              Instituto de Educación Superior del Área de la Salud. Formación
              profesional con responsabilidad ética y compromiso humano.
            </p>
            <p className="text-xs mt-4" style={{ color: "#7D8EA3" }}>
              Red coordinada por CINFA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              className="text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D7A22A" }}
            >
              Información
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Oferta académica",
                  link: "#diplomados-iesda",
                },
                // {
                //   name: "Proceso de admisión",
                //   link: "#proceso-admision",
                // },
                // {
                //   name: "Calendario académico",
                //   link: "#calendario-academico",
                // },
                // {
                //   name: "Reglamento institucional",
                //   link: "#reglamento-institucional",
                // },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.link}
                    className="text-sm hover:underline transition-colors"
                    style={{ color: "#7D8EA3" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-medium uppercase tracking-wider mb-4"
              style={{ color: "#D7A22A" }}
            >
              Contacto
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: "#7D8EA3" }}>
              <li>iesda.informes@gmail.com</li>
              <li>+52 (961) 398 6294</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t" style={{ borderColor: "#3A3A3A" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs" style={{ color: "#7D8EA3" }}>
              © {new Date().getFullYear()} IESDA. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              {/* <a
                href="#"
                className="text-xs hover:underline"
                style={{ color: "#7D8EA3" }}
              >
                Aviso de privacidad
              </a>
              <a
                href="#"
                className="text-xs hover:underline"
                style={{ color: "#7D8EA3" }}
              >
                Términos y condiciones
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

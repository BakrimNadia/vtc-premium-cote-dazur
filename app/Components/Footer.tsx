"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronRight, Clock3 } from "lucide-react";

const quickLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Zone", href: "#zones" },
  { label: "Contact", href: "#contact" },
];

const areas = [
  "Nice",
  "Cannes",
  "Monaco",
  "Antibes",
  "Villeneuve-Loubet",
  "Côte d’Azur",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.05),transparent_18%)]" />
      <div className="absolute left-[-80px] top-8 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-0 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Bloc logo / présentation */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="#hero" className="inline-flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-white/5 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
                {/* Emplacement logo */}
                <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.18em] text-[#D4AF37]/70">
                  Logo
                </div>

                {/* Quand tu auras ton vrai logo, remplace le bloc ci-dessus par ceci :
                <Image
                  src="/images/logo-vtc.png"
                  alt="Logo VTC"
                  fill
                  className="object-contain p-2"
                />
                */}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
                  VTC Premium
                </p>
                <h3 className="mt-1 text-lg font-semibold text-white">
                  Chauffeure Côte d’Azur
                </h3>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Service de transport privé premium sur la Côte d’Azur, pensé pour
              offrir une expérience élégante, rassurante et haut de gamme pour
              vos déplacements personnels, professionnels et vos transferts sur
              réservation.
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Navigation
            </p>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-[#D4AF37]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D4AF37] transition group-hover:translate-x-0.5" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Zones */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Zones desservies
            </p>

            <ul className="mt-5 space-y-3">
              {areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-2 text-sm text-white/72"
                >
                  <MapPin className="h-4 w-4 text-[#D4AF37]" />
                  {area}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#D4AF37]" />
                <div className="text-sm text-white/72">
                  <p className="font-medium text-white">Téléphone</p>
                  <p>06 00 00 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#D4AF37]" />
                <div className="text-sm text-white/72">
                  <p className="font-medium text-white">Email</p>
                  <p>contact@tonsite.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[#D4AF37]" />
                <div className="text-sm text-white/72">
                  <p className="font-medium text-white">Disponibilité</p>
                  <p>Sur réservation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bas de footer */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-col gap-4 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between"
        >
          <p>© {currentYear} VTC Premium Côte d’Azur. Tous droits réservés.</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Mentions légales
            </Link>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Politique de confidentialité
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
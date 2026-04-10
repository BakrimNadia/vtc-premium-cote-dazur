"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Star, CarFront } from "lucide-react";

const title = "Votre chauffeure VTC premium sur la Côte d’Azur";

const titleContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const letterVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -16,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/Villeneuve-loubet.png"
          alt="Femme chauffeure VTC premium sur la Côte d’Azur"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,192,203,0.08),transparent_25%)]" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/50 to-black" />

      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-60px] top-[20%] h-80 w-80 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                Chauffeure privée premium
              </span>
            </motion.div>

            <motion.h1
              variants={titleContainer}
              initial="hidden"
              animate="show"
              className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl"
            >
              {title.split("").map((char, index) => (
                <motion.span
                  key={`${char}-${index}`}
                  variants={letterVariant}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.55 }}
              className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
            >
              Déplacements élégants et sereins au départ de Nice, Cannes,
              Monaco, Antibes et Villeneuve-Loubet. Un service haut de gamme,
              discret et rassurant, pensé pour une clientèle locale,
              professionnelle et touristique.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.75 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Nice • Cannes • Monaco
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Transferts aéroports / gares
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                Disponibilité sur réservation
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.95 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-[#e5bf4e]"
              >
                Réserver maintenant
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-medium text-white transition duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
              >
                Découvrir les services
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.85 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-[#D4AF37]/20 via-transparent to-pink-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                    Réservation privée
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Trajet premium & discret
                  </h2>
                </div>

                <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 p-3">
                  <CarFront className="h-5 w-5 text-[#D4AF37]" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                    Zone desservie
                  </p>
                  <div className="mt-2 flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-white/60" />
                    <p className="text-sm leading-6 text-white/80">
                      Nice, Cannes, Antibes, Monaco, Villeneuve-Loubet et Côte
                      d’Azur.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
                    Expérience
                  </p>
                  <div className="mt-2 flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-white/60" />
                    <p className="text-sm leading-6 text-white/80">
                      Service soigné, ambiance rassurante, ponctualité et confort
                      haut de gamme.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/12 via-white/[0.04] to-pink-300/10 px-4 py-4"
              >
                <p className="text-sm font-medium text-white">
                  Élégance, sérénité, discrétion.
                </p>
                <p className="mt-1 text-sm text-white/65">
                  Une signature premium pensée pour une activité féminine haut de
                  gamme.
                </p>
              </motion.div>

              <Link
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37] px-5 py-4 text-sm font-semibold text-black transition hover:bg-[#e5bf4e]"
              >
                Demander une réservation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
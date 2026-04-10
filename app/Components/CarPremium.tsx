"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { BatteryCharging, CarFront, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const vehiclePoints = [
  {
    icon: BatteryCharging,
    title: "100% électrique",
    description: "Un trajet plus silencieux, plus fluide et plus respectueux de l’environnement.",
  },
  {
    icon: ShieldCheck,
    title: "Confort & sérénité",
    description: "Une expérience premium pensée pour allier sécurité, discrétion et bien-être.",
  },
  {
    icon: Users,
    title: "Accueil soigné",
    description: "Un service professionnel avec une prise en charge élégante et rassurante.",
  },
];

export default function CarPremium() {
  return (
    <section
      id="vehicule"
      className="relative isolate overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/vehicule.png"
          alt="Tesla électrique premium pour activité VTC"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Overlays premium */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.5),rgba(0,0,0,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_24%),radial-gradient(circle_at_left,rgba(244,114,182,0.07),transparent_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-80px] bottom-10 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
              Véhicule premium
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Une Tesla
            <span className="text-[#D4AF37]"> électrique </span>
            pour une expérience
            <br className="hidden sm:block" />
            de trajet haut de gamme
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            Le véhicule incarne un positionnement premium moderne : conduite
            fluide, silence à bord, confort, technologie et image élégante.
            Une solution idéale pour les trajets privés, professionnels,
            transferts aéroports et déplacements sur la Côte d’Azur.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Tesla électrique
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Confort premium
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Image haut de gamme
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
              Trajets sur réservation
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {vehiclePoints.map((point) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <Icon className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {point.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-white/70">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/25 bg-black/25 px-5 py-3 backdrop-blur-md"
        >
          <CarFront className="h-4 w-4 text-[#D4AF37]" />
          <Leaf className="h-4 w-4 text-[#D4AF37]" />
          <span className="text-sm text-white/80">
            Mobilité premium, moderne et responsable.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  Gem,
  Users,
  CarFront,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: MapPin,
    title: "Zone d’intervention",
    description:
      "Nice, Cannes, Monaco, Antibes et Villeneuve-Loubet pour vos trajets privés, professionnels et touristiques.",
  },
  {
    icon: Users,
    title: "Expérience humaine",
    description:
      "10 ans d’expérience dans le transport et l’accueil des personnes, avec un sens du service rassurant et soigné.",
  },
  {
    icon: ShieldCheck,
    title: "Service de confiance",
    description:
      "Discrétion, ponctualité, sérénité et attention portée à chaque détail pour une expérience haut de gamme.",
  },
  {
    icon: Gem,
    title: "Positionnement premium",
    description:
      "Une image élégante, féminine et professionnelle, pensée pour une clientèle exigeante sur la Côte d’Azur.",
  },
  {
    icon: Clock3,
    title: "Trajets sur réservation",
    description:
      "Organisation fluide, prise en charge sérieuse et disponibilité adaptée à vos besoins.",
  },
  {
    icon: CarFront,
    title: "Confort & standing",
    description:
      "Une prestation premium avec une attention particulière au confort, à la qualité d’accueil et à l’expérience client.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(212,175,55,0.08),transparent_28%),radial-gradient(circle_at_top_right,rgba(244,114,182,0.07),transparent_22%)]" />
      <div className="absolute left-[-80px] top-16 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-12 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            style={{ y: glowY }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-pink-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="relative h-[380px] w-full sm:h-[460px] lg:h-[620px]"
              >
                <Image
                  src="/images/about-vtc-cote-azur.jpg"
                  alt="Vue premium de la Côte d’Azur"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.3),rgba(0,0,0,0.7))]" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/35 px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#D4AF37]">
                    Au cœur de la Côte d’Azur
                  </span>
                </div>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
                  Une présence locale, élégante et rassurante pour vos
                  déplacements privés, professionnels et événementiels.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="text-xs uppercase tracking-[0.26em] text-[#D4AF37]">
                À propos
              </span>
            </div>

            <h2 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Une présence
              <span className="text-[#D4AF37]"> premium, féminine </span>
              et locale sur la Côte d’Azur
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Située au cœur de la Côte d’Azur, j’interviens sur les secteurs de
              Nice, Cannes, Monaco, Antibes et Villeneuve-Loubet pour proposer
              un service de transport privé à la fois élégant, rassurant et
              hautement professionnel.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Forte de
              <span className="font-semibold text-white">
                {" "}
                10 années d’expérience dans le transport en commun et dans
                l’accueil des personnes
              </span>
              , j’accorde une importance particulière à la ponctualité, à la
              qualité de prise en charge, au confort et à la sérénité de chaque
              trajet.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Mon approche s’adresse à une clientèle recherchant une expérience
              plus soignée : déplacements professionnels, transferts premium,
              accompagnement discret, image haut de gamme et attention portée
              aux détails. L’objectif est simple :
              <span className="text-white">
                {" "}
                offrir un trajet fluide, sécurisé et réellement premium.
              </span>
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#D4AF37]/10 to-white/[0.03] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                  Signature
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Élégance, discrétion, confiance et qualité d’accueil.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                  Positionnement
                </p>
                <p className="mt-2 text-sm leading-7 text-white/75">
                  Un service premium avec une touche féminine raffinée.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/25 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 transition duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5 text-[#D4AF37]" />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
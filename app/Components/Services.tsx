"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Briefcase, Plane, Route } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Trajets privés & professionnels",
    description:
      "Déplacements élégants pour rendez-vous d’affaires, hôtels, restaurants, événements privés ou trajets du quotidien sur la Côte d’Azur.",
    image: "/images/service-prive-premium.jpg",
    icon: Briefcase,
    badge: "Service premium",
  },
  {
    title: "Transferts aéroports & gares",
    description:
      "Prise en charge soignée vers ou depuis les aéroports et gares, avec ponctualité, confort et sérénité pour vos arrivées et départs.",
    image: "/images/service-aeroport-gare.jpg",
    icon: Plane,
    badge: "Ponctualité & confort",
  },
  {
    title: "Trajets hors département",
    description:
      "Déplacements longue distance sur réservation vers d’autres villes et régions, avec une expérience haut de gamme pensée pour voyager sereinement.",
    image: "/images/service-longue-distance.jpg",
    icon: Route,
    badge: "Longue distance",
  },
];

function ServiceCard({
  title,
  description,
  image,
  badge,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  image: string;
  badge: string;
  icon: React.ElementType;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 92%", "end 10%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -18]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay: index * 0.12, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.18),rgba(0,0,0,0.7))]" />

      <div className="relative h-[320px] overflow-hidden sm:h-[360px]">
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <div className="absolute left-5 top-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/35 px-3 py-2 backdrop-blur-md">
            <Icon className="h-4 w-4 text-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">
              {badge}
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="max-w-[85%] text-2xl font-semibold leading-tight text-white">
            {title}
          </h3>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/10">
            <ArrowUpRight className="h-5 w-5 text-[#D4AF37]" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-white/72 sm:text-[15px]">
          {description}
        </p>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-[#D4AF37]/40 via-white/10 to-transparent" />

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70">
            Haut de gamme
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70">
            Discrétion
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-white/70">
            Sur réservation
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_24%),radial-gradient(circle_at_right,rgba(244,114,182,0.06),transparent_18%)]" />
      <div className="absolute left-[-60px] top-16 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-10 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-2 backdrop-blur-md">
            <span className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              Services
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Des prestations
            <span className="text-[#D4AF37]"> premium</span>
            <br className="hidden sm:block" />
            pensées pour chaque trajet
          </h2>

          <motion.p
            initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-base leading-8 text-white/72 sm:text-lg"
          >
            Une expérience de transport privée haut de gamme, entre élégance,
            ponctualité et confort, pour répondre aux besoins d’une clientèle
            locale, professionnelle et touristique sur la Côte d’Azur et
            au-delà.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              badge={service.badge}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Navigation, ShieldCheck, Clock3, Briefcase } from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    icon: MapPin,
    title: "Zone d’intervention",
    description:
      "Nice, Cannes, Monaco, Antibes et Villeneuve-Loubet pour vos déplacements privés et professionnels.",
  },
  {
    icon: Clock3,
    title: "Réactivité",
    description:
      "Une organisation sur réservation avec ponctualité, fluidité et attention portée à chaque trajet.",
  },
  {
    icon: ShieldCheck,
    title: "Service rassurant",
    description:
      "Une prise en charge sérieuse, discrète et soignée, pensée pour une clientèle exigeante.",
  },
  {
    icon: Briefcase,
    title: "Clientèle variée",
    description:
      "Transferts business, trajets privés, aéroports, gares, hôtels, événements et longues distances.",
  },
];

export default function Zone() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 20%"],
  });

  const { scrollYProgress: mapProgress } = useScroll({
    target: mapRef,
    offset: ["start 95%", "end 10%"],
  });

  const mapScale = useTransform(mapProgress, [0, 1], [1.02, 1.08]);
  const mapY = useTransform(mapProgress, [0, 1], [30, -18]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -24]);

  return (
    <section
      id="zones"
      ref={sectionRef}
      className="relative overflow-hidden px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 bg-[#D4AF37]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.14),rgba(0,0,0,0.10))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.12),transparent_28%)]" />
      <div className="absolute left-[-90px] top-8 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
      <div className="absolute right-[-80px] bottom-8 h-72 w-72 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header plus compact */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-black/15 bg-white/20 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-xs uppercase tracking-[0.26em] text-black/80">
              Zone d’intervention
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl"
          >
            Présente au cœur de la Côte d’Azur
          </motion.h2>
        </div>

        {/* Layout ajusté */}
        <div className="grid items-start gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 xl:gap-20">
          {/* Carte plus grande */}
          <motion.div
            ref={mapRef}
            style={{ y: glowY }}
            initial={{ opacity: 0, x: -45, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative"
          >
            {/* glow premium */}
            <div className="absolute -inset-6 rounded-[2.4rem] bg-black/10 blur-2xl" />
            <div className="absolute -inset-3 rounded-[2.2rem] bg-white/10 blur-xl" />

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/18 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm"
            >
              <motion.div
                style={{ scale: mapScale, y: mapY }}
                className="relative aspect-[1.08/1] w-full sm:aspect-[1.18/1] lg:aspect-[1.02/1]"
              >
                <iframe
                  title="Carte Google Maps - Zone d’intervention Côte d’Azur"
                  src="https://www.google.com/maps?q=Nice,Cannes,Monaco,Antibes,Villeneuve-Loubet&z=9&output=embed"
                  className="absolute inset-0 h-full w-full border-0 brightness-[0.93] contrast-[1.02] saturate-[0.9]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* overlays premium */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.10),rgba(0,0,0,0.16))]" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/20 to-transparent" />

              <div className="pointer-events-none absolute left-5 top-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/78 px-3 py-2 text-xs font-medium text-black shadow-md backdrop-blur-sm">
                  <Navigation className="h-4 w-4" />
                  Côte d’Azur • Nice • Cannes • Monaco
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Texte plus respirant */}
          <motion.div
            initial={{ opacity: 0, x: 55, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:pt-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/22 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-black/80" />
              <span className="text-xs uppercase tracking-[0.22em] text-black/80">
                Présence locale
              </span>
            </div>

            <h3 className="mt-5 max-w-xl text-3xl font-semibold leading-[1.12] sm:text-4xl xl:text-[3rem]">
              Une couverture stratégique entre mer, business et lieux d’exception
            </h3>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mt-6 max-w-xl text-base leading-8 text-black/75 sm:text-lg"
            >
              J’interviens principalement sur les secteurs de
              <span className="font-semibold text-black">
                {" "}
                Nice, Cannes, Monaco, Antibes et Villeneuve-Loubet
              </span>
              , afin de proposer un service de transport privé premium adapté
              aussi bien aux déplacements personnels qu’aux besoins d’une clientèle
              professionnelle et touristique.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.22, ease: "easeOut" }}
              className="mt-5 max-w-xl text-base leading-8 text-black/75 sm:text-lg"
            >
              Cette implantation au cœur de la Côte d’Azur permet d’assurer des
              trajets plus fluides, une meilleure ponctualité et une qualité
              d’accueil cohérente avec un positionnement
              <span className="font-semibold text-black">
                {" "}
                élégant, rassurant et haut de gamme
              </span>
              .
            </motion.p>
          </motion.div>
        </div>
      </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.28 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="rounded-[1.5rem] border border-black/10 bg-white/28 p-5 shadow-[0_14px_28px_rgba(0,0,0,0.08)] backdrop-blur-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-[#D4AF37] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-black">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-black/70">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
    </section>

    
  );
}
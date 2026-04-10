"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  User,
  CarFront,
} from "lucide-react";
import { useRef } from "react";

const infos = [
  {
    icon: Phone,
    title: "Réponse rapide",
    description:
      "Demandes de contact et réservations traitées avec attention et réactivité.",
  },
  {
    icon: ShieldCheck,
    title: "Service rassurant",
    description:
      "Une approche discrète, professionnelle et soignée à chaque échange.",
  },
  {
    icon: MapPin,
    title: "Secteurs desservis",
    description:
      "Nice, Cannes, Monaco, Antibes, Villeneuve-Loubet et alentours.",
  },
];

export default function Contact() {
  const imageRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 95%", "end 10%"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [24, -16]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#121212] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.06),transparent_18%)]" />
      <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute right-[-60px] bottom-10 h-72 w-72 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-2 backdrop-blur-md"
          >
            <span className="text-xs uppercase tracking-[0.26em] text-[#D4AF37]">
              Contact & réservation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Réservez votre trajet
            <span className="text-[#D4AF37]"> en toute sérénité</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
            className="mt-6 text-base leading-8 text-white/72 sm:text-lg"
          >
            Une prise de contact simple, élégante et fluide pour vos demandes
            d’information, transferts privés, trajets professionnels et
            réservations sur la Côte d’Azur.
          </motion.p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          {/* Bloc image + infos */}
          <div className="space-y-6">
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-pink-300/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                <motion.div
                  style={{ scale: imageScale, y: imageY }}
                  className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]"
                >
                  <Image
                    src="/images/contact-vtc-premium.jpg"
                    alt="Illustration premium réservation VTC"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.2),rgba(0,0,0,0.55))]" />

                <div className="absolute left-5 top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-black/35 px-4 py-2 backdrop-blur-md">
                    <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                      Service premium
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                    Une expérience fluide et haut de gamme
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                    Contact, demande de disponibilité et réservation dans une
                    interface claire, moderne et pensée pour inspirer confiance.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {infos.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + index * 0.08,
                      ease: "easeOut",
                    }}
                    className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                      <Icon className="h-5 w-5 text-[#D4AF37]" />
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-white/70">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Formulaires */}
          <motion.div
            initial={{ opacity: 0, x: 45, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="grid gap-8"
          >
            {/* Contact */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                    Formulaire de contact
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Une question ? Contactez-moi
                  </h3>
                </div>
              </div>

              <form className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-white/75">Nom</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-white/75">Téléphone</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="tel"
                      placeholder="Votre numéro"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/75">Email</label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/75">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre demande..."
                    className="w-full rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.01] hover:bg-[#e2bd4a]"
                  >
                    <Send className="h-4 w-4" />
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            </div>

            {/* Réservation */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                  <CalendarDays className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                    Demande de réservation
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Planifiez votre trajet
                  </h3>
                </div>
              </div>

              <form className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/75">Lieu de départ</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="text"
                      title="Lieu de départ"
                      placeholder="Ex : Nice Aéroport"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/75">Destination</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="text"
                      title="Destination"
                      placeholder="Ex : Monaco"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/75">Date</label>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="date"
                      title="Sélectionnez une date"
                      placeholder="Sélectionnez une date"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/75">Heure</label>
                  <div className="relative">
                    <Clock3 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="time"
                      title="Sélectionnez une heure"
                      placeholder="Sélectionnez une heure"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/75">Nom</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="text"
                      title="Votre nom"
                      placeholder="Votre nom"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/75">Téléphone</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                    <input
                      type="tel"
                      title="Votre numéro de téléphone"
                      placeholder="Votre numéro"
                      className="w-full rounded-2xl border border-white/10 bg-black/20 py-4 pl-11 pr-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-white/75">Informations complémentaires</label>
                  <textarea
                    rows={4}
                    placeholder="Bagages, nombre de passagers, précision sur le trajet..."
                    className="w-full rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#D4AF37]/40 focus:bg-black/30"
                  />
                </div>

                <div className="sm:col-span-2 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                      <CarFront className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">Trajet premium</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                      <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">Service discret</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                      <Clock3 className="h-4 w-4 text-[#D4AF37]" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-white">Sur réservation</p>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-[1.01] hover:bg-[#e2bd4a]"
                  >
                    <CalendarDays className="h-4 w-4" />
                    Demander une réservation
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Zones", href: "#zones" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="#hero"
            className="group flex items-center gap-3"
            aria-label="Retour à l'accueil"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-white/5 shadow-[0_0_30px_rgba(212,175,55,0.10)]">
              <Sparkles className="h-5 w-5 text-[#D4AF37]" />
            </div>

            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">
                VTC Premium
              </p>
              <p className="text-sm text-white/90">
                Chauffeure Côte d’Azur
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition duration-300 hover:text-[#D4AF37]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02] hover:bg-[#e5bf4e]"
            >
              <Phone className="h-4 w-4" />
              Réserver
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur lg:hidden"
            aria-label="Ouvrir le menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.aside
              className="fixed right-0 top-0 z-[70] flex h-screen w-[86%] max-w-sm flex-col border-l border-white/10 bg-[#090909] p-6 shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#D4AF37]">
                    Navigation
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Chauffeure VTC premium
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                  aria-label="Fermer le menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-base text-white/85 transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#D4AF37]/10 to-white/[0.03] p-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
                  Réservation
                </p>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Nice, Cannes, Monaco, Antibes, Villeneuve-Loubet.
                </p>

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#e5bf4e]"
                >
                  <Phone className="h-4 w-4" />
                  Me contacter
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
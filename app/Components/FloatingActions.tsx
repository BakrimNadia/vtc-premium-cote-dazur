"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

type FloatingActionsProps = {
  whatsappNumber?: string;
  whatsappMessage?: string;
};

export default function FloatingActions({
  whatsappNumber = "33686466287",
  whatsappMessage = "Bonjour, je souhaite obtenir des informations pour une réservation VTC.",
}: FloatingActionsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 260);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto flex items-center gap-3"
          >
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={clsx(
                "group flex h-14 w-14 items-center justify-center rounded-full",
                "border border-[#D4AF37]/30 bg-black/80 text-[#D4AF37]",
                "shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                "transition duration-300 hover:bg-black hover:border-[#D4AF37]/50"
              )}
              aria-label="Remonter en haut"
            >
              <ArrowUp className="h-5 w-5 transition duration-300 group-hover:-translate-y-0.5" />
            </motion.button>

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className={clsx(
                  "group flex h-14 w-14 items-center justify-center rounded-full",
                  "border border-[#D4AF37]/30 bg-[#D4AF37] text-black",
                  "shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                  "transition duration-300 hover:scale-[1.03] hover:bg-[#e3be4a]"
                )}
              >
                <MessageCircle className="h-5 w-5 transition duration-300 group-hover:scale-105" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
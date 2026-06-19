"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "من نحن", href: "#about" },
  { label: "المنتجات", href: "#products" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

         
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:inline-flex"
            >
              احصل على عرض
            </Button>

           
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-brand-amber ${
                    scrolled ? "text-brand-dark" : "text-white/90"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div
                  className={`text-base font-black leading-none tracking-tight transition-colors duration-300 ${
                    scrolled ? "text-brand-dark" : "text-white"
                  }`}
                >
                  Smart Implant
                </div>
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-amber">
                  SOLUTIONS
                </div>
              </div>

              <div
                className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                  scrolled ? "bg-brand-dark" : "bg-transparent"
                }`}
                style={{ width: 52, height: 52 }}
              >
                <Image
                  src="/logo-dark.jpeg"
                  alt="Smart Implant Solutions logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="52px"
                />
              </div>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-brand-dark hover:bg-brand-light"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 bg-white shadow-xl border-b border-brand-light lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-right text-lg font-medium text-brand-dark hover:text-brand-amber transition-colors py-2 border-b border-brand-light/50 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <Button
                variant="primary"
                onClick={() => handleNavClick("#contact")}
                className="mt-2 w-full"
              >
                احصل على عرض
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

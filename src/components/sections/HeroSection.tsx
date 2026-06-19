"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2C1A0E 0%, #3D2210 45%, #4A2A14 100%)" }}
    >
      
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />


      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         
          <div className="order-1">
       
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur border border-white/15 rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-xs font-medium">Smart Implant Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight text-white mb-4"
            >
              حلول متطورة لزراعات الأسنان
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight mb-8"
              style={{ color: "#C9A227" }}
            >
              بأعلى معايير الجودة العالمية
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
            >
              موّرد متخصص لأنظمة زراعات الأسنان الألمانية والكورية والمصرية — نخدم أطباء الأسنان والعيادات في جميع أنحاء المنطقة بمنتجات معتمدة ودعم فني محترف.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                <ArrowLeft size={20} className="rotate-180" />
                تواصل معنا
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToProducts}
                className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                استعرض المنتجات
              </Button>
            </motion.div>

           
          </div>

          <div className="order-2 relative flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
            <div className="relative w-[520px] sm:w-[600px] h-[520px] sm:h-[600px]">
  <div className="absolute inset-0 bg-[#C9A227]/10 blur-3xl rounded-full scale-75" />

  <Image
    src="/implant.jpeg"
    alt="Dental Implant"
    fill
    className="object-contain drop-shadow-2xl"
    priority
  />
</div>
           

              Rating card
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-4 top-8 bg-white rounded-2xl shadow-xl p-4 min-w-36"
              >
                <div className="flex items-center gap-2">
                  <Star size={18} className="fill-brand-amber text-brand-amber" />
                  <span className="text-2xl font-black text-brand-dark">٤.٩</span>
                  <span className="text-sm text-brand-dark/60">/ ٥</span>
                </div>
                <div className="text-xs text-brand-dark/50 mt-1">تقييم الأطباء</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -left-4 bottom-8 bg-white rounded-2xl shadow-xl p-4"
              >
                <div className="text-2xl font-black text-brand-amber">٢٠+</div>
                <div className="text-xs text-brand-dark/60">عيادة تثق بنا</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C240 0 480 20 720 20C960 20 1200 0 1440 40V80H0Z" fill="#FAF7F2" />
        </svg>
      </div>
    </section>
  );}
"use client";

import { motion } from "framer-motion";
import { Headphones, BadgeCheck, Award, Zap, ShieldCheck, Truck } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    icon: Award,
    title: "جودة عالمية",
    description: "منتجات مطابقة لأعلى المعايير الدولية CE وFDA.",
  },
  {
    icon: BadgeCheck,
    title: "أسعار تنافسية",
    description: "حلول مرنة تناسب جميع ميزانيات العيادات.",
  },
  {
    icon: Headphones,
    title: "دعم فني متخصص",
    description: "فريق طبي مؤهل لدعمك في كل خطوة.",
  },
  {
    icon: Truck,
    title: "توريد سريع",
    description: "شبكة توزيع تضمن وصول طلبك في أسرع وقت.",
  },
  {
    icon: ShieldCheck,
    title: "منتجات معتمدة",
    description: "جميع المنتجات تحت معايير الجودة والاعتماد الدولي.",
  },
  {
    icon: Zap,
    title: "أحدث تقنيات الزراعة",
    description: "تقنيات سطح متطورة لاندماج عظمي مثالي.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel className="mb-5">لماذا نحن</SectionLabel>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight">
            ست أسباب لاختيار{" "}
            <span className="inline-flex flex-col leading-none">
  <span className="text-brand-amber">Smart Implant</span>
  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-amber/70">
    Solutions
  </span>
</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-brand-cream rounded-2xl p-7 hover:bg-white hover:shadow-lg border border-transparent hover:border-brand-light transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-amber flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="text-lg font-black text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-brand-dark/65 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

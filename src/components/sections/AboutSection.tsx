"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

const features = [
  "منتجات حاصلة على شهادات الاعتماد الدولية CE وFDA وISO.",
  "فريق دعم فني وطبي متخصص لمتابعة كل حالة.",
  "شبكة توزيع تغطي المنطقة بالكامل بمواعيد دقيقة.",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="mb-5">من نحن</SectionLabel>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight text-brand-dark mb-4">
              شريكك الموثوق في عالم{" "}
              <span className="text-brand-amber">زراعات الأسنان</span>
            </h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed mb-8">
              في <strong className="text-brand-dark">Smart Implant Solutions</strong> نقدم لأطباء الأسنان والعيادات تشكيلة متكاملة من أنظمة زراعات الأسنان من أرقى مصانع العالم — ألمانيا، كوريا الجنوبية ومصر — مع التزام تام بالجودة، الاعتمادية، وأحدث تقنيات طب الأسنان الحديث.
            </p>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={22} className="text-brand-amber flex-shrink-0 mt-0.5" />
                  <span className="text-brand-dark/75">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden h-[420px] bg-gradient-to-br from-slate-100 to-slate-200">
             <div className="relative rounded-2xl overflow-hidden h-[420px]">
  
  <Image
    src="/about.jpeg"
    alt="Dental clinic"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-black/10" />
</div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
              className="absolute -left-5 bottom-10 bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="text-3xl font-black text-brand-amber">٢٠+</div>
              <div className="text-sm text-brand-dark/60 mt-1">عيادة تثق بنا</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

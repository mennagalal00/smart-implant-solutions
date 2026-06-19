"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, MessageCircle, Facebook } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const contactItems = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: <span dir="ltr"> +20 1016941119</span>,
    href: "tel:+201016941119",
    color: "bg-green-50 text-green-600",
  },
  {
  icon: Facebook,
  label: "فيسبوك",
  value: "تابعنا على فيسبوك",
  href: "https://www.facebook.com/share/1EqnZDfPyx/",
  color: "bg-blue-50 text-blue-600",
},
  {
    icon: MapPin,
    label: "العنوان",
    value: "سوهاج ، جمهورية مصر العربية",
    href: "https://maps.app.goo.gl/kfSigYrTt7q6FMvi7?g_st=aw",
    color: "bg-red-50 text-red-500",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-brand-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel className="mb-5">تواصل معنا</SectionLabel>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-brand-dark leading-tight mb-4">
            ابدأ شراكتك معنا اليوم
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-xl mx-auto">
            فريقنا جاهز لمساعدتك في اختيار النظام الأمثل لعيادتك. تواصل معنا عبر أي من القنوات التالية.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {contactItems.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl p-8 border border-brand-light shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}>
                <Icon size={26} />
              </div>
              <div>
                <div className="text-xs font-semibold text-brand-dark/45 mb-1">{label}</div>
                <div className="font-bold text-brand-dark text-sm leading-relaxed">{value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <a
            href="https://wa.me/201016961113"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <MessageCircle size={24} />
            تحدث معنا على واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { products } from "@/lib/data";
import type { Product } from "@/types";
import Image from "next/image";

const originColors: Record<string, string> = {
  german: "bg-amber-50 text-amber-800 border-amber-200",
  korean: "bg-blue-50 text-blue-800 border-blue-200",
  egyptian: "bg-green-50 text-green-700 border-green-200",
};


function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-white rounded-2xl border border-brand-light hover:border-brand-amber/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${originColors[product.origin]}`}>
          {product.originCode} {product.originLabel}
        </span>
      </div>

      <div className="mx-4 mb-4 rounded-xl overflow-hidden h-56 relative bg-gradient-to-br from-gray-50 to-gray-100">
  <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-contain"
  />
</div>

      <div className="px-5 pb-6">
        <h3 className="text-xl font-black text-brand-dark mb-1">{product.name}</h3>
        <div className="text-sm font-semibold text-brand-amber mb-3">{product.subtitle}</div>
        <p className="text-brand-dark/65 text-sm leading-relaxed mb-5">{product.description}</p>
        <button className="flex items-center gap-2 text-brand-amber font-semibold text-sm group-hover:gap-3 transition-all duration-200">
          <ArrowLeft size={16} className="rotate-180" />
          اعرف المزيد
        </button>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="section-pad bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <SectionLabel className="mb-5">منتجاتنا</SectionLabel>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-brand-dark leading-tight mb-4">
            تشكيلة شاملة من أنظمة الزراعة
          </h2>
          <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
       أنظمة معتمدة من ثلاث دول رائدة، لتغطي احتياجات عيادتك من الحالات الاقتصادية إلى الأكثر تعقيدا
          </p>
        </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
  {products.map((product, i) => (
    <ProductCard key={product.id} product={product} index={i} />
  ))}
</div>
      </div>
    </section>
  );
}

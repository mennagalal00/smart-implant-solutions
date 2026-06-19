import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "de-standard-01",
    origin: "german",
    design: "standard",
    name: "DXL Hybrid Implants",
     image: "/products/DXLHybrid.png",
    subtitle: "Standard تصميم",
    description: "هندسة دقيقة وثبات عالي، مناسبة لمعظم الحالات مع عمر استخدام ممتد.",
   
  },
  {
    id: "de-aggressive-02",
    origin: "german",
    design: "aggressive",
    name: " DXL Implants",
     image: "/products/DXL.png",
    subtitle: "Aggressive تصميم",
    description: "ثبات أولي استثنائي للحالات المعقدة وكثافة العظم المتخفضة بفضل الأسنان العميقة.",
  },
 
  {
    id: "kr-aggressive-04",
    origin: "korean",
    design: "aggressive",
    name: "Biotem implants",
     image: "/products/Biotem.png",
    subtitle: "Aggressive تصميم",
    description: "أسنان حلزونية حادة لاندماج عظمي سريع مع نتائج مثبتة .",
  },
  {
    id: "eg-standard-05",
    origin: "egyptian",
    
    design: "standard",
    name: "Dual implants",
    image: "/products/Dual.png",
    subtitle: "Standard تصميم",
    description: "تصنيع محلي بمعايير دولية، حل اقتصادي موثوق للحالات الشائعة.",
  },
  {
    id: "eg-aggressive-06",
    origin: "egyptian",
    design: "aggressive",
    name: "Zi implants",
   image: "/products/Zi (2).jpeg",
    subtitle: "Aggressive تصميم",
    description: "أداء قوي بسعر مناسب، مصمم خصيصاً للحالات التي تتطلب ثبات فوري.",
   
  },
];

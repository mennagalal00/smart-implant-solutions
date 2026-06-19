import Image from "next/image";
import { Phone,MapPin } from "lucide-react";

const quickLinks = [
  { label: "من نحن", href: "#about" },
  { label: "المنتجات", href: "#products" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

         
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
             
              <div
                className="relative flex-shrink-0 rounded-xl overflow-hidden"
                style={{ width: 52, height: 52 }}
              >
                <Image
                  src="/logo-dark.jpeg"
                  alt="Smart Implant Solutions logo"
                  fill
                  className="object-contain"
                  sizes="52px"
                />
              </div>
              <div className="text-right">
                <div className="text-base font-black leading-none text-white">Smart Implant</div>
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-brand-amber">SOLUTIONS</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed">
              موّرد متخصص لأنظمة زراعات الأسنان من ألمانيا وكوريا الجنوبية ومصر. نخدم أطباء الأسنان والعيادات بمنتجات معتمدة ودعم فني محترف.
            </p>
          </div>

        
          <div>
            <h3 className="font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/65 hover:text-brand-amber transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="font-bold text-lg mb-6">تواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/65 text-sm">
                <Phone size={16} className="text-brand-amber flex-shrink-0" />
                <span dir="ltr"> +20 1016941119</span>
              </li>
            
  
              <li className="flex items-center gap-3 text-white/65 text-sm">
                <MapPin size={16} className="text-brand-amber flex-shrink-0" />
                <span>سوهاج، مصر</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/45">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/75 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white/75 transition-colors">الشروط والأحكام</a>
          </div>
          <p>© 2026 Smart Implant Solutions. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

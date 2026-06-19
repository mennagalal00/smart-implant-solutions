import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Implant Solutions | حلول زراعة الأسنان المتطورة",
  description:
    "موّرد متخصص لأنظمة زراعات الأسنان الألمانية والكورية والمصرية. نخدم أطباء الأسنان والعيادات في جميع أنحاء المنطقة بمنتجات معتمدة ودعم فني محترف.",
  keywords: [
    "زراعة الأسنان",
    "implants dentaires",
    "dental implants Egypt",
    "Smart Implant Solutions",
    "زراعات ألمانية",
    "زراعات كورية",
  ],
  authors: [{ name: "Smart Implant Solutions" }],
  openGraph: {
    title: "Smart Implant Solutions | حلول زراعة الأسنان المتطورة",
    description:
      "موّرد متخصص لأنظمة زراعات الأسنان. جودة عالمية، دعم محلي.",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic antialiased">{children}</body>
    </html>
  );
}

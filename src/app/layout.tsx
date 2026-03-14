import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoTax AI — O'zbekiston Soliq Monitoring Platformasi",
  description: "Lex.uz va Soliq.uz dagi yangi soliq o'zgarishlarini real-vaqtda kuzating. Buxgalterlar va tadbirkorlar uchun AI-powered tahlil tizimi.",
  keywords: ["soliq", "buxgalter", "lex.uz", "soliq.uz", "O'zbekiston", "AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

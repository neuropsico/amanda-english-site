import type { Metadata } from "next";
import { Outfit, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amanda Cavalcante | Inglês de Verdade - Aulas Online e em Santa Catarina",
  description: "Fluência real, aulas online e preparatório especializado para ENEM, IELTS, TOEFL e Cambridge em Florianópolis e todo o Brasil.",
  keywords: [
    "aulas de inglês online", 
    "professora de inglês florianópolis", 
    "inglês santa catarina", 
    "preparatório IELTS", 
    "preparatório TOEFL", 
    "preparatório Cambridge", 
    "fluência em inglês", 
    "amanda cavalcante"
  ],
  openGraph: {
    title: "Amanda Cavalcante | Inglês de Verdade",
    description: "Método personalizado para fluência real e aprovação em certificações internacionais (IELTS, TOEFL, Cambridge). Aulas online para todo o Brasil e SC.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${playfair.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f5f5f6] text-[#38383c]">{children}</body>
    </html>
  );
}

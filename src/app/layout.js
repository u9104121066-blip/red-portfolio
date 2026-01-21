import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer"; // 1. IMPORTIAMO IL FOOTER

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// 2. AGGIORNIAMO I METADATI (Così la scheda del browser è corretta)
export const metadata = {
  title: "Red Web Studio | Full Stack & Funnels",
  description: "Ecosistemi digitali progettati per convertire. Next.js, n8n, Funnel Architecture.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Qui viene renderizzato il contenuto della pagina (Home, Chi siamo, ecc) */}
        {children}

        {/* 3. ECCO IL FOOTER (Apparirà in fondo a tutte le pagine) */}
        <Footer />
        
      </body>
    </html>
  );
}
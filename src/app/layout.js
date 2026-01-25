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

export const metadata = {
  metadataBase: new URL('https://redwebstudio.it'),
  title: {
    default: "Red Web Studio | Funnel Architect & Full Stack Developer",
    template: "%s | Red Web Studio"
  },
  description: "Esperti in Marketing Automation e Sviluppo Web Next.js. Progettiamo infrastrutture per lanci High-Ticket, tracciamento avanzato ed ecosistemi scalabili.",
  keywords: ["Funnel Architect", "Digital Marketing", "Marketing Automation", "Sviluppo Web Next.js", "Infrastrutture High-Ticket", "Tracciamento Avanzato", "Ecosistemi marketing scalabili"],
  authors: [{ name: "Radouane Chefaoui" }],
  creator: "Radouane Chefaoui",
  openGraph: {
    title: "Red Web Studio | Engineered for Scale",
    description: "Trasformiamo il tuo marketing in un asset ingegneristico ad alte prestazioni.",
    url: "https://redwebstudio.it",
    siteName: "Red Web Studio",
    images: [
      {
        url: "/Redrit.webp", // La tua foto Hero come anteprima social
        width: 1200,
        height: 630,
        alt: "Red Web Studio - Radouane Chefaoui",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Web Studio | Funnel Architect",
    description: "Sviluppo Web Next.js e Marketing Automation per Business Scalabili.",
    images: ["/Redrit.webp"],
  },
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
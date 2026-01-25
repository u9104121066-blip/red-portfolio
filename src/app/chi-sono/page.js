"use client";
import React from 'react';
import Navbar from "@/components/Navbar"; 
import { 
  Target, Zap, TrendingUp, Award, ShieldCheck, 
  Terminal, LayoutGrid, Globe, Code2, Database, Smartphone, Layers 
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ================= HEADER / TITLE SECTION ================= */}
      {/* FIX MOBILE: pt-32 (invece di 40) per alzare il titolo, pb-12 per avvicinare il contenuto */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-4 md:px-6 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto text-center">
            <h6 className="text-red-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">
                NON SOLO SVILUPPO. COSTRUISCO L'INTERO 
            </h6>
            {/* FIX MOBILE: text-4xl per evitare titoloni che spaccano il layout su schermi piccoli */}
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                ECOSISTEMA  <br />
                <span className="text-zinc-400">DI VENDITA ED EROGAZIONE.</span>
            </h1>
        </div>
      </section>

      {/* ================= MAIN CONTENT (COPY + FOTO) ================= */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          
          {/* 
             COLONNA SINISTRA: COPY 
             FIX MOBILE: order-2 su mobile (il testo va sotto la foto), order-none su desktop (torna a sinistra)
          */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-none">
            
            {/* Paragrafo Intro */}
            <div className="text-lg md:text-2xl font-light text-white leading-relaxed border-l-2 border-red-600 pl-4 md:pl-6">
                <p>
                    Dal primo click sull'Ads, alle dashboard per i tuoi venditori, fino all'area membri dei tuoi studenti. Un'infrastruttura unica, solida e interconnessa.
                </p>
            </div>

            {/* Corpo del testo */}
            <div className="text-zinc-400 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                    Nel mondo dell'Infobusiness, il "Funnel" è solo la punta dell'iceberg. Spesso vedo imprenditori 
                    concentrarsi solo sulla landing page, trascurando ciò che accade prima (i dati) e ciò che accade dopo
                     (la vendita e l'erogazione del corso).
                </p>
                <p>
                    Il mio ruolo è diverso dal classico web designer. Io sono un Technical Partner.
                    Il mio lavoro è garantire che ogni ingranaggio della tua azienda digitale giri alla perfezione.
                </p>
                <p>
                    Questo significa avere la flessibilità di usare strumenti rapidi come ClickFunnels o GoHighLevel per i lanci, ma anche la competenza tecnica per sviluppare piattaforme custom o dashboard complesse quando il business lo richiede.
                  Non lascio nulla al caso: traccio il traffico, organizzo i numeri per il tuo team vendita e strutturo l'esperienza formativa dei tuoi clienti.
                </p>
            </div>

            {/* Firma */}
            <div className="pt-4 md:pt-8">
                <p className="font-mono text-xs md:text-sm text-red-600 uppercase tracking-widest">
                    — Founder, Red Web Studio
                </p>
            </div>
          </div>

          {/* 
             COLONNA DESTRA: IMMAGINE / STATS 
             FIX MOBILE: order-1 su mobile (la foto va sopra), sticky disattivato su mobile per evitare bug di scroll
          */}
          <div className="lg:col-span-5 relative order-1 lg:order-none">
             <div className="relative md:sticky md:top-32">
                 {/* Cornice Immagine */}
                 {/* FIX IMMAGINE: aspect-auto e h-auto su mobile per NON tagliare la foto verticale */}
                 <div className="relative aspect-auto md:aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                    
                    {/* Immagine */}
                    <div className="relative bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-xs z-0">
                        {/* FIX LUMINOSITÀ: opacity-100 su mobile */}
                        <img 
                            src="/red.webp" 
                            className="w-full h-auto md:h-full md:object-cover opacity-100 md:opacity-80 md:group-hover:opacity-100 transition duration-700"
                        />
                    </div>
                    
                    {/* Overlay Sfumato: Ridotto su mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-20 md:opacity-60 z-10"></div>
                 </div>

                 {/* Box "Philosophy" */}
                 <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/50 p-4 md:p-6 rounded-xl border border-zinc-800">
                        <Zap className="w-5 h-5 md:w-6 md:h-6 text-red-600 mb-3" />
                        <h4 className="text-white font-bold text-sm">Velocità</h4>
                        <p className="text-[10px] md:text-xs text-zinc-500 mt-1">Performance first</p>
                    </div>
                    <div className="bg-zinc-900/50 p-4 md:p-6 rounded-xl border border-zinc-800">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-red-600 mb-3" />
                        <h4 className="text-white font-bold text-sm">Precisione</h4>
                        <p className="text-[10px] md:text-xs text-zinc-500 mt-1">Pixel perfect</p>
                    </div>
                 </div>
             </div>
          </div>

        </div>
      </section>

      {/* ================= VALORI / APPROACH ================= */}
      <section className="py-12 md:py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="mb-8 md:mb-12 md:w-1/2">
                <h2 className="text-2xl md:text-3xl text-white font-bold mb-4">I 4 PILASTRI DEL MIO METODO</h2>
                <p className="text-zinc-500 text-sm md:text-base">Per scalare non servono "hack" temporanei, ma infrastrutture solide. Ho codificato il mio intervento in 4 aree critiche per garantirti il controllo totale: dall'acquisizione del contatto fino alla consegna del prodotto.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                
                {/* Card 1 */}
                <div className="p-6 md:p-8 border border-zinc-800 bg-black rounded-2xl hover:border-red-600/50 transition duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4 md:mb-6 border border-zinc-800">
                        <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Funnel Architecture & Hybrid Dev</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Non esiste lo strumento perfetto, esiste quello giusto per il tuo momento. Sviluppo funnel ad alta conversione su stack rapidi (ClickFunnels, GHL, WordPress) per la massima velocità di esecuzione. Quando serve unicità o funzioni complesse, intervengo con codice custom o sviluppo Web App proprietarie.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 md:p-8 border border-zinc-800 bg-black rounded-2xl hover:border-red-600/50 transition duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4 md:mb-6 border border-zinc-800">
                        <Zap className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Sales Intelligence & KPI Dashboard</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Il marketing porta i lead, ma è il team vendita che porta il fatturato. Creo strumenti di monitoraggio avanzati (Dashboard Excel/Sheets automatizzate) per Setters e Closers. Fornisco al tuo team commerciale una visione chiara dei KPI in tempo reale, permettendo di ottimizzare le performance di vendita basandosi su numeri certi, non su sensazioni.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 md:p-8 border border-zinc-800 bg-black rounded-2xl hover:border-red-600/50 transition duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4 md:mb-6 border border-zinc-800">
                        <Award className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">E-Learning & Product Delivery</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        L'esperienza post-acquisto determina il Life Time Value (LTV) del cliente. Gestisco l'infrastruttura di erogazione dei tuoi corsi:<br/>
                        Gestione Tool: Setup avanzato di piattaforme terze come Kajabi, Teachable o GHL Membership.<br/>
                        Sviluppo Custom: Creazione di LMS (Learning Management System) proprietari da zero per un'esperienza utente totalmente brandizzata e unica.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 md:p-8 border border-zinc-800 bg-black rounded-2xl hover:border-red-600/50 transition duration-300">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-900 rounded-full flex items-center justify-center text-white mb-4 md:mb-6 border border-zinc-800">
                        <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">Data Integrity & Tracking</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                        Senza dati, non c'è controllo. Implemento sistemi di tracciamento Server-Side e strategie UTM granulari per garantire che ogni euro speso in advertising sia contabilizzato. Collego il marketing ai tuoi sistemi di CRM e Analytics, bypassando i limiti dei cookie e degli ad-blocker.
                    </p>
                </div>

            </div>
        </div>
      </section>

      {/* ================= TECH STACK GRID ================= */}
      <section className="py-12 md:py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-10">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">My Tech Arsenal</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-800">
                {[
                    { name: 'Next.js', icon: <Terminal className="w-6 h-6"/> },
                    { name: 'n8n', icon: <Zap className="w-6 h-6"/> },
                    { name: 'Stripe', icon: <LayoutGrid className="w-6 h-6"/> },
                    { name: 'Google Cloud', icon: <Globe className="w-6 h-6"/> },
                    { name: 'React', icon: <Code2 className="w-6 h-6"/> },
                    { name: 'Docker', icon: <Database className="w-6 h-6"/> },
                    { name: 'Framer', icon: <Smartphone className="w-6 h-6"/> },
                    { name: 'Wordpress', icon: <Layers className="w-6 h-6"/> },
                ].map((item, i) => (
                    <div key={i} className="group border-r border-b border-zinc-800 p-6 md:p-8 flex flex-col items-center justify-center hover:bg-zinc-900/50 transition duration-500 cursor-default">
                        <div className="mb-4 text-zinc-600 group-hover:text-white transition duration-300">{item.icon}</div>
                        <span className="text-base md:text-lg font-bold text-zinc-500 group-hover:text-white transition duration-300 font-mono">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
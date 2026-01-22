

"use client";
import React from 'react';
import Link from 'next/link';
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Layers, Database, Cpu, Zap, Code2, LayoutGrid, Terminal, Smartphone, Globe, Server } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      {/* ================= HERO SECTION (RESPONSIVE FIX) ================= */}
      <section className="relative h-screen w-full flex flex-col items-center justify-end pb-24 md:pb-32 overflow-hidden">

              {/* 1. BACKGROUND IMAGE (Maschera Radiale) */}
        <div className="absolute inset-0 z-0 bg-black flex justify-center overflow-hidden">
            
            <div className="relative h-full w-full md:w-auto" 
                 style={{ 
                    /* 
                       RADIAL GRADIENT:
                       - black 40%: L'immagine è visibile al 100% nel centro (il cerchio centrale).
                       - transparent 80%: L'immagine svanisce completamente verso i bordi.
                    */
                    
                 }}>
                
                <img 
                    src="/red.png" 
                    alt="Background" 
                    className="h-full w-full md:w-auto object-cover object-top opacity-80" 
                />
            </div>

            {/* Sfumatura Basso (Questa serve per fondere i piedi dell'immagine col resto del sito) */}
            <div className="absolute bottom-0 left-0 w-full h-[60vh] md:h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* 2. CONTENT (RESPONSIVE TEXT) */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          
          {/* TITOLO */}
          {/* 
             text-5xl: Dimensione per Mobile (iPhone)
             md:text-8xl: Dimensione per Desktop (PC)
          */}
          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4 leading-[0.9] drop-shadow-2xl">
            RED WEB<br />
            STUDIO
          </h1>

          {/* SOTTOTITOLO */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-8 opacity-90">
             <div className="h-[2px] w-4 md:w-16 bg-red-600"></div>
             {/* Testo più piccolo su mobile (text-[10px]) per evitare che vada a capo male */}
             <p className="text-zinc-300 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm uppercase whitespace-nowrap">
                Full Stack Developer & Funnel Architect
             </p>
             <div className="h-[2px] w-4 md:w-16 bg-red-600"></div>
          </div>
          
          {/* DESCRIZIONE */}
          {/* Su mobile la nascondiamo o la accorciamo se vuoi, qui l'ho lasciata ma con font più piccolo */}
          <p className="text-zinc-500 text-xs md:text-sm max-w-xs md:max-w-lg mx-auto mt-4 md:mt-6 leading-relaxed font-light">
             Progetto ecosistemi digitali che non si limitano a convertire, ma massimizzano il valore di ogni singolo lead grazie a tracciamenti e flussi automatizzati..
          </p>
        </div>
      </section>
      
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: CARD (Stile del tuo screenshot) */}
          <div className="lg:col-span-5 relative">
             {/* Glow Effect Sfondo */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="relative bg-zinc-950 border border-zinc-800 p-8 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                    <Zap className="w-32 h-32 text-red-600" />
                </div>
                
                <div className="mb-10 relative z-10">
                    <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4 text-red-600 border border-red-600/20">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-6xl font-bold text-white mb-2">7+</h3>
                    <p className="text-lg text-zinc-400 font-medium">Anni di esperienza</p>
                    <p className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Lanci High-Ticket</p>
                </div>

                <div className="space-y-4 pt-8 border-t border-zinc-900">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><Code2 className="w-5 h-5 text-white" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Architettura del funnel</h4>
                            <p className="text-xs text-zinc-500">Soluizioni personalizzate</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><Database className="w-5 h-5 text-white" /></div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Integrazione degli strumenti</h4>
                            <p className="text-xs text-zinc-500">Gestione data e CRM</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="lg:col-span-7">
            <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Chi sono</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              IL PUNTO D'INCONTRO TRA  <br /> CODICE E <span className="text-red-600">MARKETING.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              Padroneggio gli stack rapidi <strong>(ClickFunnels, GoHighLevel, WordPress) </strong> per garantirti tempi di go-to-market immediati, 
              ma intervengo con il Codice Custom <strong>(JS, API, CSS)</strong> lì dove i tool si fermano.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Che si tratti di un lancio su ClickFunnels o di una Web App su misura, il risultato è lo stesso: un ecosistema che converte, <strong> traccia 
            i dati con precisione chirurgica e automatizza i flussi di lavoro</strong>, senza compromessi tecnici.
            </p>
            
            <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition flex items-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                Scopri il mio Metodo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>


      {/* ================= TECH STACK (GRID LAYOUT) ================= */}
      {/* Qui abbiamo trasformato il testo semplice in una griglia bordata elegante */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">my tech arsenal</p>
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
                    <div key={i} className="group border-r border-b border-zinc-800 p-8 flex flex-col items-center justify-center hover:bg-zinc-900/50 transition duration-500 cursor-default">
                        <div className="mb-4 text-zinc-600 group-hover:text-white transition duration-300">{item.icon}</div>
                        <span className="text-lg font-bold text-zinc-500 group-hover:text-white transition duration-300 font-mono">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>


      
                   {/* ================= SERVICES SECTION (ZIG-ZAG LAYOUT) ================= */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Expertise</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-white">COMPETENZE TECNICHE & <br /> SPECIALIZZAZIONI</h2>
        </div>

        <div className="space-y-24">
            
            {/* SERVICE 01 (Testo SX - Foto DX) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testo */}
                <div className="group p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">01.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Layers className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">FUNNEL ENGINEERING & FRONTEND</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Architetture High-Ticket</strong>: Progettazione integrale del percorso utente per massimizzare AOV (Average Order Value) e LTV, utilizzando sia builder rapidi che codice custom.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Sviluppo Web App (React/Next.js)</strong>: Creazione di interfacce utente ultra-veloci e SEO-friendly per progetti che richiedono performance superiori ai classici CMS.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>UX/UI Conversion Driven</strong>: Design pulito e psicologicamente orientato alla vendita, ottimizzato per mobile e velocità di caricamento.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: React, Next.js, ClickFunnels, GHL, WordPress, Tailwind CSS.
                    </p>
                </div>
                {/* Immagine */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                    <img src="/funnel.png" alt="Funnel" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
            </div>


            {/* SERVICE 02 (Foto SX - Testo DX) - Invertito su Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Immagine (Su mobile va sotto, su desktop va a sinistra grazie a 'order') */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group order-2 lg:order-1">
                    <img src="/funnel3.png" alt="Tracking" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                {/* Testo */}
                <div className="group p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500 order-1 lg:order-2">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">02.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Server className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">DATA INTEGRITY & ANALYTICS</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Server-Side Tracking</strong>: Implementazione avanzata di GTM Server-Side e CAPI (Facebook, TikTok) per recuperare i dati persi dai blocchi dei browser e cookie policy.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>UTM Strategy Avanzata</strong>: Standardizzazione dei parametri di tracciamento per sapere esattamente quale ad, email o link ha generato la vendita.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Audit & Debugging</strong>: Analisi profonda di setup esistenti per individuare discrepanze nei dati tra Business Manager e CRM.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: Google Tag Manager (Web & Server), GA4, Clarity, Stape.io.
                    </p>
                </div>
            </div>


            {/* SERVICE 03 (Testo SX - Foto DX) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testo */}
                <div className="group p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">03.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Cpu className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">HYPER-AUTOMATION & BACKEND</h3>
                    
                    {/* HO CORRETTO IL COPY QUI SOTTO PERCHÉ ERA DUPLICATO DAL PRIMO */}
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>CRM Integration</strong>: Sincronizzazione bidirezionale dei dati tra il funnel e il database contatti (ActiveCampaign, HubSpot, GoHighLevel) per nurturing automatico.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Dashboards & Reporting</strong>: Estrazione dati via API per alimentare dashboard di controllo KPI in tempo reale, eliminando i report manuali su Excel.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        <strong>Error Handling</strong>: Sistemi di notifica automatica (Slack/Telegram) che avvisano immediatamente se un lead non viene processato correttamente.
                    </p>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: n8n, Zapier, Make, Google Sheets API, Webhooks, Node.js.
                    </p>
      
                </div>
                {/* Immagine */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                    <img src="/funnel4.png" alt="Automation" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
            </div>

        </div>
      </section>

                {/* ================= PORTFOLIO SECTION (3 PROGETTI REALI) ================= */}
      <section id="portfolio" className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
            
            <Reveal>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Selected Works</h6>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Featured Projects</h2>
                    </div>
                    <Link href="/progetti" className="hidden md:flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 hover:text-red-600 hover:border-red-600 transition-all duration-300">
                        Vedi Tutti i Progetti <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-0">
                
                {/* PROGETTO 1: Inglese Divertente */}
                <Reveal delay={0.2}>
                    <div className="group cursor-pointer mb-12 md:mb-24">
                        <Link href="/progetti/inglese-divertente">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-6">
                                <img 
                                    src="/red.png" 
                                    alt="Inglese Divertente" 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition">High-Volume Tripwire Ecosystem</h3>
                                    <p className="text-zinc-500 mt-2 text-xs font-mono uppercase tracking-widest">WordPress • CRM Automation • Sales Ops</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

                {/* PROGETTO 2: Digital Shipping (OFFSET GIÙ) */}
                <Reveal delay={0.4}>
                    <div className="group cursor-pointer md:mt-32 mb-12 md:mb-24">
                        <Link href="/progetti/digital-shipping-revolution">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-6">
                                <img 
                                    src="/rap.png" 
                                    alt="Digital Shipping" 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition">Deep-Funnel B2B Architecture</h3>
                                    <p className="text-zinc-500 mt-2 text-xs font-mono uppercase tracking-widest">GoHighLevel • Stripe API • Webhooks</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

                {/* PROGETTO 3: Misterbox (Sotto il Progetto 1) */}
                <Reveal delay={0.2}>
                    <div className="group cursor-pointer mb-12 md:mb-24">
                        <Link href="/progetti/misterbox">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-6">
                                <img 
                                    src="/red.png" 
                                    alt="Misterbox" 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition">Gamified Commerce Architecture</h3>
                                    <p className="text-zinc-500 mt-2 text-xs font-mono uppercase tracking-widest">Next.js 14 • NestJS • Prisma • Docker</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

            </div>
            
            {/* Mobile "View All" Button */}
            <div className="mt-8 md:hidden text-center">
                <Link href="/progetti" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-zinc-800 px-8 py-4 rounded-full">
                    View All Projects <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>
        </div>
      </section>
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Scale Your Infrastructure</h2>
            <p className="text-zinc-400">Compila il modulo per un'analisi tecnica.</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-2 rounded-3xl shadow-2xl">
            {/* Il form manterrà i suoi colori interni (blu/ciano) se definiti nel componente ContactForm */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-zinc-900 text-center bg-black">
        <p className="text-zinc-600 text-xs uppercase tracking-widest">&copy; {new Date().getFullYear()} Red Web Studio. Engineered for Performance.</p>
      </footer>
    </main>
  );
}
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Layers, Database, Cpu, Zap, Code2, LayoutGrid, Terminal, Smartphone, Globe, Server } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full flex flex-col items-center justify-end pb-16 md:pb-32 overflow-hidden">

        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 bg-black flex justify-center overflow-hidden">
            <div className="relative h-full w-full md:w-auto">
                <img 
                    src="/Redrit.webp" 
                    alt="Background" 
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    /* 
                       FIX LUMINOSITÀ: 
                       - Mobile: opacity-90 (quasi piena luce)
                       - Desktop: opacity-80 (leggermente più scura per contrasto testo)
                    */
                    className="h-full w-full md:w-auto object-cover object-[50%_20%] md:object-top opacity-90 md:opacity-80" 
                    style={{ 
                        /* Maschera leggermente meno aggressiva su mobile per far vedere meglio lo sfondo */
                        maskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 98%)'
                    }}
                />
            </div>
            {/* Sfumatura in basso ridotta su mobile per non coprire troppo l'immagine */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[500px] bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* 2. CONTENT */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          
          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4 leading-[0.9] drop-shadow-2xl">
            RED WEB<br />
            STUDIO
          </h1>
         
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 md:mt-8 opacity-90">
             <div className="h-[2px] w-8 md:w-16 bg-red-600"></div>
             <p className="text-zinc-300 font-bold tracking-[0.1em] md:tracking-[0.2em] text-[11px] md:text-sm uppercase whitespace-nowrap">
                Full Stack Developer & Funnel Architect
             </p>
             <div className="h-[2px] w-8 md:w-16 bg-red-600"></div>
          </div>      
          
          <p className="text-zinc-400 md:text-zinc-500 text-xs md:text-sm max-w-[300px] md:max-w-lg mx-auto mt-4 md:mt-6 leading-relaxed font-light drop-shadow-md">
             Progetto ecosistemi digitali che non si limitano a convertire, ma massimizzano il valore di ogni singolo lead grazie a tracciamenti e flussi automatizzati..
          </p>
        </div>
      </section>
      
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-12 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
          
          {/* LEFT: CARD */}
          <div className="lg:col-span-5 relative">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="relative bg-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                    <Zap className="w-24 h-24 md:w-32 md:h-32 text-red-600" />
                </div>
                
                <div className="mb-8 md:mb-10 relative z-10">
                    <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-4 text-red-600 border border-red-600/20">
                        <Zap className="w-6 h-6" />
                    </div>
                    <Reveal delay={0.2}>
                        <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">7+</h3>
                        <p className="text-base md:text-lg text-zinc-400 font-medium">Anni di esperienza</p>
                    </Reveal>
                    <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest mt-1">Lanci High-Ticket</p>
                </div>

                <div className="space-y-4 pt-6 md:pt-8 border-t border-zinc-900">
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
            <Reveal delay={0.4}>
                <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Chi sono</h6>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  IL PUNTO D'INCONTRO TRA  <br /> CODICE E <span className="text-red-600">MARKETING.</span>
                </h2>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                  Padroneggio gli stack rapidi <strong>(ClickFunnels, GoHighLevel, WordPress) </strong> per garantirti tempi di go-to-market immediati, 
                  ma intervengo con il Codice Custom <strong>(JS, API, CSS)</strong> lì dove i tool si fermano.
                </p>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10">
                Che si tratti di un lancio su ClickFunnels o di una Web App su misura, il risultato è lo stesso: un ecosistema che converte, <strong> traccia 
                i dati con precisione chirurgica e automatizza i flussi di lavoro</strong>, senza compromessi tecnici.
                </p>
                
                <button className="w-full md:w-auto px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                    Scopri il mio Metodo <ArrowRight className="w-4 h-4" />
                </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="py-12 md:py-20 bg-zinc-950 border-y border-zinc-900">
        <Reveal>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-10">
                <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">il mio arsenale tech</p>
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
        </Reveal>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section id="services" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Expertise</h6>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">COMPETENZE TECNICHE & <br /> SPECIALIZZAZIONI</h2>
        </div>

        <div className="space-y-12 md:space-y-24">
            
            {/* SERVICE 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="group p-6 md:p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">01.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Layers className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">FUNNEL ENGINEERING & FRONTEND</h3>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Architetture High-Ticket</strong>: Progettazione integrale del percorso utente per massimizzare AOV (Average Order Value) e LTV, utilizzando sia builder rapidi che codice custom.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Sviluppo Web App (React/Next.js)</strong>: Creazione di interfacce utente ultra-veloci e SEO-friendly per progetti che richiedono performance superiori ai classici CMS.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: React, Next.js, ClickFunnels, GHL, WordPress, Tailwind CSS.
                    </p>
                </div>
                <div className="relative w-full aspect-auto md:aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                    {/* 
                        FIX LUMINOSITÀ SERVICE:
                        - Mobile: opacity-100 (Sempre acceso, niente hover)
                        - Desktop: opacity-80 -> opacity-100 (Effetto hover preservato)
                    */}
                    <img src="/funnel.webp" alt="Funnel" className="w-full h-auto md:h-full md:object-cover transition duration-700 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105" />
                    {/* Sfumatura ridotta su mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                </div>
            </div>

            {/* SERVICE 02 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative w-full aspect-auto md:aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group order-2 lg:order-1">
                     {/* FIX LUMINOSITÀ */}
                    <img src="/funnel3.webp" alt="Tracking" className="w-full h-auto md:h-full md:object-cover transition duration-700 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                </div>
                <div className="group p-6 md:p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500 order-1 lg:order-2">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">02.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Server className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">DATA INTEGRITY & ANALYTICS</h3>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Server-Side Tracking</strong>: Implementazione avanzata di GTM Server-Side e CAPI (Facebook, TikTok) per recuperare i dati persi dai blocchi dei browser e cookie policy.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>UTM Strategy Avanzata</strong>: Standardizzazione dei parametri di tracciamento per sapere esattamente quale ad, email o link ha generato la vendita.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Audit & Debugging</strong>: Analisi profonda di setup esistenti per individuare discrepanze nei dati tra Business Manager e CRM.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: Google Tag Manager (Web & Server), GA4, Clarity, Stape.io.
                    </p>
                </div>
            </div>

            {/* SERVICE 03 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="group p-6 md:p-8 border border-zinc-800 bg-zinc-900/20 rounded-2xl hover:border-red-600/30 transition duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-zinc-600 font-mono text-sm">03.</span>
                        <div className="p-2 bg-black rounded-full border border-zinc-800 text-white group-hover:text-red-600 transition">
                            <Cpu className="w-6 h-6" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">HYPER-AUTOMATION & BACKEND</h3>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>CRM Integration</strong>: Sincronizzazione bidirezionale dei dati tra il funnel e il database contatti (ActiveCampaign, HubSpot, GoHighLevel) per nurturing automatico.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Dashboards & Reporting</strong>: Estrazione dati via API per alimentare dashboard di controllo KPI in tempo reale, eliminando i report manuali su Excel.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6">
                        <strong>Error Handling</strong>: Sistemi di notifica automatica (Slack/Telegram) che avvisano immediatamente se un lead non viene processato correttamente.
                    </p>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 font-mono text-sm border-t border-zinc-800 pt-4">
                        Stack: n8n, Zapier, Make, Google Sheets API, Webhooks, Node.js.
                    </p>
                </div>
                <div className="relative w-full aspect-auto md:aspect-video lg:aspect-auto lg:h-[400px] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 group">
                    {/* FIX LUMINOSITÀ */}
                    <img src="/funnel4.webp" alt="Automation" className="w-full h-auto md:h-full md:object-cover transition duration-700 opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                </div>
            </div>

        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section id="portfolio" className="py-12 md:py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <Reveal>
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                    <div>
                        <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Lavori Selezionati</h6>
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">Progetti</h2>
                    </div>
                    <Link href="/progetti" className="hidden md:flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest border-b border-zinc-800 pb-1 hover:text-red-600 hover:border-red-600 transition-all duration-300">
                        Vedi Tutti i Progetti <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-16 md:gap-y-0">
                
                {/* PROGETTO 1 */}
                <Reveal delay={0.2}>
                    <div className="group cursor-pointer mb-8 md:mb-24">
                        <Link href="/progetti/inglese-divertente">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-4 md:mb-6">
                                {/* 
                                    FIX LUMINOSITÀ PORTFOLIO:
                                    Su mobile l'immagine è full opacity (100%) e senza sfumatura nera aggressiva
                                    Su desktop rimane l'effetto opacity-60 -> 100 in hover
                                */}
                                <img 
                                    src="/inglese.webp" 
                                    alt="Inglese Divertente" 
                                    className="w-full h-full object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-600 transition">Ecosistema Tripwire ad Alta Scalabilità</h3>
                                    <p className="text-zinc-500 mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest">WordPress • CRM Automation • Sales Ops</p>
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

                {/* PROGETTO 2 */}
                <Reveal delay={0.4}>
                    <div className="group cursor-pointer md:mt-32 mb-8 md:mb-24">
                        <Link href="/progetti/digital-shipping-revolution">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-4 md:mb-6">
                                <img 
                                    src="/digital1.webp" 
                                    alt="Digital Shipping" 
                                    className="w-full h-full object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-600 transition">Architettura B2B a Massimizzazione Profonda</h3>
                                    <p className="text-zinc-500 mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest">GoHighLevel • Stripe API • Webhooks</p>
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

                {/* PROGETTO 3 */}
                <Reveal delay={0.2}>
                    <div className="group cursor-pointer mb-8 md:mb-24">
                        <Link href="/progetti/misterbox">
                            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-4 md:mb-6">
                                <img 
                                    src="/mrbox1.webp" 
                                    alt="Misterbox" 
                                    className="w-full h-full object-cover object-[center_35%] opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 md:opacity-60"></div>
                            </div>
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-red-600 transition">Piattaforma Commerce Gamificata & Algoritmica</h3>
                                    <p className="text-zinc-500 mt-2 text-[10px] md:text-xs font-mono uppercase tracking-widest">Next.js 14 • NestJS • Prisma • Docker</p>
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all duration-300 shrink-0">
                                    <ArrowRight className="text-white -rotate-45 group-hover:rotate-0 transition duration-300 w-3 h-3 md:w-4 md:h-4" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </Reveal>

            </div>
            
            {/* Mobile "View All" Button */}
            <div className="mt-4 md:hidden text-center">
                <Link href="/progetti" className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-zinc-800 px-8 py-4 rounded-full">
                    View All Projects <ArrowRight className="w-4 h-4"/>
                </Link>
            </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">SCALIAMO LA TUA INFRASTRUTTURA</h2>
            <p className="text-zinc-400 text-sm md:text-base">Compila il modulo per richiedere un'analisi tecnica del tuo progetto.</p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 p-2 rounded-3xl shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
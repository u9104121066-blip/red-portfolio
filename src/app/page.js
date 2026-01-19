

"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, Layers, Database, Cpu, Zap, Code2, LayoutGrid, Terminal, Smartphone, Globe, Server } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      {/* ================= HERO SECTION (RESPONSIVE FIX) ================= */}
      <section className="relative h-screen w-full flex flex-col items-center justify-end pb-24 md:pb-32 overflow-hidden">

        {/* 1. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 bg-black flex justify-center overflow-hidden">
            
            <div className="relative h-full w-full md:w-auto" 
                 style={{ 
                    /* 
                       Su mobile la maschera è meno aggressiva (5% ai bordi) per non tagliare il viso.
                       Su desktop l'effetto rimane quello che abbiamo deciso prima.
                    */
                    maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                 }}>
                
                <img 
                    src="/red.png" 
                    alt="Background" 
                    /* 
                       RESPONSIVE RULES:
                       - Mobile: w-full (Occupa tutta la larghezza)
                       - Desktop (md): w-auto (Mantiene le proporzioni originali)
                    */
                    className="h-full w-full md:w-auto object-cover object-top opacity-80" 
                />
            </div>

            {/* Sfumatura Basso (Più alta su mobile per garantire leggibilità del testo) */}
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
                <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">You Can Find Me On</p>
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
                    { name: 'Shopify', icon: <Layers className="w-6 h-6"/> },
                ].map((item, i) => (
                    <div key={i} className="group border-r border-b border-zinc-800 p-8 flex flex-col items-center justify-center hover:bg-zinc-900/50 transition duration-500 cursor-default">
                        <div className="mb-4 text-zinc-600 group-hover:text-white transition duration-300">{item.icon}</div>
                        <span className="text-lg font-bold text-zinc-500 group-hover:text-white transition duration-300 font-mono">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* ================= SERVICES SECTION (SPLIT LAYOUT) ================= */}
      {/* Questa è la modifica principale per matchare Julian Tobias: Lista a Sx, Foto a Dx */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Expertise</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-white">COMPETENZE TECNICHE & 

 <br />SPECIALIZZAZIONI </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: TEXT LIST */}
          <div className="space-y-4">
            {/* Service 01 */}
            <div className="group p-8 border border-zinc-900 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 rounded-2xl transition duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-zinc-600 font-mono text-sm">01.</span>
                    <div className="p-2 bg-black rounded-full border border-zinc-800 group-hover:border-red-600 transition">
                         <Layers className="text-zinc-400 group-hover:text-red-600 transition w-5 h-5" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition">FUNNEL ENGINEERING & FRONTEND</h3>
                
<p><strong>Architetture High-Ticket</strong>: Progettazione integrale del percorso utente per massimizzare AOV (Average Order Value) e LTV, utilizzando sia builder rapidi che codice custom.</p>
<p><strong>Sviluppo Web App (React/Next.js)</strong>: Creazione di interfacce utente ultra-veloci e SEO-friendly per progetti che richiedono performance superiori ai classici CMS.</p>
<p><strong>UX/UI Conversion Driven</strong>: Design pulito e psicologicamente orientato alla vendita, ottimizzato per mobile e velocità di caricamento.</p>
<p><strong>Stack: React, Next.js, ClickFunnels, GHL, WordPress, Tailwind CSS.</strong></p>
            </div>

            {/* Service 02 */}
            <div className="group p-8 border border-zinc-900 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 rounded-2xl transition duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-zinc-600 font-mono text-sm">02.</span>
                    <div className="p-2 bg-black rounded-full border border-zinc-800 group-hover:border-red-600 transition">
                        <Server className="text-zinc-400 group-hover:text-red-600 transition w-5 h-5" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition">DATA INTEGRITY & ANALYTICS</h3>
                <p><strong>Server-Side Tracking</strong>: Implementazione avanzata di GTM Server-Side e CAPI (Facebook, TikTok) per recuperare i dati persi dai blocchi dei browser e cookie policy.</p>
                <p><strong>UTM Strategy Avanzata</strong>: Standardizzazione dei parametri di tracciamento per sapere esattamente quale ad, email o link ha generato la vendita.</p>
                <p><strong>Audit & Debugging</strong>: Analisi profonda di setup esistenti per individuare discrepanze nei dati tra Business Manager e CRM.</p>
                <p><strong>Stack: Google Tag Manager (Web & Server), GA4, Clarity, Stape.io.</strong></p>
            </div>

            {/* Service 03 */}
            <div className="group p-8 border border-zinc-900 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 rounded-2xl transition duration-500 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-zinc-600 font-mono text-sm">03.</span>
                    <div className="p-2 bg-black rounded-full border border-zinc-800 group-hover:border-red-600 transition">
                        <Cpu className="text-zinc-400 group-hover:text-red-600 transition w-5 h-5" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-600 transition">HYPER-AUTOMATION & BACKEND</h3>
                <p><strong>Workflow Automation</strong>: Creazione di flussi complessi con n8n o Make per automatizzare onboarding clienti, fatturazione e nurturing.</p>
                <p><strong>CRM Integration</strong>: Sincronizzazione bidirezionale dei dati tra il funnel e il database contatti (ActiveCampaign, GHL, HubSpot).</p>
                <p><strong>Dashboarding</strong>: Estrazione dati via API per alimentare dashboard di controllo KPI in tempo reale per il team vendita.</p>
                <p><strong>tack: n8n, Zapier, Make, Google Sheets API, Webhooks, Node.js</strong></p>
            </div>
          </div>

          {/* RIGHT: IMAGE PORTRAIT */}
          <div className="relative h-full min-h-[600px] w-full bg-zinc-900 rounded-2xl overflow-hidden hidden lg:block border border-zinc-800 group">
             
             {/* QUI ABBIAMO INSERITO L'IMMAGINE */}
             <img 
                src="/rap.png" 
                alt="Service Portrait" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-1000"
             />
             
             {/* Overlay Sfumato */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
             
             {/* Floating Badge sulla foto */}
             <div className="absolute bottom-10 left-8 right-8">
                <div className="p-6 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl">
                    <p className="text-white text-sm italic">"L'infrastruttura è l'asset più importante nel marketing moderno."</p>
                    <div className="mt-4 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                         <span className="text-xs text-zinc-400 uppercase tracking-wider">System Operational</span>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </section>


      {/* ================= PORTFOLIO SECTION (NUOVA) ================= */}
      <section className="py-24 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">Selected Works</h6>
                    <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
                </div>
                <button className="hidden md:flex items-center gap-2 text-sm font-bold text-white border-b border-red-600 pb-1 hover:text-red-500 transition">
                    View All Projects <ArrowRight className="w-4 h-4"/>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project 1 */}
                <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-6">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">[PROJECT THUMBNAIL]</div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition">E-Learning Platform Scale</h3>
                            <p className="text-zinc-500 mt-2 text-sm">Custom Next.js LMS • Stripe Connect</p>
                        </div>
                        <ArrowRight className="text-zinc-600 group-hover:text-red-600 -rotate-45 group-hover:rotate-0 transition duration-300" />
                    </div>
                </div>

                {/* Project 2 (Offset Layout) */}
                <div className="group cursor-pointer md:mt-12">
                    <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 border border-zinc-800 mb-6">
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm">[PROJECT THUMBNAIL]</div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition duration-500"></div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-red-600 transition">High-Ticket Funnel System</h3>
                            <p className="text-zinc-500 mt-2 text-sm">n8n Automation • Server-Side GTM</p>
                        </div>
                        <ArrowRight className="text-zinc-600 group-hover:text-red-600 -rotate-45 group-hover:rotate-0 transition duration-300" />
                    </div>
                </div>
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
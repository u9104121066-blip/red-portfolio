"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { ArrowLeft, Layout, Monitor, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";

const projectsData = [
  {
    slug: "inglese-divertente",
    title: "ECOSISTEMA TRIPWIRE AD ALTA SCALABILITÀ",
    subtitle: "Analisi Tecnica: Scalabilità a 200 lead/giorno con Architettura Ibrida",
    tags: ["Ingegneria dei Funnel", "Automazione CRM", "Analisi Dati"],
    stats: [
        { label: "Lead / Giorno", value: "200+", color: "text-white" },
        { label: "Fatturato", value: "60k", color: "text-red-600" }, // Accorciato per stare in riga
        { label: "ROAS", value: "14x", color: "text-white" }
    ],
    scenario: "Il progetto per 'Inglese Divertente' presentava una sfida tecnica e logistica notevole. L'azienda investiva un budget importante (€600/day) per generare oltre 200 lead giornalieri su traffico freddo. L'obiettivo era alimentare un funnel ibrido complesso: vendita front-end di un Tripwire propedeutico all'upsell telefonico High-Ticket. Con questi volumi, serviva un'architettura capace di reggere il carico e mettere ordine tra marketing e vendite.",
    phases: [
        { num: "01", title: "Acquisizione Ibrida & CRO", desc: "Checkout a 2 Step Custom su WordPress per catturare i dati prima del pagamento. Recupero carrelli al 15%." },
        { num: "02", title: "Routing Intelligente CRM", desc: "Middleware Zapier per smistamento lead in tempo reale su ActiveCampaign in base al comportamento d'acquisto." },
        { num: "03", title: "Sales Intelligence", desc: "Dashboard Google Sheets via API per monitoraggio VPL e ROAS reale incrociando dati Ads e vendite telefoniche." },
        { num: "04", title: "Delivery Automatica", desc: "Integrazione Kajabi/Teachable: accesso ai contenuti in meno di 30 secondi dal pagamento." }
    ],
    results: "L'ecosistema ha gestito picchi massivi senza downtime, generando 60.000€ di fatturato con ROAS 14x e portando ordine totale nel team vendita.",
    imageLp: "/inglese.webp",
    imageDash: "/kpi.png",
    stack: ["WordPress", "FunnelKit", "ActiveCampaign", "Zapier", "Kajabi"]
  },
  {
    slug: "digital-shipping-revolution",
    title: "ARCHITETTURA B2B A MASSIMIZZAZIONE PROFONDA",
    subtitle: "Ingegneria Transazionale: Liquidare i costi Ads con One-Click Upsells",
    tags: ["B2B Strategy", "Deep-Funnel Logic", "Webhook Architecture"],
    stats: [
        { label: "Ad Spend", value: "1k", color: "text-white" },
        { label: "ROAS FE", value: "2.3x", color: "text-red-600" },
        { label: "Core Offer", value: "4k", color: "text-white" }
    ],
    scenario: "Digital Shipping Revolution aveva bisogno di un sistema per acquisire clienti per la loro offerta Core da 4.000€, liquidando i costi pubblicitari (€1.000/day) già nel frontend. La sfida era costruire un funnel 'Self-Liquidating' con molteplici punti di conversione (Order Bump, Upsell 1, Upsell 2) che funzionasse come un orologio svizzero, sincronizzando pagamenti e pipeline in tempo reale.",
    phases: [
        { num: "01", title: "High-Performance GHL Stack", desc: "Personalizzazione CSS totale di GoHighLevel per trasmettere autorità B2B. Implementata Sticky CTA e Pop-up Data Capture (+18% conversion)." },
        { num: "02", title: "Deep-Funnel Logic (Stripe)", desc: "Flusso One-Click Upsell (OTO) da 147€ e 199€. L'utente acquista prodotti aggiuntivi con un solo click senza reinserire i dati della carta." },
        { num: "03", title: "Multi-Webhook Orchestration", desc: "Architettura di webhook incrociati via Zapier. Il sistema 'ascolta' Stripe e sblocca istantaneamente su Kajabi i corsi corrispondenti." },
        { num: "04", title: "Pipeline Injection", desc: "Iniezione automatica del lead nella Pipeline corretta su GHL in base allo spending. Il team commerciale riceve schede clienti arricchite e pre-qualificate." }
    ],
    results: "ROAS Frontend di 2.3: il funnel copre interamente i costi pubblicitari. Zero-Touch Delivery su migliaia di transazioni e pipeline commerciale saturata di lead caldi.",
    imageLp: "/digital1.webp",
    imageDash: "/digital2.webp",
    stack: ["GoHighLevel", "Stripe API", "Zapier", "Kajabi", "Sheets API"]
  },
  {
    slug: "misterbox",
    title: "PIATTAFORMA COMMERCE GAMIFICATA & ALGORITMICA",
    subtitle: "Enterprise Stack: Piattaforma Mystery Box con NestJS & Next.js",
    tags: ["Software Engineering", "Secure RNG", "Headless CMS"],
    stats: [
        { label: "Speed", value: "<1s", color: "text-white" },
        { label: "Security", value: "100%", color: "text-red-600" },
        { label: "Architecture", value: "Modular", color: "text-white" }
    ],
    scenario: "Il cliente richiedeva una piattaforma di 'Mystery Box' ad alto traffico. La sfida non era solo estetica, ma strutturale: garantire la sicurezza delle transazioni (crediti reali), la fluidità delle animazioni (Gamification) e la gestione scalabile dei prodotti. Serviva un'architettura a microservizi capace di gestire la logica di estrazione (RNG) in modo sicuro nel backend, prevenendo qualsiasi tentativo di manomissione.",
    phases: [
        { num: "01", title: "Frontend Reattivo (Next.js 14 + GSAP)", desc: "Sviluppo client-side in TypeScript per massima robustezza. Animazioni della 'Roulette' a 60fps gestite con GSAP. React Query per sincronizzazione saldo e inventory senza refresh." },
        { num: "02", title: "Core Logic & Security (NestJS + Prisma)", desc: "Backend Enterprise in NestJS. Logica RNG (estrazione) protetta lato server. Gestione transazioni ACID con Prisma ORM e PostgreSQL. Auth sicura via JWT/Passport." },
        { num: "03", title: "Content Management (Strapi Headless)", desc: "Implementato Strapi per dare autonomia al cliente: gestione Box, impostazione Drop Rates e inventario prodotti in tempo reale tramite API." },
        { num: "04", title: "Infrastructure & Scalability", desc: "Architettura containerizzata con Docker e deployment su AWS. Storage asset su S3 per garantire caricamenti istantanei della libreria premi." }
    ],
    results: "Tempi di caricamento fulminei grazie all'SSR di Next.js. Architettura modulare pronta per feature future (Marketplace). Zero incidenti di sicurezza o exploit sulle probabilità di vincita.",
    imageLp: "/mrbox1.webp",
    imageDash: "/mrbox3.webp",
    stack: ["Next.js 14", "NestJS", "Prisma", "PostgreSQL", "Strapi", "Docker", "GSAP"]
  }
];

export default function ProjectDetail({ params }) {
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) return <div className="bg-black h-screen text-white flex items-center justify-center font-mono text-xs uppercase tracking-widest">Errore: Progetto non trovato</div>;

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 overflow-x-hidden">
      <Navbar />

      {/* HEADER COMPATTO (Split Layout su Desktop) */}
      {/* Reduced vertical padding: pt-32 pb-8 on desktop */}
      <header className="pt-32 pb-12 md:pt-36 md:pb-12 px-6 border-b border-zinc-900 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            {/* Top Bar: Back Link & Tags */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 md:mb-12">
                <Link href="/progetti" className="inline-flex items-center gap-2 text-zinc-600 hover:text-red-600 transition-all text-[10px] font-bold uppercase tracking-[0.2em]">
                    <ArrowLeft className="w-4 h-4" /> Torna ai Progetti
                </Link>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Main Header Content: 2 Colonne su Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                {/* Colonna SX: Titolo */}
                <div className="md:col-span-8">
                    {/* Text-5xl/6xl invece di 8xl. Molto più pulito. */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-white">
                        {project.title}
                    </h1>
                </div>

                {/* Colonna DX: Statistiche (Allineate a destra su Desktop) */}
                <div className="md:col-span-4 md:text-right">
                    <div className="flex flex-row md:justify-end gap-8 md:gap-12 border-t md:border-t-0 border-zinc-900 pt-8 md:pt-0">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </Reveal>
        </div>
      </header>

      {/* CONTENUTO PRINCIPALE */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* COLONNA TESTO */}
          {/* Reduced spacing: space-y-20 instead of 32 */}
          <div className="lg:col-span-7 space-y-16 md:space-y-20">
            
            {/* Scenario */}
            <Reveal>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-red-600"></span> 01. Lo Scenario
                </h3>
                <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed">{project.scenario}</p>
            </Reveal>

            {/* Soluzione */}
            <Reveal>
                <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-10 flex items-center gap-4">
                   <span className="w-8 h-[1px] bg-red-600"></span> 02. La Soluzione
                </h3>
                
                {/* Reduced space between phases */}
                <div className="space-y-10 md:space-y-12 relative">
                  <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-zinc-900"></div>
                  {project.phases.map((phase, i) => (
                    <div key={i} className="relative pl-16 group">
                      <div className="absolute left-0 top-0 w-10 h-10 bg-black border border-zinc-800 rounded-full flex items-center justify-center font-mono text-xs text-zinc-500 group-hover:border-red-600 group-hover:text-red-600 transition duration-500">{phase.num}</div>
                      <h4 className="text-lg md:text-lg font-bold text-white mb-2 uppercase tracking-tight">{phase.title}</h4>
                      <p className="text-zinc-400 leading-relaxed text-base md:text-base font-light">{phase.desc}</p>
                    </div>
                  ))}
                </div>
            </Reveal>

            {/* Risultati Box */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
               <Reveal>
                <h3 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">03. I Risultati</h3>
                <p className="text-white text-lg leading-relaxed relative z-10 font-light italic">"{project.results}"</p>
               </Reveal>
            </div>
          </div>

          {/* COLONNA IMMAGINI (Sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-8">
              
              {/* Immagine 1 */}
              <Reveal delay={0.3}>
                <div className="group">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2"><Layout className="w-3 h-3"/> Layout Funnel</span>
                  </div>
                  <div className="aspect-auto md:aspect-square overflow-hidden border border-zinc-800 bg-zinc-900 rounded-2xl relative">
                    {/* Opacity Fix: 90% on desktop, 100% on mobile */}
                    <img 
                        src={project.imageLp} 
                        alt="Visual" 
                        className="w-full h-auto md:h-full md:object-cover opacity-100 md:opacity-90 md:hover:opacity-100 transition duration-700" 
                    />
                  </div>
                </div>
              </Reveal>

              {/* Immagine 2 */}
              <Reveal delay={0.5}>
                <div className="group">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-mono text-red-600 uppercase font-bold tracking-widest">
                    <span className="flex items-center gap-2"><Monitor className="w-3 h-3"/> Dashboard / Tech</span>
                  </div>
                  <div className="aspect-auto md:aspect-square flex flex-col border border-red-600/20 bg-zinc-950 rounded-2xl overflow-hidden shadow-lg">
                    <div className="h-8 bg-zinc-900 flex items-center px-4 gap-1.5 border-b border-zinc-800 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="flex-1 overflow-hidden relative">
                         {/* Opacity Fix */}
                        <img 
                            src={project.imageDash} 
                            alt="Technical" 
                            className="w-full h-auto md:h-full md:object-cover opacity-100 md:opacity-90" 
                        />
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Stack Tecnologico Compact */}
              <div className="p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 font-bold">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                       {project.stack.map((s, i) => (
                         <span key={i} className="flex items-center gap-2 text-[10px] font-mono text-zinc-400 bg-black border border-zinc-800 px-2 py-1.5 rounded">
                           <Zap className="w-3 h-3 text-red-600" /> {s}
                         </span>
                       ))}
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE COMPATTA */}
      <section className="py-20 px-6 border-t border-zinc-900 bg-black text-center relative overflow-hidden">
        <Reveal>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">Pronto a Scalare?</h2>
            <Link href="/#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-red-600 text-white font-bold rounded-full uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 group">
                Inizia il Protocollo <Zap className="w-4 h-4 fill-current group-hover:animate-bounce" />
            </Link>
        </Reveal>
      </section>
    </main>
  );
}
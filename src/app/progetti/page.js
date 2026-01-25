"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { ArrowRight, MoveUpRight } from "lucide-react";

export default function Progetti() {
  
  const projects = [
    {
        id: 1,
        title: "ECOSISTEMA TRIPWIRE AD ALTA SCALABILITÀ",
        category: "Funnel Engineering",
        tech: "WordPress, FunnelKit, ActiveCampaign, Zapier",
        description: "Sales Intelligence che converte il volume in precisione. Un'architettura che segmenta i flussi comportamentali in tempo reale, alimentando il reparto commerciale con metriche predittive per massimizzare la chiusura dei contratti.",
        image: "/inglese.webp", 
        link: "/progetti/inglese-divertente" 
    },
    {
        id: 2,
        title: "ARCHITETTURA B2B A MASSIMIZZAZIONE PROFONDA",
        category: "B2B Automation",
        tech: "GoHighLevel, Stripe API, Zapier, Kajabi",
        description: "Revenue Engineering per abbattere il CAC. Un sistema 'Deep-Funnel' dove pagamenti multipli e webhook complessi si sincronizzano invisibilmente, trasformando l'acquisizione B2B in profitto netto immediato.",
        image: "/digital1.webp", 
        link: "/progetti/digital-shipping-revolution" 
    },
    {
        id: 3,
        title: "PIATTAFORMA COMMERCE GAMIFICATA & ALGORITMICA",
        category: "Software Engineering",
        tech: "Next.js 14, NestJS, Prisma, Docker",
        description: "Un motore algoritmico dove nulla è lasciato al caso. Il cliente controlla la matematica della fortuna dal backend, mentre l'utente vive un'esperienza fluida e ipnotica, protetta da livelli di sicurezza enterprise.",
        image: "/mrbox1.webp", 
        link: "/progetti/misterbox" 
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* HEADER STYLED */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 px-6 border-b border-zinc-900 bg-zinc-950/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="text-center md:text-left">
                <h6 className="text-red-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 md:mb-6">Portfolio Selezionato</h6>
                <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] md:leading-[0.85]">
                    ARCHITETTURE <br />
                    <span className="text-zinc-300">PER LO SCALING.</span>
                </h1>
            </div>
            <div className="hidden md:block mb-2">
                 <div className="w-32 h-[1px] bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
        </div>
      </section>

      {/* GRIGLIA PROGETTI */}
      <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
            {projects.map((project, index) => (
                <div key={index} className="group flex flex-col h-full">
                    
                    {/* IMMAGINE */}
                    <Link href={project.link} className="block relative mb-8 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950">
                        <div className="relative w-full aspect-auto md:aspect-square">
                            <img 
    src={project.image} 
    alt={project.title} 
    // MODIFICA QUI: da md:opacity-70 a md:opacity-90
    className="w-full h-auto md:h-full md:object-cover opacity-100 md:opacity-90 md:group-hover:opacity-100 md:group-hover:scale-105 transition duration-700" 
/>
                            <div className="absolute inset-0 bg-black/20 md:group-hover:bg-transparent transition duration-500"></div>
                            <div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:block">
                                <MoveUpRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>

                    {/* DATI PROGETTO */}
                    <div className="flex flex-col flex-grow">
                        <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
                             <div className="flex items-center gap-3">
                                <span className="font-mono text-red-600 text-xs font-bold">0{index + 1}</span>
                                <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold">{project.category}</span>
                             </div>
                        </div>

                        <h2 className="text-3xl md:text-2xl font-black text-white uppercase leading-tight group-hover:text-red-600 transition duration-300 mb-4 min-h-[3rem]">
                            <Link href={project.link}>{project.title}</Link>
                        </h2>
                        
                        <p className="text-zinc-400 text-base md:text-sm leading-relaxed font-light mb-6">
                            {project.description}
                        </p>
                        
                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.split(', ').map((t, i) => (
                                <span key={i} className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* CTA BUTTON (AGGIUNTO QUI) */}
                        <div className="mt-auto pt-6 border-t border-zinc-900/50">
                            <Link href={project.link} className="group/btn inline-flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:text-red-600 transition-all w-full">
                                Guarda il Caso Studio 
                                <div className="ml-auto w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center group-hover/btn:border-red-600 group-hover/btn:bg-red-600 group-hover/btn:text-white transition-all duration-300">
                                    <ArrowRight className="w-3 h-3 group-hover/btn:-rotate-45 transition-transform duration-300" />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 border-t border-zinc-900 text-center bg-zinc-950/20">
        <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tighter">Hai un progetto simile?</h2>
            <Link href="/#contact">
                <button className="px-10 py-4 bg-white text-black font-bold rounded-full uppercase text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-300">
                    Inizia il Protocollo
                </button>
            </Link>
        </div>
      </section>
    </main>
  );
}
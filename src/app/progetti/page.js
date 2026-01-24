"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { ArrowRight, Code2 } from "lucide-react";
export default function Progetti() {
  
  const projects = [
    {
        id: 1,
        title: "ECOSISTEMA TRIPWIRE AD ALTA SCALABILITÀ",
        category: "Funnel Engineering / Sales Ops",
        tech: "WordPress, FunnelKit, ActiveCampaign, Zapier",
        description: "Sales Intelligence che converte il volume in precisione. Un'architettura che segmenta i flussi comportamentali in tempo reale, alimentando il reparto commerciale con metriche predittive per massimizzare la chiusura dei contratti.",
        image: "/inglese.webp", 
        link: "/progetti/inglese-divertente" 
    },
    {
        id: 2,
        title: "ARCHITETTURA B2B A MASSIMIZZAZIONE PROFONDA",
        category: "B2B Strategy / Automation",
        tech: "GoHighLevel, Stripe API, Zapier, Kajabi",
        description: "Revenue Engineering per abbattere il CAC. Un sistema 'Deep-Funnel' dove pagamenti multipli e webhook complessi si sincronizzano invisibilmente, trasformando l'acquisizione B2B in profitto netto immediato.",
        image: "/digital1.png", 
        link: "/progetti/digital-shipping-revolution" 
    },
    {
        id: 3,
        title: "PIATTAFORMA COMMERCE GAMIFICATA & ALGORITMICA",
        category: "Software Engineering / Full-Stack",
        tech: "Next.js 14, NestJS, Prisma, PostgreSQL, Docker",
        description: "Un motore algoritmico dove nulla è lasciato al caso. Il cliente controlla la matematica della fortuna dal backend, mentre l'utente vive un'esperienza fluida e ipnotica, protetta da livelli di sicurezza enterprise.",
        image: "/mrbox1.png", 
        link: "/progetti/misterbox" 
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* HEADER */}
      <section className="pt-48 pb-24 px-6 border-b border-zinc-900 bg-zinc-950/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
            <h6 className="text-red-600 font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Portfolio Selezionato</h6>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
                ARCHITETTURE <br />
                <span className="text-zinc-500">PER LO SCALING.</span>
            </h1>
        </div>
      </section>

      {/* LISTA PROGETTI */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-32">
            {projects.map((project, index) => (
                <div key={index} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-zinc-900 pb-32 last:border-0">
                    <Link href={project.link} className="lg:col-span-7 relative aspect-square md:aspect-video lg:aspect-square overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950 group-hover:border-red-600/30 transition-all duration-700 block">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </Link>
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-4">
                             <span className="font-mono text-red-600 text-sm font-bold">0{index + 1} //</span>
                             <span className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">{project.category}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-red-600 transition duration-300">
                            <Link href={project.link}>{project.title}</Link>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed font-light">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.split(', ').map((t, i) => (
                                <span key={i} className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 bg-zinc-950 p-2 border border-zinc-900 rounded-md">
                                    <Code2 className="w-3 h-3 text-red-600" /> {t}
                                </span>
                            ))}
                        </div>
                        <div className="pt-6 border-t border-zinc-900">
                            <Link href={project.link} className="group/btn inline-flex items-center gap-4 text-white font-bold uppercase text-xs tracking-[0.3em] hover:text-red-600 transition-all">
                                Guarda il Caso Studio 
                                <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover/btn:border-red-600 group-hover/btn:translate-x-2 transition-all duration-300"><ArrowRight className="w-4 h-4" /></div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-32 border-t border-zinc-900 text-center relative overflow-hidden bg-zinc-950/20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 blur-[100px] rounded-full"></div>
        <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">Hai un progetto simile <br /> in mente?</h2>
            <Link href="/#contact">
                <button className="px-12 py-5 bg-white text-black font-bold rounded-full uppercase text-xs tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all duration-500">
                    Inizia il Protocollo
                </button>
            </Link>
        </div>
      </section>
    </main>
  );
}
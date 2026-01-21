"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";

export default function Progetti() {
  
  // Questo array simula il tuo database di progetti. 
  // In futuro potremo aggiungerne quanti ne vuoi qui.
  const projects = [
    {
        id: 1,
        title: "E-Learning Platform Scale",
        category: "EdTech / LMS",
        tech: "Next.js, Stripe Connect, Mux Video",
        description: "Piattaforma proprietaria per corsi online. Migrazione da Teachable per risparmiare il 10% di commissioni e avere controllo totale sui dati utente.",
        image: "/red.png", // Usa i tuoi placeholder per ora
        link: "/progetti/e-learning" // Questo sarà il link alla pagina singola
    },
    {
        id: 2,
        title: "High-Ticket Funnel System",
        category: "Marketing Automation",
        tech: "n8n, ActiveCampaign API, Next.js",
        description: "Ecosistema di vendita automatizzato. Sincronizzazione lead in tempo reale tra Meta Ads e CRM con qualifica automatica via AI.",
        image: "/rap.png",
        link: "/progetti/funnel-system"
    },
    {
        id: 3,
        title: "Real Estate Dashboard",
        category: "SaaS / Internal Tool",
        tech: "React, Supabase, Google Maps API",
        description: "Gestionale interno per agenzia immobiliare. Mappa interattiva degli immobili e generazione automatica dei contratti in PDF.",
        image: "/red.png",
        link: "/progetti/real-estate"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* HEADER */}
      <section className="pt-40 pb-20 px-6 border-b border-zinc-900 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
            <h6 className="text-red-600 font-bold uppercase tracking-widest text-xs mb-4">
                Portfolio
            </h6>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
                Costruiamo <br />
                <span className="text-zinc-400">Asset Digitali.</span>
            </h1>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-20">
            
            {projects.map((project, index) => (
                <div key={index} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-zinc-900 pb-20 last:border-0">
                    
                    {/* IMMAGINE (Cliccabile) */}
                    <Link href={project.link} className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 aspect-video group-hover:border-red-600/30 transition duration-500 block">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" 
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
                    </Link>

                    {/* TESTO */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                             <span className="font-mono text-red-600 text-sm">0{index + 1}</span>
                             <span className="h-[1px] w-12 bg-zinc-800"></span>
                             <span className="text-zinc-500 text-xs uppercase tracking-widest">{project.category}</span>
                        </div>
                        
                        <h2 className="text-4xl font-bold text-white group-hover:text-red-600 transition duration-300">
                            <Link href={project.link}>{project.title}</Link>
                        </h2>
                        
                        <p className="text-zinc-400 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 w-fit">
                            <Code2 className="w-4 h-4" /> {project.tech}
                        </div>

                        <div className="pt-4">
                            <Link href={project.link} className="inline-flex items-center gap-2 text-white font-bold border-b border-red-600 pb-1 hover:text-red-500 transition">
                                Guarda il Caso studio <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            ))}

        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 border-t border-zinc-900 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Hai un progetto simile in mente?</h2>
        <Link href="/#contact">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition">
                Parliamone
            </button>
        </Link>
      </section>

    </main>
  );
}
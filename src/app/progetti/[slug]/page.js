"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Zap, TrendingUp, Code2, Layers } from "lucide-react";

// === DATABASE PROGETTI ===
// Qui inserisci i dati dei tuoi progetti. 
// L'importante è che lo 'slug' (l'id testuale) corrisponda al link.
const projectsData = [
  {
    slug: "e-learning", // Corrisponde a /progetti/e-learning
    title: "E-Learning Platform Scale",
    subtitle: "Migrazione LMS & Automazione",
    client: "Academy Finanziaria",
    stack: ["Next.js", "Stripe", "Mux Video", "n8n"],
    coverImage: "/red.png", // La foto grande in alto
    stats: [
        { label: "Risparmio Commissioni", value: "10%" },
        { label: "Velocità Caricamento", value: "0.4s" },
        { label: "Nuovi Studenti", value: "+1.2k" }
    ],
    challenge: "Il cliente utilizzava Teachable ma perdeva il 10% su ogni vendita e non aveva controllo sui dati degli studenti. La piattaforma era lenta e non permetteva upsell personalizzati.",
    solution: "Abbiamo costruito una piattaforma proprietaria su Next.js. I video sono ospitati su Mux per streaming istantaneo. Il checkout è gestito via Stripe API, eliminando le fee della piattaforma terza.",
    gallery: ["/rap.png", "/red.png"] // Le foto del progetto
  },
  {
    slug: "funnel-system",
    title: "High-Ticket Funnel System",
    subtitle: "Ecosistema di Vendita",
    client: "Consulting Firm",
    stack: ["ClickFunnels 2.0", "ActiveCampaign", "Zapier"],
    coverImage: "/rap.png",
    stats: [
        { label: "ROAS", value: "4.5x" },
        { label: "Lead Qualificati", value: "+40%" },
        { label: "Tasso Apertura Email", value: "65%" }
    ],
    challenge: "I lead arrivavano disorganizzati da Facebook Ads. Il team vendita perdeva tempo a chiamare contatti freddi o non qualificati.",
    solution: "Implementazione di un quiz di pre-qualifica. Sincronizzazione in tempo reale con il CRM. Solo i lead con budget alto vengono inviati al calendario dei venditori.",
    gallery: ["/red.png", "/rap.png"]
  }
];

export default function ProjectDetail({ params }) {
  // 1. Troviamo il progetto giusto in base all'URL (slug)
  const project = projectsData.find(p => p.slug === params.slug);

  // Se il progetto non esiste (utente ha scritto un link a caso)
  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <p className="mb-8">Progetto non trovato.</p>
        <Link href="/progetti" className="underline">Torna ai progetti</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      {/* ================= HERO DEL PROGETTO ================= */}
      <section className="relative pt-40 pb-20 px-6 border-b border-zinc-900 overflow-hidden">
        {/* Sfondo sfocato decorativo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
            <Link href="/progetti" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-8 transition text-sm uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4" /> Torna al Portfolio
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                <div>
                    <span className="text-red-600 font-bold uppercase tracking-widest text-xs mb-2 block">{project.subtitle}</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 mt-6">
                        {project.stack.map((tech, i) => (
                            <span key={i} className="px-3 py-1 border border-zinc-800 rounded-full text-xs font-mono text-zinc-400 bg-zinc-900/50">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-zinc-800 pt-8 lg:border-t-0 lg:pt-0">
                    {project.stats.map((stat, i) => (
                        <div key={i}>
                            <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* ================= COVER IMAGE ================= */}
      <section className="w-full h-[50vh] md:h-[70vh] relative bg-zinc-900">
         <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover opacity-90" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </section>

      {/* ================= THE CASE STUDY ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Challenge */}
            <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-600/10 rounded-lg text-red-600"><TrendingUp className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold text-white">The Challenge</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg">
                    {project.challenge}
                </p>
            </div>

            {/* Right: Solution */}
            <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Zap className="w-6 h-6"/></div>
                    <h3 className="text-2xl font-bold text-white">The Technical Solution</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-lg border-l-2 border-zinc-800 pl-6">
                    {project.solution}
                </p>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zinc-500" />
                        <span className="text-sm text-zinc-300">Architettura Scalabile</span>
                     </div>
                     <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-zinc-500" />
                        <span className="text-sm text-zinc-300">Ottimizzazione Mobile</span>
                     </div>
                </div>
            </div>

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
         <h3 className="text-center text-zinc-500 text-xs uppercase tracking-[0.3em] mb-12">Project Gallery</h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video group">
                    <img src={img} alt="Gallery" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                </div>
            ))}
         </div>
      </section>

    </main>
  );
}
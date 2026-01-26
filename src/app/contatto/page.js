"use client";
import React from 'react';
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export default function Contatto() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-red-600 overflow-x-hidden">
      <Navbar />
      {/* ================= HEADER CONTATTO ================= */}
      <section className="pt-48 pb-16 px-6 border-b border-zinc-900 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto text-center">
            <Reveal>
                <p6 className="text-red-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Contatto</p6>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                    Inizia il <span className="text-zinc-400">Protocollo.</span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto font-light mb-10">
                    Compila il modulo qui sotto. Analizzeremo la tua infrastruttura attuale e ti risponderemo entro 24 ore lavorative.
                </p>

                {/* ANIMAZIONE FRECCE (Solo Mobile) */}
                <div className="flex flex-col items-center gap-3 md:hidden">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.3em] animate-pulse">
                        Compila qui!
                    </span>
                    <div className="relative flex flex-col items-center">
                        {/* Doppia freccia che pulsa verso il basso */}
                        <ChevronDown className="w-5 h-5 text-red-600 animate-bounce" />
                        <ChevronDown className="w-5 h-5 text-red-600/30 -mt-3 animate-bounce delay-150" />
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* INFO DI CONTATTO LATERALI */}
            <div className="lg:col-span-4 space-y-12">
                <Reveal delay={0.2}>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6">Canali Diretti</h4>
                            <div className="space-y-4">
                                <a href="mailto:info@redwebstudio.it" className="flex items-center gap-4 text-zinc-400 hover:text-red-600 transition group">
                                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-500 group-hover:border-red-600 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-mono tracking-tighter">info@redwebstudio.it</span>
                                </a>
                                <a href="tel:+393515557715" className="flex items-center gap-4 text-zinc-400 hover:text-red-600 transition group">
                                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-400 group-hover:border-red-600 transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-mono tracking-tighter">+39 351 555 7715</span>
                                </a>
                            </div>
                        </div>

                        <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-3xl relative overflow-hidden group">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-3xl rounded-full group-hover:bg-red-600/20 transition-all duration-700"></div>
                             <h4 className="text-white font-bold text-sm mb-3 relative z-10">Audit Tecnico</h4>
                             <p className="text-xs text-zinc-400 leading-relaxed relative z-10 font-light italic">
                                "Ogni richiesta viene analizzata personalmente per valutare la fattibilità dello scaling e l'integrità dei flussi dati."
                             </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* IL TUO CONTACT FORM (USATO COME COMPONENTE) */}
            <div className="lg:col-span-8">
                <Reveal delay={0.4}>
                    <ContactForm />
                </Reveal>
            </div>

        </div>
      </section>
    </main>
  );
}
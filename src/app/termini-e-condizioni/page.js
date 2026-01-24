"use client";
import React from 'react';
import Navbar from "@/components/Navbar";

export default function Terms() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-red-600">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12 text-zinc-200">
            Termini e <span className="text-red-600">Condizioni</span>
        </h1>
        
        <div className="space-y-10 text-sm md:text-base leading-relaxed text-zinc-400">
            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Introduzione</h2>
                <p>I presenti Termini e Condizioni regolano l'uso del sito web <strong>redwebstudio.it</strong>. Utilizzando questo sito, accetti integralmente questi termini. Se non sei d'accordo con parte di essi, non dovresti utilizzare il sito.</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Proprietà Intellettuale</h2>
                <p>Radouane Chefaoui / Red Web Studio detengono i diritti di proprietà intellettuale per tutto il materiale su questo sito (testi, design, codice). I progetti nel Portfolio sono mostrati a scopo dimostrativo. È vietata la riproduzione del materiale senza esplicito consenso scritto.</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Limitazioni di Responsabilità</h2>
                <p>Il contenuto è fornito "così com'è". Red Web Studio non garantisce che il sito sia sempre disponibile o privo di errori. Non saremo responsabili per danni diretti o indiretti derivanti dall'uso di questo sito.</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Foro Competente</h2>
                <p>I presenti Termini sono regolati dalla legge italiana. Qualsiasi controversia relativa all'esecuzione dei presenti termini sarà devoluta alla competenza esclusiva del <strong>Foro di Cosenza</strong>.</p>
            </section>
        </div>
      </div>
    </main>
  );
}
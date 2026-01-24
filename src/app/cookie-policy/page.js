"use client";
import React from 'react';
import Navbar from "@/components/Navbar";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-red-600">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">
            Cookie <span className="text-red-600">Policy</span>
        </h1>
        
        <div className="space-y-10 text-sm md:text-base leading-relaxed">
            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Cosa sono i Cookie</h2>
                <p>I cookie sono piccoli file di testo che i siti visitati inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Tipologie Utilizzate</h2>
                <div className="space-y-6 text-zinc-400">
                    <div>
                        <strong className="text-zinc-200">1. Cookie Tecnici (Necessari):</strong>
                        <p>Permettono il corretto funzionamento del Sito. Senza questi cookie, alcune porzioni del sito potrebbero non funzionare correttamente. Non richiedono consenso.</p>
                    </div>
                    <div>
                        <strong className="text-zinc-200">2. Cookie Analitici (Statistica):</strong>
                        <p>Raccolgono informazioni sull'uso del sito in forma anonima o aggregata (es. GA4) per migliorare i contenuti.</p>
                    </div>
                    <div>
                        <strong className="text-zinc-200">3. Cookie di Profilazione e Marketing:</strong>
                        <p>Utilizzati per tracciare la navigazione e creare profili per inviare messaggi pubblicitari in linea con le tue preferenze (es. Meta Pixel, CAPI).</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Tools di terze parti</h2>
                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                    <li>Google Analytics 4 (Google Ireland Limited)</li>
                    <li>Meta Pixel & CAPI (Meta Platforms Ireland Limited)</li>
                    <li>Microsoft Clarity (Analisi UX)</li>
                </ul>
            </section>
        </div>
      </div>
    </main>
  );
}
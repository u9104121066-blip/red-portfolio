"use client";
import React from 'react';
import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-red-600">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-12">
            Privacy <span className="text-red-600">Policy</span>
        </h1>
        
        <div className="space-y-10 text-sm md:text-base leading-relaxed">
            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Titolare del Trattamento</h2>
                <p>I dati personali raccolti attraverso questo sito web sono trattati da:<br />
                <strong>Red Web Studio di Radouane Chefaoui</strong><br />
                Sede: Rende (CS), Italia<br />
                P.IVA: 03902180789<br />
                Email di contatto: info@redwebstudio.it</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Tipologie di Dati Raccolti</h2>
                <p>Fra i Dati Personali raccolti da questo sito, in modo autonomo o tramite terze parti, ci sono:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-zinc-400">
                    <li><strong>Dati di Contatto:</strong> Nome, Cognome, Numero di Telefono, Email (forniti volontariamente tramite moduli di contatto).</li>
                    <li><strong>Dati di Utilizzo e Tracciamento:</strong> Indirizzo IP, tipo di browser, pagine visitate, dati raccolti tramite Cookie e tecnologie di tracciamento (Pixel di Meta, Google Analytics 4, Clarity).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Finalità del Trattamento</h2>
                <p>I Dati dell’Utente sono raccolti per consentire al Titolare di fornire i propri Servizi, così come per le seguenti finalità:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-zinc-400">
                    <li>Contattare l'Utente: Risposta a richieste di informazioni o call conoscitive.</li>
                    <li>Statistica e Analisi: Monitoraggio del traffico e del comportamento utente.</li>
                    <li>Remarketing e Behavioral Targeting: Ottimizzazione delle campagne pubblicitarie.</li>
                    <li>Gestione Database Utenti: Organizzazione dei lead tramite CRM (es. ActiveCampaign, GoHighLevel).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Modalità e Luogo</h2>
                <p>Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione o la modifica non autorizzate dei Dati. I dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte siano localizzate.</p>
            </section>

            <section>
                <h2 className="text-white font-bold uppercase tracking-widest mb-4">Diritti dell'Utente</h2>
                <p>Gli Utenti possono esercitare determinati diritti (Artt. 15-22 GDPR): revocare il consenso, accedere ai propri Dati, verificarne la rettificazione o chiederne la cancellazione definitiva. Le richieste vanno indirizzate all'email del Titolare.</p>
            </section>
        </div>
      </div>
    </main>
  );
}
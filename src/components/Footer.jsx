"use client";
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 pt-24 pb-12 relative overflow-hidden font-sans">
      
      {/* Glow Rosso sottilissimo decorativo */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          
          {/* COLONNA 1: IDENTITÀ & MISSION */}
          <div className="space-y-6">
            <div>
                <h3 className="text-white font-black text-xl tracking-tighter uppercase leading-none mb-1">
                    RADOUANE CHEFAOUI
                </h3>
                <p className="text-red-600 text-[10px] font-mono uppercase tracking-[0.3em] font-bold">
                    Full-Stack Developer & Funnel Architect
                </p>
            </div>
            <p className="text-[#CCCCCC] text-sm leading-relaxed max-w-xs italic font-light">
              "Progetto infrastrutture digitali che uniscono la solidità dell'ingegneria software alle performance del direct marketing."
            </p>
          </div>

          {/* COLONNA 2: CONTATTI DIRETTI */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Parliamone</h4>
            <ul className="space-y-5">
                <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:info@redwebstudio.it" className="text-[#CCCCCC] text-sm hover:text-white transition">info@redwebstudio.it</a>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                    <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+393515557715" className="text-[#CCCCCC] text-sm hover:text-white transition">+39 351 555 7715</a>
                </li>
                <li className="flex items-center gap-4 group">
                    <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800 text-zinc-500">
                        <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[#CCCCCC] text-sm">Rende (CS), Italia</span>
                </li>
            </ul>
          </div>

          {/* COLONNA 3: NAVIGAZIONE & SOCIAL */}
          <div className="flex flex-col justify-between">
            <div>
                <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Link Veloci</h4>
                <ul className="grid grid-cols-2 gap-4 text-sm text-[#CCCCCC]">
                    <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
                    <li><Link href="/progetti" className="hover:text-red-600 transition">Portfolio</Link></li>
                    <li><Link href="/#services" className="hover:text-red-600 transition">Metodo</Link></li>
                    <li><Link href="/chi-sono" className="hover:text-red-600 transition">Chi Sono</Link></li>
                </ul>
            </div>
            
            <div className="mt-10">
    <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Social</h4>
    <div className="flex items-center gap-4">
        {/* LINKEDIN - Inserisci il tuo link al posto di # */}
        <a 
            href="https://www.linkedin.com/in/red-web-studio-013459238/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
        >
            <Linkedin className="w-4 h-4" />
        </a>

        {/* INSTAGRAM - Inserisci il tuo link al posto di # */}
        <a 
            href="https://www.instagram.com/redwebstudiomarketing/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-zinc-900/50 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
        >
            <Instagram className="w-4 h-4" />
        </a>
    </div>
</div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-zinc-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-[#666666] text-[11px] font-medium tracking-tight">
                    © {new Date().getFullYear()} Red Web Studio. P.IVA 03902180789
                </p>
                <div className="flex gap-6">
    <Link href="/privacy-policy" className="text-[#666666] text-[11px] hover:text-zinc-400 transition underline underline-offset-4">Privacy Policy</Link>
    <Link href="/cookie-policy" className="text-[#666666] text-[11px] hover:text-zinc-400 transition underline underline-offset-4">Cookie Policy</Link>
    <Link href="/termini-e-condizioni" className="text-[#666666] text-[11px] hover:text-zinc-400 transition underline underline-offset-4">Termini di Servizio</Link>
</div>
            </div>

            {/* Pulsante Torna Su */}
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-[#666666] hover:text-white transition-colors"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Torna su</span>
                <div className="w-8 h-8 rounded-lg border border-zinc-800 flex items-center justify-center group-hover:border-red-600 transition-colors">
                    <ArrowUp className="w-3 h-3" />
                </div>
            </button>
        </div>
      </div>
    </footer>
  );
}
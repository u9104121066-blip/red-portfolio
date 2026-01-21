"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden">
      
      {/* Glow Rosso decorativo in basso a sinistra */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COLONNA 1: BRAND */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
                <span className="text-2xl font-black text-white tracking-tighter uppercase">
                    RED<span className="text-red-600">.</span>
                </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Costruiamo infrastrutture digitali che scalano. <br />
              Performance estreme, Design industriale, Conversioni reali.
            </p>
            <div className="flex items-center gap-4 pt-4">
                {/* Social Icons (Sostituisci href con i tuoi link) */}
                <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-red-600 transition duration-300"><Linkedin className="w-4 h-4"/></a>
                <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-red-600 transition duration-300"><Github className="w-4 h-4"/></a>
                <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-red-600 transition duration-300"><Instagram className="w-4 h-4"/></a>
            </div>
          </div>

          {/* COLONNA 2: NAVIGAZIONE */}
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
                <li><Link href="/chi-sono" className="hover:text-red-600 transition">Chi Sono</Link></li>
                <li><Link href="/progetti" className="hover:text-red-600 transition">Portfolio</Link></li>
                <li><Link href="/#services" className="hover:text-red-600 transition">Expertise</Link></li>
            </ul>
          </div>

          {/* COLONNA 3: LEGAL & INFO */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
                <li><Link href="#" className="hover:text-red-600 transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-red-600 transition">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-red-600 transition">Termini di Servizio</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-mono">System Operational</span>
            </div>

            <p className="text-zinc-600 text-xs">
                &copy; {new Date().getFullYear()} Red Web Studio. All rights reserved.
            </p>

            {/* Scroll To Top Button */}
            <button 
                onClick={scrollToTop}
                className="group p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-red-600 transition duration-300"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-4 h-4 text-zinc-400 group-hover:text-red-600 transition" />
            </button>
        </div>
      </div>
    </footer>
  );
}
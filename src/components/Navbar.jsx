"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Zap, Instagram, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Chi Sono', href: '/chi-sono' },
    { name: 'Servizi', href: '/#services' },
    { name: 'Progetti', href: '/progetti' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <Link href="/" className="relative group z-50" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white">R</div>
                <div className="flex flex-col text-left">
                    <span className="text-xl font-black text-white leading-none tracking-tighter">RED.</span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-mono">Studio</span>
                </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors group ${isActive ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_red]' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA - POWERED EFFECT */}
          <div className="hidden md:block">
            <Link href="/contatto">
                <div className="relative group active:scale-95 transition-all">
                    {/* GLOW ESTERNO POTENZIATO */}
                    <div className="absolute inset-[-8px] bg-red-600/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* BORDER CONTAINER PIÙ LARGO (p-[2px]) */}
                    <div className="relative p-[2px] overflow-hidden rounded-full bg-zinc-800">
                        <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#fff_50%,#ef4444_100%)]" />
                        <button className="relative px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-zinc-100 transition-all flex items-center gap-2">
                            Parliamo Del Progetto <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>
                </div>
            </Link>
          </div>

          <button 
            className="md:hidden relative z-50 text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi Menu" : "Apri Menu"}
          >
            {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div 
        style={{ backgroundColor: '#000000' }}
        className={`fixed inset-0 z-40 flex flex-col pt-32 px-6 pb-10 transition-all duration-500 md:hidden ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col h-full justify-between relative z-10 text-left">
            <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="flex items-center justify-between border-b border-zinc-900 pb-4 group"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="text-3xl font-bold text-zinc-400 group-hover:text-white transition-colors">
                            {link.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-red-600 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                ))}
            </div>

            <div className="mt-auto space-y-8">
                {/* MOBILE CTA - POWERED EFFECT */}
                <Link href="/contatto" onClick={() => setIsOpen(false)} className="block w-full">
                    <div className="relative group active:scale-95 transition-all">
                        {/* GLOW ESTERNO MOBILE MASSIVO (Bloom) */}
                        <div className="absolute inset-[-12px] bg-red-600/50 blur-3xl animate-pulse" />
                        
                        {/* BORDER CONTAINER PIÙ LARGO (p-[3px]) */}
                        <div className="relative p-[2.5px] overflow-hidden rounded-xl bg-zinc-800">
                            {/* ROTAZIONE PIÙ VELOCE (2s) PER EFFETTO SCINTILLA */}
                            <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#ef4444_50%,#fff_100%)]" />
                            <button className="relative w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded-[11px] flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(220,38,38,0.6)]">
                                Parliamo Del Progetto <Zap className="w-4 h-4 fill-white" />
                            </button>
                        </div>
                    </div>
                </Link>

                <div className="flex justify-between items-center pt-6 border-t border-zinc-900">
                    <div className="flex gap-4">
                        <a href="#" aria-label="Instagram" className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                            <Instagram className="w-4 h-4"/>
                        </a>
                        <a href="#" aria-label="LinkedIn" className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="w-4 h-4"/>
                        </a>
                        <a href="mailto:info@redwebstudio.it" aria-label="Invia Email" className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                            <Mail className="w-4 h-4"/>
                        </a>
                    </div>
                    <p className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">© 2026 Red Web Studio</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
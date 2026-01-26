"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Zap, Instagram, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Gestione Scroll per cambiare l'aspetto della barra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocca lo scroll del sito quando il menu è aperto
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
      {/* === TOP BAR (Logo + Desktop Menu + Toggle Button) === */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? 'bg-black/80 backdrop-blur-md border-zinc-800 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="relative group z-50" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-white">R</div>
                <div className="flex flex-col">
                    <span className="text-xl font-black text-white leading-none tracking-tighter">RED.</span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-mono">Studio</span>
                </div>
            </div>
          </Link>

                     {/* DESKTOP MENU (Hidden on Mobile) */}
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
                  {/* Laser Underline Effect: Se attivo è larga 100%, altrimenti 0 e cresce in hover */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_red]' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link href="/contatto">
                <button className="px-5 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2">
                    Iniziamo il progetto <ArrowRight className="w-3 h-3" />
                </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON (Visible only on Mobile) */}
          {/* MOBILE TOGGLE BUTTON */}
<button 
  className="md:hidden relative z-50 text-white p-2 focus:outline-none"
  onClick={() => setIsOpen(!isOpen)}
  aria-label={isOpen ? "Chiudi Menu" : "Apri Menu"} // <--- AGGIUNGI QUESTA RIGA
>
  {isOpen ? <X className="w-8 h-8 text-white" /> : <Menu className="w-8 h-8 text-white" />}
</button>
        </div>
      </nav>

      {/* === MOBILE MENU OVERLAY (Fixed Fullscreen) === */}
      {/* 
          z-40: Sta SOTTO la top bar (z-50) così la X di chiusura si vede sempre.
          bg-black: Sfondo nero forzato.
      */}
      <div 
        style={{ backgroundColor: '#000000' }}
        className={`fixed inset-0 z-40 flex flex-col pt-32 px-6 pb-10 transition-all duration-500 md:hidden ${
            isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-red-600/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col h-full justify-between relative z-10">
            
            {/* LINK LIST */}
            <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
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

            {/* BOTTOM ACTIONS */}
            <div className="mt-auto space-y-6">
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        Lancia il Progetto <Zap className="w-4 h-4 fill-white" />
                    </button>
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
                     <p className="text-[10px] text-zinc-400 font-mono uppercase">© 2026 Red Web Studio</p>
                </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
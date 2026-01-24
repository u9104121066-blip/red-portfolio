"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Per sapere in che pagina siamo e illuminare il link giusto

  // Gestione Scroll per effetto vetro
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blocca lo scroll della pagina quando il menu mobile è aperto
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
    { name: 'Servizi', href: '/#services' }, // Ancora nella home
    { name: 'Progetti', href: '/progetti' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-black/70 backdrop-blur-xl border-white/5 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* === LOGO === */}
          <Link href="/" className="relative group z-50">
            <div className="flex items-center gap-1">
                {/* Icona Logo Decorativa */}
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center border border-red-500/30 group-hover:border-red-500 transition-all duration-300">
                    <span className="font-bold text-white text-lg">R</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black text-white tracking-tighter leading-none">
                        RED<span className="text-red-600">.</span>
                    </span>
                    <span className="text-[8px] text-zinc-400 font-mono tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                        Studio
                    </span>
                </div>
            </div>
            {/* Glow effect dietro al logo */}
            <div className="absolute inset-0 bg-red-600/20 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
          </Link>

          {/* === DESKTOP MENU === */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="relative px-5 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Laser Underline Effect */}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-red-600 transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_red]' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          {/* === RIGHT CTA (Pulsante Contatti) === */}
          <div className="hidden md:block">
            <Link href="#contact">
                <button className="group relative px-6 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-widest overflow-hidden rounded-full hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <span className="relative z-10 flex items-center gap-2">
                        Inizia il tuo progetto <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    {/* Text Change on Hover (Diventa bianco su sfondo rosso) */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                         Contatto<Zap className="w-3 h-3 fill-white" />
                    </div>
                </button>
            </Link>
          </div>

          {/* === MOBILE TOGGLE === */}
          <button 
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* === MOBILE FULLSCREEN MENU === */}
      {/* Overlay Nero */}
      <div className={`fixed inset-0 bg-black z-40 transition-all duration-500 md:hidden flex flex-col justify-center items-center ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        
        {/* Sfondo Decorativo */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full"></div>

        <div className="flex flex-col gap-8 text-center relative z-10">
           {/* Link List */}
           {[...navLinks, { name: 'Contatto', href: '#contact' }].map((link, i) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="group text-4xl font-black text-zinc-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-4"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xs font-mono text-red-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">0{i+1}.</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Footer del Menu Mobile */}
        <div className="absolute bottom-10 text-zinc-600 text-xs font-mono uppercase tracking-widest">
            Red Web Studio System
        </div>
      </div>
    </>
  );
};

export default Navbar;
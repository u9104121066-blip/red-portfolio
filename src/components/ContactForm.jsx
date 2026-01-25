"use client";
import React, { useState } from 'react';
import { Send, Loader2, Smartphone, Mail, User, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...formData,
            source: 'Red Web Studio Portfolio',
            date: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Se inviato con successo, mostra card di conferma
  if (status === 'success') {
    return (
      <div className="w-full h-[500px] bg-zinc-950 border border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="relative z-10">
            <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center border border-green-500/30 text-green-500 mb-6 mx-auto shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Ricevuto.</h3>
            <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
                I tuoi dati sono stati crittografati e inviati al nostro sistema. Ti contatteremo a breve.
            </p>
            <button 
                onClick={() => setStatus('idle')}
                className="text-xs text-zinc-500 hover:text-white uppercase tracking-widest border-b border-zinc-800 hover:border-white transition pb-1"
            >
                Invia nuova richiesta
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-3xl relative overflow-hidden group shadow-2xl">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      {/* Header Form */}
      <div className="relative z-10 mb-10 border-b border-zinc-900 pb-6">
        <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Connessione sicura</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white"></h3>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
        
        {/* Griglia Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* NOME */}
            <div className="group/input relative">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold mb-2 block flex items-center gap-2">
                    <User className="w-3 h-3 text-red-600" /> Identity
                </label>
                <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Nome e Cognome"
                    className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-4 rounded-lg focus:outline-none focus:border-red-600 focus:bg-zinc-900 transition-all duration-300 placeholder:text-zinc-500 font-medium"
                />
                {/* Angolo decorativo attivo al focus */}
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-focus-within/input:border-red-600 transition-all duration-300"></div>
            </div>

            {/* EMAIL */}
            <div className="group/input relative">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold mb-2 block flex items-center gap-2">
                    <Mail className="w-3 h-3 text-red-600" /> Digital Address
                </label>
                <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="email@azienda.com"
                    className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-4 rounded-lg focus:outline-none focus:border-red-600 focus:bg-zinc-900 transition-all duration-300 placeholder:text-zinc-500 font-medium"
                />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-focus-within/input:border-red-600 transition-all duration-300"></div>
            </div>

            {/* TELEFONO (NUOVO) */}
            <div className="group/input relative md:col-span-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold mb-2 block flex items-center gap-2">
                    <Smartphone className="w-3 h-3 text-red-600" /> Direct Line
                </label>
                <input 
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel" 
                    placeholder="+39 333 ..."
                    className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-4 rounded-lg focus:outline-none focus:border-red-600 focus:bg-zinc-900 transition-all duration-300 placeholder:text-zinc-500 font-medium"
                />
                 <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-focus-within/input:border-red-600 transition-all duration-300"></div>
            </div>
        </div>

        {/* MESSAGGIO */}
        <div className="group/input relative">
            <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold mb-2 block flex items-center gap-2">
                <MessageSquare className="w-3 h-3 text-red-600" /> Transmission Data
            </label>
            <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Descrivi il progetto..."
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-4 rounded-lg focus:outline-none focus:border-red-500 focus:bg-zinc-900 transition-all duration-300 placeholder:text-zinc-500 font-medium resize-none"
            ></textarea>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-transparent group-focus-within/input:border-red-600 transition-all duration-300"></div>
        </div>

        {/* Status Error Message */}
        {status === 'error' && (
            <div className="flex items-center gap-3 text-red-500 bg-red-500/5 border border-red-500/20 p-4 rounded-lg animate-pulse">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-sm font-medium">Errore di connessione al server. Riprova.</span>
            </div>
        )}

        {/* Submit Button */}
        <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-5 bg-white hover:bg-red-600 text-black hover:text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
            {status === 'loading' ? (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" /> ESTABLISHING LINK...
                </>
            ) : (
                <>
                    Parliamo Del Progetto <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </button>
        
        {/* Footer Tecnico */}
        <div className="flex justify-between items-center mt-6 border-t border-zinc-900 pt-4 opacity-50">
             <span className="text-[9px] text-zinc-300 font-mono uppercase">Encrypted: AES-256</span>
             <span className="text-[9px] text-zinc-300 font-mono uppercase">Server: ONLINE</span>
        </div>

      </form>
    </div>
  );
}
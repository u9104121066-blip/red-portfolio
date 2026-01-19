"use client";
import { useState, useEffect } from 'react';
import { Lock, User, Mail, MessageSquare } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [leads, setLeads] = useState([]);

  // Funzione per controllare la password
  const handleLogin = () => {
    if (password === 'admin123') { // Password super segreta
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      alert('Password errata!');
    }
  };

  // Funzione per scaricare i dati dal backend
  const fetchLeads = async () => {
    const res = await fetch('/api/contact');
    const data = await res.json();
    setLeads(data);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-center max-w-sm w-full">
          <Lock className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-6">Area Riservata</h1>
          <input 
            type="password" 
            placeholder="Inserisci Password"
            className="w-full p-3 bg-slate-950 border border-slate-700 rounded-lg text-white mb-4 focus:border-cyan-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition"
          >
            Accedi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard Lead</h1>
          <button onClick={fetchLeads} className="text-cyan-400 hover:underline">Aggiorna Dati</button>
        </div>

        <div className="grid gap-4">
          {leads.length === 0 ? (
            <p className="text-slate-500">Nessun messaggio ricevuto ancora.</p>
          ) : (
            leads.map((lead) => (
              <div key={lead.id} className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-cyan-500" />
                    <span className="font-bold text-white">{lead.name}</span>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{lead.date}</span>
                </div>
                
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span>{lead.email}</span>
                </div>
                
                <div className="bg-slate-950 p-4 rounded-lg mt-4 text-slate-300 flex gap-3">
                  <MessageSquare className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                  <p>{lead.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
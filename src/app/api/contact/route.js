import { NextResponse } from 'next/server';

// 👇 INCOLLA IL TUO URL QUI DENTRO LE VIRGOLETTE (Cancellando quello che c'è scritto ora)
const N8N_WEBHOOK_URL = "https://automation.redwebstudio.it/webhook/24e3ec87-a2d0-4896-ab28-e1062c23d219"; 

let leads = [];

export async function POST(request) {
  const data = await request.json();
  
  // Prepariamo il pacchetto dati
  const newLead = {
    ...data,
    id: Date.now(),
    date: new Date().toLocaleString()
  };

  // Salviamo in locale
  leads.push(newLead);
  console.log("🔥 Lead salvato in locale.");

  // --- INVIO A N8N (Senza controlli di sicurezza) ---
  console.log("🚀 Provo a inviare a:", N8N_WEBHOOK_URL);

  try {
    const response = await_fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead),
    });

    if (response.ok) {
        console.log("✅ N8N HA RICEVUTO IL DATO!");
    } else {
        console.log("❌ N8N Errore Status:", response.status);
    }
  } catch (error) {
    console.log("❌ ERRORE FETCH:", error.message);
  }
  
  return NextResponse.json({ success: true, message: "Ricevuto!" });
}

export async function GET() {
  return NextResponse.json(leads);
}
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Il tuo Webhook n8n
    const n8nWebhook = 'https://automation.redwebstudio.it/webhook/a5b2d716-8859-4131-b399-77cd27e9b765';

    // Invio Server-to-Server
    const response = await fetch(n8nWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Inviato' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Errore n8n' }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ message: 'Errore Server' }, { status: 500 });
  }
}
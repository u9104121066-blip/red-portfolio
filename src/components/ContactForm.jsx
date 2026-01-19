"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full max-w-md mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-slate-100">Scrivimi</h3>

            {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-64 text-center fade-in">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-8 h-8 text-green-500" />
                    </div>
                    <p className="text-xl font-medium text-green-400">Messaggio inviato!</p>
                    <p className="text-slate-400 mt-2">Ti risponderò al più presto.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-sm text-slate-500 hover:text-slate-300 underline"
                    >
                        Invia un altro messaggio
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="Il tuo nome"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="tuo@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                            Messaggio
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                            placeholder="Di cosa hai bisogno?"
                        />
                    </div>

                    {status === "error" && (
                        <p className="text-red-400 text-sm text-center">
                            Errore, riprova più tardi.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                        {status === "loading" ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Invio in corso...
                            </>
                        ) : (
                            <>
                                Invia Messaggio
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}

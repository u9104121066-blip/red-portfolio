import Link from "next/link";

export default function Navbar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-slate-100 uppercase tracking-wider">
                    Portfolio
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-cyan-400 transition-colors">
                        Home
                    </Link>
                    <button
                        onClick={() => scrollToSection("services")}
                        className="text-sm font-medium hover:text-cyan-400 transition-colors"
                    >
                        Servizi
                    </button>
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="text-sm font-medium hover:text-cyan-400 transition-colors"
                    >
                        Progetti
                    </button>
                </div>

                {/* CTA */}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 text-sm font-bold py-2 px-4 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                >
                    Contattami
                </button>
            </div>
        </nav>
    );
}

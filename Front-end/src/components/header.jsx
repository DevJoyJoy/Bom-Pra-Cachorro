import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = ({ open, setOpen }) => {
    const navigate = useNavigate();
    const [internalOpen, setInternalOpen] = useState(false);
    const menuOpen = open ?? internalOpen;
    const setMenuOpen = setOpen ?? setInternalOpen;
    const links = [["/Pets", "Adote"], ["/Help", "Como ajudar"], ["/WhoWeAre", "Saiba mais"]];

    return (
        <header className="w-full shrink-0 bg-[#ff66c4] text-[#4b2540]">
            <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
            <div className="page-container flex min-h-20 items-center justify-between gap-3 py-3">
                <Link to="/" onClick={() => setMenuOpen(false)} onDoubleClick={() => navigate('/Login')} className="flex min-w-0 items-center gap-2 rounded-lg" aria-label="Bom pra Cachorro — início">
                    <img src="/icon paw.png" className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" alt="" />
                    <span className="arturo text-lg leading-tight sm:text-2xl lg:text-3xl">Bom pra Cachorro</span>
                </Link>
                <nav aria-label="Navegação principal" className="hidden items-center gap-2 md:flex lg:gap-4">
                    {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `rounded-lg px-3 py-3 text-lg hover:bg-white/25 ${isActive ? "bg-white/30 underline underline-offset-4" : ""}`}>{label}</NavLink>)}
                </nav>
                <button type="button" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-current text-2xl md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
                    <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
                </button>
            </div>
            {menuOpen && (
                <nav id="mobile-navigation" aria-label="Navegação móvel" className="page-container flex flex-col gap-1 border-t border-white/40 py-3 md:hidden" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
                    {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-lg hover:bg-white/25">{label}</NavLink>)}
                </nav>
            )}
        </header>
    )
}
import { Link } from "react-router-dom";

export const Footer = () => (
    <footer className="mt-auto w-full shrink-0 bg-[#f3df2a] text-[#4b4b4b]">
        <div className="page-container grid grid-cols-1 items-center gap-6 py-8 text-center sm:grid-cols-[1fr_auto_1fr] sm:text-left">
            <nav aria-label="Links do rodapé" className="flex flex-col items-center sm:items-start">
                <Link className="py-2" to="/">Home</Link>
                <Link className="py-2" to="/Help">Como ajudar</Link>
                <Link className="py-2" to="/WhoWeAre">Perguntas gerais</Link>
            </nav>
            <Link to="/" className="mx-auto rounded-lg p-2" aria-label="Bom pra Cachorro — início">
                <img src="/icon paw.png" alt="" className="h-14 w-14 object-contain sm:h-20 sm:w-20" />
            </Link>
            <div className="flex min-w-0 flex-col items-center break-words sm:items-end sm:text-right">
                <Link className="py-2" to="/Pets">Adotar</Link>
                <Link className="py-2" to="/WhoWeAre">Nossa história</Link>
                <a className="py-2" href="https://www.instagram.com/papelbompracachorro/" target="_blank" rel="noopener noreferrer">@bompracachorro</a>
                <a className="py-2" href="tel:+5541996602943">41 9 9660-2943</a>
            </div>
        </div>
    </footer>
);

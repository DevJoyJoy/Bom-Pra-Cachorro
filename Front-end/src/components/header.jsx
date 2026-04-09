import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return(
        <div className="w-full bg-[#ff66c4] text-white">

            <div className="h-[9vh] flex justify-between items-center px-5 md:px-10">
                <section 
                    className="flex gap-2 items-center cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src="/icon paw.png" className="w-[10vw] md:w-[4vw]" />
                    <h1 className="text-lg md:text-2xl lg:text-3xl font-arturo">
                        Bom pra Cachorro
                    </h1>
                </section>

                {/* MENU DESKTOP */}
                <section className="hidden md:flex gap-6 text-lg">
                    <Link to="/Pets">Adote</Link>
                    <Link to="/Help">Como Ajudar</Link>
                    <Link to="/LearnMore">Saiba Mais</Link>
                </section>

                {/* BOTÃO MOBILE */}
                <div className="md:hidden text-3xl cursor-pointer"onClick={() => setOpen(!open)}
                >
                    ☰
                </div>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-5 text-lg bg-[#ff66c4]">
                    <Link to="/Pets" onClick={() => setOpen(false)}>Adote</Link>
                    <Link to="/Help" onClick={() => setOpen(false)}>Como Ajudar</Link>
                    <Link to="/LearnMore" onClick={() => setOpen(false)}>Saiba Mais</Link>
                </div>
            )}

        </div>
    )
}
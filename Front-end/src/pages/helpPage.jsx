import { useState, useEffect } from "react";
import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Help = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState([])

    const handleToggle = (id) => {
        if (open.includes(id)) {
            setOpen(open.filter(item => item !== id))
        } else {
            setOpen([...open, id])
        }
    }

    return(
        <>
            <Header open={menuOpen} setOpen={setMenuOpen}/>

            <div className="min-h-screen w-full flex flex-col
                md:min-h-[80vh]">
                
                <section className="flex flex-col ml-[5%] p-[1%] mb-[5%]">
                    <h1 className="text-3xl
                        md:text-4xl">
                            Nos ajude a continuar!</h1>
                    <p className="text-xl ml-[2%]
                        md:text-3xl">
                        Para apoiar nossa causa, você pode fazer doações dos seguintes itens:
                    </p>
                </section>

                <section className="flex items-center justify-center w-full flex-col gap-5
                    md:mb-[5%]">

                    {/* ESQUERDA */}
                    <section className="flex flex-col w-[80%] gap-5
                        md:w-[75%]">

                        {/* 1 */}
                        <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 1 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Papel Reciclado</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(1) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(1)}
                                    />
                                </div>

                            </div>

                            {open.includes(1) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/reciclagem.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 2 */}
                         <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 2 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Tampas de Garrafa</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(2) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(2)}
                                    />
                                </div>

                            </div>

                            {open.includes(2) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/tampa_garrafa.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 3 */}
                       <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 1 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Óleo de Cozinha</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(3) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(3)}
                                    />
                                </div>

                            </div>

                            {open.includes(3) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/oleo.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                    </section>

                    {/* DIREITA */}
                    <section className="flex flex-col w-[80%] gap-5
                        md:w-[75%]">

                        {/* 4 */}
                        <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 1 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Lixo Eletronico</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(4) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(4)}
                                    />
                                </div>

                            </div>

                            {open.includes(4) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/lixo.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 5 */}
                          <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 1 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Latas de Alumínio</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(5) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(5)}
                                    />
                                </div>

                            </div>

                            {open.includes(5) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/lata.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 6 */}
                          <section className="w-full">
                            <div className="flex items-center relative">

                                {/* Toggle 1 */}
                                <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between
                                    md:h-[7vh]">
                                    <img 
                                        src="/paw-help-page.png" 
                                        className="w-15 h-15 object-cover rounded-full mt-0.5
                                        md:h-[7vh] md:w-[9vw]"
                                    />
                                    <h1 className="ml-[5%] text-2xl text-white">Rifas</h1>
                                    <img 
                                        src="/arrow.png"
                                        className="w-5 mr-[5%] cursor-pointer transform transition-transform duration-300 hover:rotate-90"
                                        style={{
                                            transform: open.includes(6) ? "rotate(180deg)" : "rotate(0deg)"
                                        }}
                                        onClick={() => handleToggle(6)}
                                    />
                                </div>

                            </div>

                            {open.includes(6) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex flex-col items-center gap-4
                                        md:flex-row">
                                        <img src="/reciclagem.png" className="w-20" />
                                        <h1 className="p-[2%]">
                                            Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! 
                                            Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários
                                            e muito carinho para os animaiszinhos.
                                        </h1>
                                    </div>
                                </div>
                            )}
                        </section>

                    </section>

                </section>

            </div>

            <Footer/>
        </>
    )
}
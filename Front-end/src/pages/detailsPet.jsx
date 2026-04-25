import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { useState, useEffect } from "react";

export const DetailsPetPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="screen" className="w-full min-h-screen flex flex-col items-center">
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            <div id="container" className="w-[85%] md:mt-6 flex flex-1 flex-col md:flex-row md:gap-8">
                {/* Titulo principal / Nome do pet */}
                <div className=" flex flex-col h-max md:hidden ">
                    <div id="name-pet" className="flex flex-row items-center">
                        <img src="../../public/patinha.png" className="h-6 mr-4 mt-3"></img>
                        <h1 className="mt-4 text-2xl">Rogerinho</h1>
                    </div>
                    <div className="my-3 h-0.5 w-full bg-[#9cd7e1]"></div>
                </div>
                {/* Coluna 1 da pagina md / coluna normal em mobile */}
                <div className="order-1 flex items-center flex-col md:w-70 md:mr-5 lg:w-80">
                    <img src="../../public/exampleDog.jpg" className="w-full m-3 rounded-2xl border-5 border-[#0097b2]"></img>
                    <div className="bg-[#daeef5] grid grid-cols-2 grid-rows-2 rounded-2xl my-4 w-full aspect-square  ">
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-birthday.png" className="w-18 h-max"></img>
                            <label>Idade:</label>
                            <label>2 anos</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-regua.png" className="w-18 h-max"></img>
                            <label>Porte:</label>
                            <label>Médio</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-dna.png" className="w-18 h-max"></img>
                            <label>Raça:</label>
                            <label>Indefinida</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-sex.png" className="w-18 h-max"></img>
                            <label>Sexo:</label>
                            <label>Macho</label>
                        </div>
                    </div>
                    <button className="bg-[#0097b2] w-full rounded-xl text-white py-2 ">Quero adotar</button>
                </div>
                <div className="h-max order-2 flex-1">
                    <div className="hidden md:flex ">
                        <div className="h-max flex flex-col flex-1">
                            <div id="name-pet" className="flex flex-row items-center">
                                <img src="../../public/patinha.png" className="h-6 mr-4 mt-3"></img>
                                <h1 className="mt-4 text-2xl">Rogerinho</h1>
                            </div>
                            <div className="my-3 h-0.5 w-full bg-[#9cd7e1]"></div>
                        </div>
                    </div>
                    <div className="w-full bg-[#9cd7e1] h-300"></div>
                </div>




            </div>

            <Footer></Footer>
        </div>
    )
}
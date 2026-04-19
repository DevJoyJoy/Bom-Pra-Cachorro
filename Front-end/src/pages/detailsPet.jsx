import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { useState, useEffect } from "react";

export const DetailsPetPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="screen" className="w-full min-h-screen flex flex-col items-center">
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            <div id="container" className="w-[80%] h-100% flex-1 flex flex-col md:mt-6 md:flex-row">
                {/* Titulo principal / Nome do pet */}
                <div className="order-1 md:order-2 flex flex-col h-max flex-1">
                    <div id="name-pet" className="flex flex-row items-center">
                        <img src="../../public/patinha.png" className="h-6 mr-4 mt-3"></img>
                        <h1 className="mt-4 text-2xl">Rogerinho</h1>
                    </div>
                    <div className="my-3 h-0.5 w-full bg-[#9cd7e1]"></div>
                </div>
                {/* Coluna 1 da pagina md / coluna normal em mobile */}
                <div className="order-2 md:order-1 flex items-center flex-col md:w-80 md:mr-5">
                    <img src="../../public/exampleDog.jpg" className="w-full md:h-80 m-3 rounded-2xl border-5 border-[#0097b2]"></img>
                    <div className="bg-[#9cd7e1] rounded-2xl my-4 flex w-full aspect-square  ">
                        
                    </div>
                    <button className="bg-[#0097b2] w-full rounded-xl text-white py-2 md:w-80">Quero adotar</button>
                </div>

                



            </div>

            <Footer></Footer>
        </div>
    )
}
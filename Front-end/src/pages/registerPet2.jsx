import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const RegisterPet2 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [valor, setValor] = useState("0");

    const text = {
        "0": "Pouca energia",
        "1": "Energia moderada",
        "2": "Muita energia"
    };

    return (
        <div className="flex flex-col bg-white 
        w-full h-max 
        md:h-auto">
        {/* Header */}
        <Header/>
        
        {/* White box */}
        <div className="flex flex-col items-center justify-start p-3
        w-auto h-[90vh] max-h-[95vh] 
        lg:pl-10
        ">
            <h1 className="pt-3 lg:pb-3 font-bold breeSerif
            text-2xl 
            md:text-4xl 
            lg:text-3xl">
                Cadastro de animais
            </h1>
            
            {/* Box for all the inputs */}
            <div className="flex flex-col mt-3 gap-4 
            w-full h-full overflow-y-scroll
            md:items-center 
            lg:flex-row lg:h-[80%] lg:mt-[-5%]">

                <div className="flex flex-col 
                w-[93vw] h-full 
                md:h-[50vh] md:gap-10
                lg:w-[75vw] lg:h-[60%] lg:gap-5 lg:pl-10">
                    <div>
                        <p className="text-[100%] md:text-3xl lg:text-xl">Nível de energia</p>
                        <div className="bg-[#9cd7e1] rounded-2xl flex items-center justify-center flex-col
                        w-full h-[20vh]">
                            <input type="range" min="0" max="2" value={valor} onChange={(e) => setValor(e.target.value)} className="w-[70vw]"/>
                            <br />
                            <p>{text[valor]}</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-[100%] md:text-3xl lg:text-xl">Comportamentos</p>
                        <div className="bg-[#9cd7e1] rounded-2xl flex items-center justify-center flex-col
                        w-full h-[20vh] gap-2">
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Se dá bem com crianças</p>
                            </section>
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Se dá bem com outros cães</p>
                            </section>
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Se dá bem com outros animais</p>
                            </section>
                        </div>
                    </div>

                    <div>
                        <p className="text-[100%] md:text-3xl lg:text-xl">Saúde</p>
                        <div className="bg-[#9cd7e1] rounded-2xl flex items-center justify-center flex-row
                        w-full h-[10vh] gap-2">
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Castrado</p>
                            </section>
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Vacinado</p>
                            </section>
                            <section className="flex flex-row">
                                <input type="checkbox" className="rounded-xl w-[8vw] bg-[#cfcccc]"/>
                                <p className="text-[80%]">Vermifugado</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex justify-center w-full h-[8%] md:h-22 lg:h-[10%] lg:mt-7 lg:w-[50%]">
                    <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 md:w-[70%] lg:w-[70%] md:h-full text-white font-bold md:text-4xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                    Salvar e continuar
                    </button>
                </div>
            </div>
        

        {/* Main modal for after register*/}
        {isModalOpen && (
        <div className="fixed inset-0 z-1 flex items-center justify-center">
            {/* Dark background */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="z-1 flex flex-col items-center p-8 bg-white rounded-2xl
            w-[80%] 
            lg:w-[40%]">
            <h2 className="mb-4 lg:text-2xl font-bold">Sucesso!</h2>
            <p className="mb-6 text-center">
                O pet foi cadastrado com sucesso!
            </p>
            <div className="flex flex-col items-center justify-between w-full">
                <button onClick={() => {setIsModalOpen(false); navigate('/Pets')} } className="px-6 py-2 text-white font-bold rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo
                md:text-2xl 
                lg:text-xl  lg:w-[70%]">
                Voltar aos pets
                </button>
                <br />
                <button onClick={() => {setIsModalOpen(false); navigate('/Register')}} className="px-6 py-2 text-white font-bold rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo
                md:text-2xl 
                lg:text-xl lg:w-[70%]">
                Continuar cadastro
                </button>
            </div>
            </div>
        </div>
        )}
        </div>
    );
};

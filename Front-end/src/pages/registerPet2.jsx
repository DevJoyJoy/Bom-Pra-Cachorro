import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const RegisterPet2 = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col bg-white 
        w-full h-max 
        md:h-auto">
        {/* Header */}
        <Header/>
        
        {/* White box */}
        <div className="flex flex-col items-center justify-start p-3
        w-auto h-[87vh] max-h-[95vh] 
        lg:pl-10
        ">
            <h1 className="pt-3 lg:pb-3 font-bold breeSerif
            text-2xl 
            md:text-4xl 
            lg:text-3xl">
                Cadastro de animais
            </h1>
            
            {/* Box for all the image inputs */}
            <div className="flex flex-col mt-3 gap-4 
            w-full h-full overflow-y-scroll
            md:items-center 
            lg:flex-row lg:h-[80%] lg:mt-[-5%]">

                {/* Box for all the text/animal info inputs */}
                <div className="flex flex-row 
                w-[93vw] h-[40%] 
                md:h-[50vh] md:gap-10
                lg:w-[75vw] lg:h-[60%] lg:gap-5 lg:pl-10">
                    <div className="w-[45%] p-3">
                        <p className="text-[100%] md:text-3xl lg:text-xl">Nome</p>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="rounded-xl w-[110%] lg:w-[90%] md:text-3xl lg:text-xl bg-[#cfcccc]"/>
                        <br />
                        <br />
                        <div className="flex flex-row justify-between lg:w-[90%]">
                            <p className="text-[100%] md:text-3xl lg:text-xl">Animal</p>
                            <button onClick={() => setIsAnimalsOpen(true)} className="text-[100%] md:text-4xl lg:text-xl">+</button>
                        </div>
                        <select type="text" className="rounded-xl w-[110%] md:w-[110%] lg:w-[90%] md:text-3xl lg:text-xl bg-[#cfcccc]"/>
                        <br />
                        <br />
                        <div className="flex flex-row justify-between lg:w-[90%]">
                            <p className="text-[100%] md:text-3xl lg:text-xl">Raça</p>
                            <button onClick={() => setIsBreedsOpen(true)} className="text-[100%] md:text-4xl lg:text-xl">+</button>
                        </div>
                        <select type="text" className="rounded-xl w-[110%] lg:w-[90%] md:text-3xl lg:text-xl bg-[#cfcccc]"/>
                        <br />
                        <br />
                        <p className="text-[100%] md:text-3xl lg:text-xl">Porte</p>
                        <select className="rounded-xl w-[110%] lg:w-[90%] md:text-3xl lg:text-xl bg-[#cfcccc]">
                            <option value="">Grande</option>
                            <option value="">Médio</option>
                            <option value="">Pequeno</option>
                        </select>
                        <br />
                    </div>
                    <div className="w-[55%] p-3">
                        <p className="text-[100%] md:text-3xl lg:text-xl">Idade</p>
                        <div className="flex flex-row lg:gap-11">
                            <p className="text-[100%] md:text-3xl lg:text-xl">Anos</p>
                            <select className="rounded-xl w-[110%] lg:w-[20%] md:text-3xl lg:text-xl bg-[#cfcccc]">
                                {Array.from({ length: 26 }, (_, i) => (
                                    <option key={i} value={i}>
                                    {i}
                                    </option>
                                ))}
                            </select>
                            <p className="text-[100%] md:text-3xl lg:text-xl">Meses</p>
                            <select className="rounded-xl w-[110%] lg:w-[20%] md:text-3xl lg:text-xl bg-[#cfcccc]">
                                {Array.from({ length: 26 }, (_, i) => (
                                    <option key={i} value={i}>
                                    {i}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <br />
                        <div className="flex flex-row">
                            <p className="text-[100%] mr-3 md:text-3xl lg:mr-9.5 lg:text-xl">Sexo:</p>
                            <p className="text-[100%] md:text-3xl lg:text-xl">F</p>
                            <input type="checkbox" onChange={(e) => setSex(e.target.value)} className="rounded-xl w-[30%] bg-[#cfcccc]"/>
                            <p className="text-[100%] md:text-3xl lg:text-xl">M</p>
                            <input type="checkbox" onChange={(e) => setSex(e.target.value)} className=" rounded-xl w-[30%] bg-[#cfcccc]"/>
                        </div>
                        <br />
                        <p className="text-[100%] mr-3 md:text-3xl lg:text-xl">Descrição</p>
                        <textarea type="text" className="rounded-xl w-[105%] lg:w-[90%] h-[33%] lg:h-[63%] md:text-3xl lg:text-xl bg-[#cfcccc]"/>
                    </div>
                </div>
            </div>
                <div className="flex justify-center w-full h-[8%] md:h-22 lg:h-[10%] lg:mt-7 lg:w-[50%]">
                    <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 md:w-[70%] lg:w-[70%] md:h-full text-white font-bold md:text-4xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                    Continuar
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
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-white font-bold rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo
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

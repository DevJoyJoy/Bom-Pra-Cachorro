import { useState } from "react";

export const RegisterPet = () => {
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnimalsOpen, setIsAnimalsOpen] = useState(false);
    const [isBreedsOpen, setIsBreedsOpen] = useState(false);

    {/* Function to turn the input boxes into the input image*/}
    const handleImageChange = (e, setImg) => {
        const file = e.target.files[0];
        if (file) {
        setImg(URL.createObjectURL(file));
        }
    };

    return (
        <div className="bg-[#ffef63] h-[120vh] md:h-[120vh] w-full flex flex-col">
        {/* Header */}
        <div className="bg-[#ff66c4] w-full h-20 flex items-center px-4">
            <img src="../icon paw.png" alt="" className="h-[60%] md:h-[70%]" />
            <h1 className="ml-2 font-bold text-xl md:text-3xl arturo text-white">
            Bom pra cachorro
            </h1>
        </div>
        
        {/* White box */}
        <div className="h-[120%] w-full flex items-center justify-center">
            <div className="bg-white h-[90%] w-[80%] md:h-[80%] md:w-[90%] rounded-4xl flex flex-col items-center justify-start p-5">
            <h1 className="text-2xl md:text-3xl md:pb-3 pt-3 font-bold breeSerif">
                Cadastro de animais
            </h1>

            {/* Box for all the image inputs */}
            <div className="flex flex-col md:flex-row w-full h-full gap-10 mt-5">
                <div className="flex flex-col items-center w-full h-[40%] md:w-[18%] md:h-[65%]">
                {/* Main image input box */}
                <label className="relative overflow-hidden flex flex-col items-center justify-center w-full h-[75%] md:w-full md:h-[70%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                    {image1 ? (
                    <img src={image1} className="w-full h-full object-cover" />
                    ) : (
                    <>
                        <span className="text-[#4b4b4b] text-5xl">+</span>
                        <span className="text-[#4b4b4b] mt-2">Foto do Pet</span>
                    </>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage1)} />
                </label>
                
                {/* Box for the 3 secundary image inputs */}
                <div className="flex flex-row justify-center w-full mt-3 gap-4">

                    {/* Second image input */}
                    <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                    {image2 ? (
                        <img src={image2} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-[#4b4b4b] text-xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage2)} />
                    </label>

                    {/* Third image input */}
                    <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                    {image3 ? (
                        <img src={image3} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-[#4b4b4b] text-xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage3)} />
                    </label>

                    {/* Forth image input */}
                    <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                    {image4 ? (
                        <img src={image4} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-[#4b4b4b] text-xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage4)} />
                    </label>
                </div>
                </div>
                
                {/* Box for all the text/animal info inputs */}
                <div className="flex flex-row h-[40%] md:h-[60%] md:w-[90%]">
                    <div className="w-[50%] p-3">
                        <p className="text-[70%] md:text-xl">Nome</p>
                        <input type="text" className="bg-[#cfcccc] w-[110%] md:w-[90%]"/>
                        <br />
                        <br />
                        <div className="flex flex-row justify-between md:w-[90%]">
                            <p className="text-[70%] md:text-xl">Animal</p>
                            <button onClick={() => setIsAnimalsOpen(true)} className="text-[70%] md:text-xl">+</button>
                        </div>
                        <select type="text" className="bg-[#cfcccc] w-[110%] md:w-[90%]"/>
                        <br />
                        <br />
                        <div className="flex flex-row justify-between md:w-[90%]">
                            <p className="text-[70%] md:text-xl">Raça</p>
                            <button onClick={() => setIsBreedsOpen(true)}className="text-[70%] md:text-xl">+</button>
                        </div>
                        <select type="text" className="bg-[#cfcccc] w-[110%] md:w-[90%]"/>
                        <br />
                        <br />
                        <p className="text-[70%] md:text-xl">Porte</p>
                        <select className="bg-[#cfcccc] w-[110%] md:w-[90%]">
                            <option value="">Grande</option>
                            <option value="">Médio</option>
                            <option value="">Pequeno</option>
                        </select>
                        <br />
                    </div>
                    <div className="w-[50%] p-3 ">
                        <p className="text-[70%] md:text-xl">Data de nascimento</p>
                        <input type="date" className="bg-[#cfcccc] w-full md:w-[90%]"/>
                        <br />
                        <br />
                        <div className="flex flex-row">
                            <p className="text-[70%] md:text-xl">Castrado?</p>
                            <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                        </div>
                        <br />
                        <div className="flex flex-row">
                            <p className="text-[70%] mr-3 md:text-xl md:mr-9.5">Sexo</p>
                            <p className="text-[70%] md:text-xl">F</p>
                            <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                            <p className="text-[70%] ml-2 md:text-xl">M</p>
                            <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                        </div>
                        <br />
                        <p className="text-[70%] mr-3 md:text-xl">Descrição</p>
                        <textarea type="text" className="bg-[#cfcccc] w-[110%] h-[33%] md:w-[90%] md:h-[37%]"/>
                    </div>
                </div>
            </div>
                <div className=" flex justify-center w-full h-[8%] md:h-[12%]">
                    <button onClick={() => setIsModalOpen(true)} className="bg-[#0097b2] w-[80%] h-full md:h-full md:w-[25%] rounded-3xl md:text-xl flex items-center justify-center cursor-pointer text-white hover:bg-[#015b6b] arturo">Salvar e cadastrar</button>
                </div>
            </div>
        </div>

        {/* Main modal for after register*/}
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-1">
            {/* Dark background */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="bg-white p-8 rounded-2xl z-1 w-[80%] md:w-[40%] flex flex-col items-center">
            <h2 className="md:text-2xl font-bold mb-4">Sucesso!</h2>
            <p className="text-center mb-6">
                O pet foi cadastrado com sucesso!
            </p>
            <div className="w-full flex justify-between flex-col">
                <button onClick={() => setIsModalOpen(false)} className="bg-[#0097b2] text-white px-6 py-2 rounded-full cursor-pointer font-bold hover:bg-[#015b6b] arturo">Voltar aos pets</button>
                <br />
                <button onClick={() => setIsModalOpen(false)} className="bg-[#0097b2] text-white px-6 py-2 rounded-full cursor-pointer font-bold hover:bg-[#015b6b] arturo">Continuar cadastro</button>
            </div>
            </div>
        </div>
        )}

        {/* Modal for after new animal register*/}
        {isAnimalsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-1">
            {/* Dark background */}
            <div onClick={() => setIsAnimalsOpen(false)} className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="bg-white p-8 rounded-2xl z-1 w-[80%] md:w-[40%] flex flex-col items-center">
            <p className="text-center mb-6">Digite o novo animal:</p>
            <input type="text" className="bg-[#cfcccc] w-[110%] md:w-[90%]"/>
            <br />
            <button onClick={() => setIsAnimalsOpen(false)} className="bg-[#0097b2] text-white px-6 py-2 rounded-full cursor-pointer font-bold hover:bg-[#015b6b] arturo">Cadastrar animal</button>
            </div>
        </div>
        )}

        {/* Modal for after new breed register*/}
        {isBreedsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-1">
            {/* Dark background */}
            <div onClick={() => setIsBreedsOpen(false)} className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="bg-white p-8 rounded-2xl z-1 w-[80%] md:w-[40%] flex flex-col items-center">
            <p className="text-center mb-6">Selecione o animal:</p>
            <select className="bg-[#cfcccc] w-[110%] md:w-[90%]"></select>
            <p className="text-center mb-6">Digite a nova raça:</p>
            <input type="text" className="bg-[#cfcccc] w-[110%] md:w-[90%]"/>
            <br />
            <button onClick={() => setIsBreedsOpen(false)} className="bg-[#0097b2] text-white px-6 py-2 rounded-full cursor-pointer font-bold hover:bg-[#015b6b] arturo">Cadastrar raça</button>
            </div>
        </div>
        )}
        </div>
    );
};

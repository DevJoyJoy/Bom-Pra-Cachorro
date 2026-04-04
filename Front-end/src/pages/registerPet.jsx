import { useState } from "react";

export const RegisterPet = () => {
const [image1, setImage1] = useState(null);
const [image2, setImage2] = useState(null);
const [image3, setImage3] = useState(null);
const [image4, setImage4] = useState(null);

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
        <h1 className="ml-2 font-bold text-white text-xl md:text-3xl arturo">
        Bom pra cachorro
        </h1>
    </div>
    
    {/* White box */}
    <div className="h-[120%] w-full flex items-center justify-center">
        <div className="bg-white h-[90%] w-[80%] md:h-[80%] md:w-[90%] rounded-4xl flex flex-col items-center justify-start p-5">
        <h1 className="text-2xl md:text-3xl md:pb-3 pt-3 breeSerif">
            Cadastro de animais
        </h1>

        {/* Box for all the inputs */}
        <div className="flex flex-col md:flex-row w-full h-full gap-10 mt-5">
            <div className="flex flex-col items-center w-full h-[40%] md:w-[18%] md:h-[65%]">
            <label className="relative overflow-hidden flex flex-col items-center justify-center w-full h-[75%] md:w-full md:h-[70%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                {image1 ? (
                <img src={image1} className="w-full h-full object-cover" />
                ) : (
                <>
                    <span className="text-[#4b4b4b] text-5xl">+</span>
                    <span className="text-[#4b4b4b] mt-2">Foto do Pet</span>
                </>
                )}
                <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setImage1)}
                />
            </label>

            <div className="flex flex-row justify-center w-full mt-3 gap-4">
                <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                {image2 ? (
                    <img src={image2} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-[#4b4b4b] text-xl">+</span>
                )}
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setImage2)}
                />
                </label>

                <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                {image3 ? (
                    <img src={image3} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-[#4b4b4b] text-xl">+</span>
                )}
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setImage3)}
                />
                </label>

                <label className="relative overflow-hidden flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-15 border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                {image4 ? (
                    <img src={image4} className="w-full h-full object-cover" />
                ) : (
                    <span className="text-[#4b4b4b] text-xl">+</span>
                )}
                <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setImage4)}
                />
                </label>
            </div>
            </div>

            <div className="flex flex-row h-[40%] md:h-[60%] md:w-[80%] ">
                <div className="w-[50%] p-3 ">
                    <p className="text-[70%]">Nome</p>
                    <input type="text" className="bg-[#cfcccc] w-[110%]"/>
                    <br />
                    <br />
                    <div className="flex flex-row justify-between">
                        <p className="text-[70%]">Animal</p>
                        <button className="text-[70%]">+</button>
                    </div>
                    <input type="text" className="bg-[#cfcccc] w-[110%]"/>
                    <br />
                    <br />
                    <div className="flex flex-row justify-between">
                        <p className="text-[70%]">Raça</p>
                        <button className="text-[70%]">+</button>
                    </div>
                    <input type="text" className="bg-[#cfcccc] w-[110%]"/>
                    <br />
                    <br />
                    <p className="text-[70%]">Porte</p>
                    <select className="bg-[#cfcccc] w-[110%] appearence-none border-none outline-none">
                        <option value="">Grande</option>
                        <option value="">Médio</option>
                        <option value="">Pequeno</option>
                    </select>
                    <br />
                </div>
                <div className="w-[50%] p-3 ">
                    <p className="text-[70%]">Data de nascimento</p>
                    <input type="date" className="bg-[#cfcccc] w-full "/>
                    <br />
                    <br />
                    <div className="flex flex-row">
                        <p className="text-[70%]">Castrado?</p>
                        <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                    </div>
                    <br />
                    <div className="flex flex-row">
                        <p className="text-[70%] mr-3">Sexo</p>
                        <p className="text-[70%]">F</p>
                        <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                        <p className="text-[70%] ml-2">M</p>
                        <input type="checkbox" className="bg-[#cfcccc] w-[30%]"/>
                    </div>
                    <br />
                    <p className="text-[70%] mr-3">Descrição</p>
                    <input type="text" className="bg-[#cfcccc] w-[110%] h-[33%]"/>
                </div>
            </div>
            <div className=" flex justify-center w-full h-[8%]">
                <button className="bg-[#0097b2] w-[80%] h-full rounded-3xl cursor-pointer text-white hover:bg-[#015b6b]">Salvar e cadastrar!</button>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

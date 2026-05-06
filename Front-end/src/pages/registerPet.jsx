import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const RegisterPet = () => {
    const navigate = useNavigate();
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    const [isAnimalsOpen, setIsAnimalsOpen] = useState(false);
    const [isBreedsOpen, setIsBreedsOpen] = useState(false);
    //const [name, setName] = useState("");
    // const [animal, setAnimal] = useState("");
    // const [breed, setBreed] = useState("");
    // const [size, setSize] = useState("");
    // const [birthDate, setBirthDate] = useState("");
    // const [isCastrated, setIsCastrated] = useState(false);
    // const [sex, setSex] = useState("");
    // const [description, setDescription] = useState("");

    // const handleRegisterPet = () => {
    //     try {
    //         const uploadImage = async (image, index) => {
    //             if (!image) return null;

    //             const ref = firebase.storage().ref().child(`pets/${uid}/${Date.now()}_${index}`);

    //             await ref.put(image);
    //             return await ref.getDownloadURL();
    //         };

    //         const imageUrls =  Promise.all([
    //             uploadImage(image1, 1),
    //             uploadImage(image2, 2),
    //             uploadImage(image3, 3),
    //             uploadImage(image4, 4),
    //         ]);

    //         firebase.firestore().collection("pets").add({
    //             uid,
    //             name,
    //             animal,
    //             breed,
    //             size,
    //             birthDate,
    //             isCastrated,
    //             sex,
    //             description,
    //             images: imageUrls.filter(Boolean),
    //             createdAt: new Date()
    //         });

    //         setIsModalOpen(true);
    //     } catch (error) {
    //         console.error(error);
    //         alert("Erro ao cadastrar pet");
    //     }
    // }

    {/* Function to turn the input boxes into the input image*/}
    const handleImageChange = (e, setImg) => {
        const file = e.target.files[0];
        if (file) {
        setImg(URL.createObjectURL(file));
        }
    };

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
                <div className="flex flex-col items-center 
                w-full h-[50%]
                md:w-[60%] md:h-[95%] 
                lg:h-[70%] lg:w-[20%] lg:mt-15">
                {/* Main image input box */}
                <label className="relative flex flex-col items-center justify-center overflow-hidden border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer transition-colors hover:bg-[#e7e7e7]
                w-[90%] h-[75%] 
                lg:w-full lg:h-[70%]">
                    {image1 ? (
                        <>
                            <img src={image1} className="w-full h-full object-cover" />
                            <button type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setImage1(null);
                                }}
                                className="absolute top-1 right-1 bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-900 z-10"
                                >
                                X
                            </button>
                        </>
                    ) : (
                    <>
                        <span className="text-5xl text-[#4b4b4b] md:text-7xl">+</span>
                        <span className="mt-2 text-[#4b4b4b] md:text-3xl lg:text-2xl">Foto do Pet</span>
                    </>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage1)} />
                </label>
                
                {/* Box for the 3 secundary image inputs */}
                <div className="flex flex-row justify-center mt-3 gap-12
                w-full 
                lg:gap-7">

                    {/* Second image input */}
                    <label className="relative flex flex-col items-center justify-center overflow-hidden border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer transition-colors hover:bg-[#e7e7e7]
                    w-18 h-18 
                    md:h-full md:w-26 
                    lg:w-30 lg:h-15">
                    {image2 ? (
                        <>
                            <img src={image2} className="w-full h-full object-cover" />
                            <button type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setImage2(null);
                                }}
                                className="absolute top-1 right-1 bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-900 z-10"
                                >
                                X
                            </button>
                        </>
                    ) : (
                        <span className="text-xl text-[#4b4b4b] md:text-5xl lg:text-3xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage2)} />
                    </label>

                    {/* Third image input */}
                    <label className="relative flex flex-col items-center justify-center overflow-hidden border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer transition-colors hover:bg-[#e7e7e7]
                    w-18  h-18 
                    md:h-full md:w-26 
                    lg:w-30 lg:h-15">
                    {image3 ? (
                        <>
                            <img src={image3} className="w-full h-full object-cover" />
                            <button type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setImage3(null);
                                }}
                                className="absolute top-1 right-1 bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-900 z-10"
                                >
                                X
                            </button>
                        </>
                    ) : (
                        <span className="text-xl text-[#4b4b4b] md:text-5xl lg:text-3xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage3)} />
                    </label>

                    {/* Forth image input */}
                    
                    <label className="relative flex flex-col items-center justify-center overflow-hidden border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer transition-colors hover:bg-[#e7e7e7]
                    w-18 h-18 
                    md:h-25 md:w-26 
                    lg:w-30 lg:h-15">
                    {image4 ? (
                        <>
                            <img src={image4} className="w-full h-full object-cover" />
                            <button type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setImage4(null);
                                }}
                                className="absolute top-1 right-1 bg-red-800 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold hover:bg-red-900 z-10"
                                >
                                X
                            </button>
                        </>
                    ) : (
                        <span className="text-xl text-[#4b4b4b] md:text-5xl lg:text-3xl">+</span>
                    )}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, setImage4)} />
                    </label>
                </div>
                </div>

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
                        <p className="hidden lg:block lg:text-xl">Idade</p>
                        <div className="flex flex-col lg:flex-row lg:gap-11">
                            <p className="text-[100%] md:text-3xl lg:text-xl">Anos</p>
                            <select className="rounded-xl w-full lg:w-[20%] md:text-3xl lg:text-xl bg-[#cfcccc]">
                                {Array.from({ length: 26 }, (_, i) => (
                                    <option key={i} value={i}>
                                    {i}
                                    </option>
                                ))}
                            </select>
                            <p className="text-[100%] md:text-3xl lg:text-xl">Meses</p>
                            <select className="rounded-xl w-full lg:w-[20%] md:text-3xl lg:text-xl bg-[#cfcccc]">
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
                        <textarea type="text" className="rounded-xl w-full lg:w-[90%] h-[70%] lg:h-[63%] md:text-3xl lg:text-xl bg-[#cfcccc]"/>
                    </div>
                </div>
            </div>
                <div className="flex justify-center w-full h-[8%] md:h-22 lg:h-[10%] lg:mt-7 lg:w-[50%]">
                    <button onClick={() => navigate('/Register2')} className="px-6 py-2 md:w-[70%] lg:w-[70%] md:h-full text-white font-bold md:text-4xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                    Continuar
                    </button>
                </div>
            </div>
        

        {/* Modal for after new animal register*/}
        {isAnimalsOpen && (
        <div className="fixed inset-0 z-1 flex items-center justify-center">
            {/* Dark background */}
            <div onClick={() => setIsAnimalsOpen(false)} className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="z-1 flex flex-col items-center w-[80%] lg:w-[40%] p-8 bg-white rounded-2xl">
            <p className="mb-6 text-center md:text-2xl">Digite o novo animal:</p>
            <input type="text" className="w-[110%] md:w-[90%] lg:w-[90%] p-[1vh] bg-[#cfcccc] rounded-2xl"/>
            <br />
            <button onClick={() => setIsAnimalsOpen(false)} className="px-6 py-2 text-white font-bold md:text-2xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                Cadastrar animal
            </button>
            </div>
        </div>
        )}

        {/* Modal for after new breed register*/}
        {isBreedsOpen && (
        <div className="fixed inset-0 z-1 flex items-center justify-center">
            {/* Dark background */}
            <div onClick={() => setIsBreedsOpen(false)} className="absolute inset-0 bg-black opacity-60"></div>

            {/* Modal white box */}
            <div className="z-1 flex flex-col items-center w-[80%] lg:w-[40%] p-8 bg-white rounded-2xl">
            <p className="mb-6 text-center md:text-2xl">Selecione o animal:</p>
            <select className="w-[110%] md:w-[90%] lg:w-[90%] p-[1vh] bg-[#cfcccc] rounded-2xl"></select>
            <br />
            <p className="mb-6 text-center md:text-2xl">Digite a nova raça:</p>
            <input type="text" className="w-[110%] md:w-[90%] lg:w-[90%] p-[1vh] bg-[#cfcccc] rounded-2xl"/>
            <br />
            <button onClick={() => setIsBreedsOpen(false)} className="px-6 py-2 text-white font-bold md:text-2xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                Cadastrar raça
            </button>
            </div>
        </div>
        )}
        </div>
    );
};

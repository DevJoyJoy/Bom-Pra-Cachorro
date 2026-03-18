import { useNavigate } from "react-router-dom"

export const RegisterPet = () => {
    const navigate = useNavigate();

    return (
        <div className='bg-[#ffef63] h-[100vh] md:h-[120vh] w-full flex flex-col'>

            {/* Header */}
            <div className='bg-[#ff66c4] w-full h-20 flex items-center px-4'>
                <img src="../public/paw.png" alt="" className="h-[60%] md:h-[70%]" />
                <h1 className="ml-2 font-bold text-white text-xl md:text-3xl">Bom pra cachorro</h1>
            </div>

            {/* Main box for register */}
            <div className="h-[120%] w-full flex items-center justify-center">

                {/* White box for components */}
                <div className="bg-white h-[90%] w-[80%] md:h-[80%] md:w-[90%] rounded-4xl flex flex-col items-center justify-start p-5">
                    <h1 className=" text-2xl md:text-3xl md:pb-3 pt-3">Cadastro de animais</h1>

                    {/* Photo inputs box */}
                    <div className="flex flex-col w-[20%] h-[60%]">

                        {/* Input box */}
                        <label className="flex flex-col items-center justify-center w-[40%] h-[18%] md:w-[70%] md:h-[55%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">

                            <span className="text-[#4b4b4b] text-5xl">+</span>
                            <span className="text-[#4b4b4b] mt-2">Foto do Pet</span>

                            <input type="file" className="hidden" accept="image/*" />
                        </label>
                        <div className="flex flex-row w-full h-[30%] mt-5 gap-[5%]">

                            <label className="flex flex-col items-center justify-center w-[40%] h-[18%] md:w-[20%] md:h-[55%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                            <label className="flex flex-col items-center justify-center w-[40%] h-[18%] md:w-[20%] md:h-[55%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                            <label className="flex flex-col items-center justify-center w-[40%] h-[18%] md:w-[20%] md:h-[55%] border-4 border-dashed border-[#4b4b4b] rounded-2xl cursor-pointer hover:bg-[#e7e7e7] transition-colors">
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

//import { useNavigate } from "react-router-dom"

export const MainPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return(
        <div className='bg-[#fef6d8] h-screen w-full flex flex-col'>
            
            {/* Header */}
            <div className='bg-[#d63e9c] w-full h-[9%] flex items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-[1%] text-white text-4xl">Bom pra cachorro</h1>
            </div>
    
            {/* Primeiro Conteúdo - Quem somos? + Icon cachorro e Gato*/}
            <div className="w-full flex flex-row mt-40">
                {/* Div para o Cartão */}
                <div className="relative w-[50%]">

                    {/* Cartão amarelo */}
                    <div className="bg-[#f1c048] h-[25%] w-[50%] rounded-3xl ml-20 p-[1%] flex items-start justify-start">
                        <img src="../../public/single_paw.png" alt="" className="h-[40%] ml-[5%] mt-[1%]"/>
                        <h1 className="text-4xl ml-[2%]">Quem somos?</h1>
                    </div>

                    {/* Cartão branco */}
                    <div className="absolute bg-white h-[100%] w-[80%] rounded-3xl top-15 ml-20 p-6 flex flex-col justify-around">
                        <h1 className="text-8xl w-[60%]">Bom pra cachorro!</h1>
                        <p className="text-2xl mt-[1%] w-[80%]">
                            Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                        </p>

                        {/* Simula o Layout de um botão */}
                        <div className="">
                            <h1 className="bg-blue-500 text-center w-[30%] rounded-3xl text-lg p-4 font-bold">CONHEÇA MAIS</h1>
                        </div>
                    </div>
                </div>

                {/* Div para a img */}
                <div className="flex">
                    <img src="../../public/img-gatoCachorro.png" alt="" className="h-[130%] w-[170%]"/>
                </div> 
            </div>

        </div>
    )
}


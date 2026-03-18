import { useNavigate } from "react-router-dom"

export const RegisterPet = () => {
    const navigate = useNavigate();

    return(
        <div className='bg-[#ffef63] h-[100vh] md:h-[120vh] w-full flex flex-col'>
            
            {/* Header */}
            <div className='bg-[#ff66c4] w-full h-20 flex items-center px-4'>
                <img src="../public/paw.png" alt="" className="h-[60%] md:h-[70%]" />
                <h1 className="ml-2 font-bold text-white text-xl md:text-3xl">Bom pra cachorro</h1>
            </div>

            {/* Main box for register */}
            <div className="h-[120%] w-full flex items-center justify-center">

                {/* White box for components */}
                <div className="bg-white h-[90%] w-[80%] md:h-[80%] md:w-[90%] rounded-4xl flex flex-row items-center justify-start p-5">
                    
                </div>
            </div>

        </div>
    )
}

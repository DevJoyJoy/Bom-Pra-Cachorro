import { useNavigate } from "react-router-dom"

export const RegisterLogin = () => {
    const navigate = useNavigate();

    return(
        <div className='bg-[#ffef63] h-screen w-full flex flex-col'>
            
            {/* Header */}
            <div className='bg-[#ff66c4] w-full h-20 flex items-center px-4'>
                <img src="../public/paw.png" alt="" className="h-[60%] md:h-[70%]" />
                <h1 className="ml-2 font-bold text-white text-xl md:text-3xl">Bom pra cachorro</h1>
            </div>

            {/* Main box for login */}
            <div className="h-full w-full flex items-center justify-center">

                {/* White box for components */}
                <div className="bg-white h-[55%] md:h-[80%] md:w-[75%] rounded-4xl flex flex-col items-center justify-start p-5">
                    <h1 className=" text-2xl md:text-3xl md:pb-3 pt-5">Cadastro de animais</h1>
                    <h1 className=" text-l md:text-2xl pb-3">Faça login para cadastrar novos animais!</h1>

                    {/* Box for inputs and buttons */}
                    <div className="h-[70%] w-[70%] md:h-[65%] md:w-[25%] flex flex-col items-center justify-start mt-5">
                        <h1 className="text-xl self-start">Usuário:</h1>
                        <input type="text" name="" id="userNameLogin" placeholder=" Digite seu usuário: " className="bg-[#e7e7e7] h-[12%] md:h-[15%] w-full focus:outline-[#0097b2]"/>
                        <h1 className="text-xl self-start mt-5">Senha:</h1>
                        <input type="text" name="" id="userNameLogin" placeholder=" Digite sua senha: " className="bg-[#e7e7e7] h-[12%] md:h-[15%] w-full focus:outline-[#0097b2]"/>
                        <button onClick={() => navigate("/Register")} className="bg-[#0097b2] w-[80%] h-[15%] md:w-[60%] md:h-[18%] text-2xl text-white mt-10 rounded-4xl cursor-pointer">Entrar</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
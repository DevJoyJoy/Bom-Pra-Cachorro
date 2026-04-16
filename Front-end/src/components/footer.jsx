import { useNavigate } from "react-router-dom"

export const Footer = () => {
    const navigate = useNavigate();

    return(
        <>
            <div className="bg-[#f3df2a] w-full h-30 flex items-center justify-between p-5">
                <section className="text-gray text-sm md:text-xl flex flex-col">
                    <button onClick={() => navigate('/')} className="self-start">Home</button>
                    <button onClick={() => navigate('/Help')} className="self-start">Como ajudar</button>
                    <button onClick={() => navigate('/')} className="self-start">Perguntas gerais</button>
                </section> 

                <img src="/icon paw.png" alt="" className="h-10 md:h-20"/>

                <section className="text-gray text-sm md:text-xl flex flex-col items-end text-right">
                    <button onClick={() => navigate('/Pets')} className="cursor-pointer">Adotar</button>
                    <button onClick={() => navigate('/LearnMore')} className="cursor-pointer">Nossa história</button>
                    <button onClick={() => navigate('/Pets')} className="cursor-pointer">@bompracachorro</button>
                    <h1>41 9 9660-2943</h1>
                </section>
            </div>
        </>
    )
}

//import { useNavigate } from "react-router-dom"

export const MainPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return(
        <>
        <div className="h-screen w-full bg-[#ff66c4]">
           <div className="bg-[#ff66c4] h-[8vh] w-full flex justify-between items-center px-4 text-white text-4xl">
                <section className="flex gap-4">
                    <img src="../public/icon paw.png" alt="" className="w-[4vw]"/>
                    <h1>Bom pra Cachorro</h1>
                </section>
                <section className="flex gap-4 text-lg">
                    <a href="">Adote</a>
                    <a href="">Como Ajudar</a>
                    <a href="">Saiba mais</a>
                </section>
            </div>

            <div className="flex flex-col mt-[5%]">
                <div className="flex justify-around">
                    <section className="">
                        <h1 className="text-9xl text-white">Me <br/>Adota</h1>
                        <button className="w-[12vw] bg-white rounded-2xl text-2xl p-[1%] mt-[10%]">Adotar!</button>
                    </section>

                    <div className="h-[75vh] w-[40vw] bg-[#ffef63] rounded-full items-center justify-center">
                        <img src="../public/Dog Pirata.png" alt="" className=""/>
                    </div>
                </div>

            </div>
        </div>
        
        {/* Futer */}
        <div className="bg-[#f3df2a] w-full h-[15%] md:h-[10%] bottom-0 flex flex-row items-center justify-between p-5">
            <section className="text-white text-[80%] flex flex-col items-start md:text-xl">
                <button>Home</button>
                <button>Como ajudar</button>
                <button>Perguntas gerais</button>
            </section>
            <img src="../icon paw.png" alt="" className="h-10 md:h-20"/>
            <section className="text-white text-[80%] flex flex-col items-end text-right md:text-xl">
                <button>Adotar</button>
                <button>Nossa história</button>
                <button>@bompracachorro</button>
                <h1>41 9 9660-2943</h1>
            </section>
        </div>
        </>
    )
}


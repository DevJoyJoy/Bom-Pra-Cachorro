export const MainPage = () => {
    return(
        <>
        {/* Header */}
        <div className="h-[8vh] w-full bg-[#ff66c4] flex justify-between items-center px-4 text-white text-4xl">
            <section className="flex gap-4">
                <img src="/icon paw.png" alt="" className="w-[4vw]"/>
                <h1>Bom pra Cachorro</h1>
            </section>
            <section className="flex gap-4 text-lg">
                <a href="">Adote</a>
                <a href="">Como Ajudar</a>
                <a href="">Saiba mais</a>
            </section>
        </div>

        {/* contúdo "Me Adota" */}
        <div className="w-full h-[70vh] bg-[#ff66c4] relative overflow-hidden flex items-center justify-between px-10">
            <section className="ml-[5%] z-10">
                <h1 className="text-9xl text-white">Me <br/>Adota</h1>
                <button className="w-[12vw] bg-white rounded-2xl text-2xl p-[1%] mt-[10%]">
                    Adotar!
                </button>
            </section>  

            {/* Bola amarela*/}
            <div className="h-full w-[40%] bg-[#ffef63] rounded-full mt-[5%] relative z-0">
            </div>
        </div>
        {/* Imagem do cachorro pirata */}
        <img 
            src="/Dog Pirata.png" 
            alt="" 
            className="absolute right-[5%] top-[16%] w-[35%] z-20"
        />
        
        {/* Segunda seção */}
        <div className="bg-white w-full h-[200px] flex items-center justify-center">
            <h1 className="text-black">Nova seção</h1>
        </div>

        {/* Footer */}
        <div className="bg-[#f3df2a] w-full h-[120px] flex items-center justify-between p-5">
            <section className="text-white text-sm md:text-xl flex flex-col">
                <button>Home</button>
                <button>Como ajudar</button>
                <button>Perguntas gerais</button>
            </section>

            <img src="/icon paw.png" alt="" className="h-10 md:h-20"/>

            <section className="text-white text-sm md:text-xl flex flex-col items-end text-right">
                <button>Adotar</button>
                <button>Nossa história</button>
                <button>@bompracachorro</button>
                <h1>41 9 9660-2943</h1>
            </section>
        </div>
        </>
    )
}
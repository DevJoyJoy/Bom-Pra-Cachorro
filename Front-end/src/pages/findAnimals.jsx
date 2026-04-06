

export const FindAnimals = () => {
    return(
        <>
        <div className="w-full min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-[#ff66c4] w-full h-20 flex items-center px-4">
                <img src="../icon paw.png" alt="" className="h-[60%] md:h-[70%]" />
                <h1 className="ml-2 font-bold text-xl md:text-3xl arturo text-white">
                Bom pra cachorro
                </h1>
            </div>

            {/* Box title */}
            <div className="w-[90%] m-5">
                <h1 className="md:text-2xl">Encontre seu novo amigo</h1>
            </div>

            {/* Box for all the animals */}
            <div className="w-full flex flex-1 items-center justify-center">
                <div className="w-[90%] h-[90%] flex flex-wrap m-5 items-center justify-center gap-3">
                    {/* Example of cards for the pets*/}
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
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
        </div>
        </>
    )
}
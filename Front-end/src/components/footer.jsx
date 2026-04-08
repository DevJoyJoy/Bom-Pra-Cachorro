export const Footer = () => {
    return(
        <>
            <div className="bg-[#f3df2a] w-full h-30 flex items-center justify-between p-5">
                <section className="text-gray text-sm md:text-xl flex flex-col">
                    <button className="self-start">Home</button>
                    <button className="self-start">Como ajudar</button>
                    <button className="self-start">Perguntas gerais</button>
                </section> 

                <img src="/icon paw.png" alt="" className="h-10 md:h-20"/>

                <section className="text-gray text-sm md:text-xl flex flex-col items-end text-right">
                    <button>Adotar</button>
                    <button>Nossa história</button>
                    <button>@bompracachorro</button>
                    <h1>41 9 9660-2943</h1>
                </section>
            </div>
        </>
    )
}

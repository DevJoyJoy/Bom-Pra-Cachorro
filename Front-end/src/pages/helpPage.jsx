import { useState } from "react"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const Help = () => {

    const [open, setOpen] = useState([])

    const handleToggle = (id) => {
        if (open.includes(id)) {
            setOpen(open.filter(item => item !== id))
        } else {
            setOpen([...open, id])
        }
    }

    return(
        <>
            <Header/>

            <div className="min-h-screen w-full flex flex-col pb-10">
                
                <section className="flex flex-col ml-[5%] p-[1%] gap-4">
                    <h1 className="text-4xl">Nos ajude a continuar!</h1>
                    <p className="text-2xl ml-[2%]">
                        Para apoiar nossa causa, você pode fazer doações dos seguintes itens:
                    </p>
                </section>

                <section className="flex gap-10 items-start justify-center w-full">

                    {/* ESQUERDA */}
                    <section className="flex flex-col w-[40%] gap-5">

                        {/* 1 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Papel Reciclado</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(1)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            
                            {open.includes(1) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <div className="flex items-center gap-[10%]">
                                        <img src="..\public\reciclagem.png" alt="" className="w-[20%] ml-[2%]"/>
                                        <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, commodi soluta. Repellendus optio aspernatur,
                                            quisquam quae excepturi similique est eius voluptatibus nostrum,
                                            doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 2 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Tampas de Garrafa</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(2)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            {open.includes(2) && (
                                 <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                        <img src="..\public\tampa_garrafa.png" alt="" className="w-[20%] ml-[2%]"/>
                                        <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, commodi soluta. Repellendus optio aspernatur,
                                            quisquam quae excepturi similique est eius voluptatibus nostrum,
                                            doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                    </div>
                            )}
                        </section>

                        {/* 3 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Óleo de Cozinha</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(3)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            {open.includes(3) && (
                                 <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                        <img src="..\public\oleo.png" alt="" className="w-[20%] ml-[2%]"/>
                                        <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, commodi soluta. Repellendus optio aspernatur,
                                            quisquam quae excepturi similique est eius voluptatibus nostrum,
                                            doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                    </div>
                            )}
                        </section>

                    </section>

                    {/* DIREITA */}
                    <section className="flex flex-col w-[40%] gap-5">

                        {/* 4 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Lixo Eletrônico</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(4)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            {open.includes(4) && (
                                <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                        <img src="..\public\lixo.png" alt="" className="w-[20%] ml-[2%]"/>
                                        <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, commodi soluta. Repellendus optio aspernatur,
                                            quisquam quae excepturi similique est eius voluptatibus nostrum,
                                            doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                    </div>
                            )}
                        </section>

                        {/* 5 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Latinhas de Alumínio</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(5)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            {open.includes(5) && (
                                 <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                        <img src="..\public\lata.png" alt="" className="w-[20%] ml-[2%]"/>
                                        <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Quos, commodi soluta. Repellendus optio aspernatur,
                                            quisquam quae excepturi similique est eius voluptatibus nostrum,
                                            doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                    </div>
                            )}
                        </section>

                        {/* 6 */}
                        <section className="relative w-full">
                            <div className="w-full h-[9vh] bg-[#0097b2] rounded-4xl flex items-center justify-between">
                                <h1 className="ml-[15%] text-3xl text-white">Rifas</h1>
                                <img 
                                    src="/arrow.png"
                                    className="w-[5%] mr-[5%] cursor-pointer"
                                    onClick={() => handleToggle(6)}
                                />
                            </div>
                            <img src="/paw-help-page.png" className="absolute -top-1 -left-5 w-[5vw] h-[10vh] object-cover rounded-full"/>
                            {open.includes(6) && (
                                 <div className="bg-[#99E3EC] p-4 rounded-xl mt-2 flex">
                                    <img src="..\public\reciclagem.png" alt="" className="w-[20%] ml-[2%]"/>
                                    <h1 className="p-[2%]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quos, commodi soluta. Repellendus optio aspernatur,
                                    quisquam quae excepturi similique est eius voluptatibus nostrum,
                                    doloribus sunt? Aliquid obcaecati facilis quia in amet?</h1>
                                </div>
                            )}
                        </section>

                    </section>

                </section>

            </div>

            <Footer/>
        </>
    )
}
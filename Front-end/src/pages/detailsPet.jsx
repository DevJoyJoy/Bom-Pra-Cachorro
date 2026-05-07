import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { useState, useEffect, use } from "react";

export const DetailsPetPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [adotarClick, setAdotarClick] = useState(false);

    const [comportamentoPet, setComportamentoPet] = useState({
        withDogs: true,
        withChildren: false,
        withCats: true
    })

    function StatusRow({ boolean, ifTrue, ifFalse }) {
        return (
            <>
                <i className={`bi ${boolean
                    ? "bi-check-circle-fill text-[#43d74d]"
                    : "bi-x-circle-fill text-red-500"
                    } text-2xl  mr-3`}>
                </i>
                <span className="text-[#4b4b4b] align-super">{boolean ? ifTrue : ifFalse}</span>
            </>
        )
    }


    return (
        <div id="screen" className="w-full min-h-screen flex flex-col items-center">
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            <div id="container" className="w-[85%] md:mt-6 flex flex-1 flex-col md:flex-row md:gap-8">
                {/* Titulo principal / Nome do pet */}
                <div className=" flex flex-col h-max md:hidden ">
                    <div id="name-pet" className="flex flex-row items-center">
                        <img src="../../public/patinha.png" className="h-6 mr-4 mt-3"></img>
                        <h1 className="mt-4 text-2xl text-[#4b4b4b]">Rogerinho</h1>
                    </div>
                    <div className="my-3 h-0.5 w-full bg-[#9cd7e1]"></div>
                </div>
                {/* Coluna 1 da pagina md / coluna normal em mobile */}
                <div className="order-1 flex items-center flex-col md:w-70 md:mr-5 lg:w-80">
                    <img src="../../public/exampleDog.jpg" className="w-full m-3 rounded-2xl border-5 border-[#0097b2]"></img>
                    <div className="bg-[#daeef5] grid grid-cols-2 grid-rows-2 rounded-2xl my-4 w-full aspect-square  ">
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-birthday.png" className="w-16 h-max"></img>
                            <label className="text-[#4b4b4b]">Idade:</label>
                            <label className="text-[#4b4b4b]">2 anos</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-regua.png" className="w-16 h-max"></img>
                            <label className="text-[#4b4b4b]">Porte:</label>
                            <label className="text-[#4b4b4b]">Médio</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-dna.png" className="w-16  h-max"></img>
                            <label className="text-[#4b4b4b]">Raça:</label>
                            <label className="text-[#4b4b4b]">Indefinida</label>
                        </div>
                        <div className="flex flex-col items-center justify-center p-3">
                            <img src="../../public/icon-sex.png" className="w-16 h-max"></img>
                            <label className="text-[#4b4b4b]">Sexo:</label>
                            <label className="text-[#4b4b4b]">Macho</label>
                        </div>
                    </div>


                    <button onClick={() => setAdotarClick(true)} className="bg-[#0097b2] w-full rounded-xl text-xl text-white py-3 my-1 hover:bg-[#007c93] active:bg-[#00677a] ">Quero adotar</button>
                    <div className="relative group w-full">
                        <button className="bg-white flex items-center justify-center border-[#0097b2] border-2 text-xl w-full rounded-xl text-[#0097b2] py-3 my-1 hover:bg-[#c8eaf0] active:bg-[#a7dbe5] ">
                            Quero apadrinhar
                            <i className="hidden lg:block  bi bi-info-circle align-middle ml-3"></i>
                            <div className="absolute left-0 top-full mt-2 w-full hidden lg:group-hover:block bg-white shadow-lg p-4 rounded text-[#4b4b4b] text-lg">
                                Ajude o pet com cuidados e suporte mensal, mesmo sem precisar adotá-lo.
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-row">
                        <i className="bi-exclamation-triangle text-[#4b4b4b]"></i>
                        <span className="text-[#4b4b4b] ml-2 mb-5">Adoção responsável</span>
                    </div>
                </div>
                <div className="h-max order-2 flex-1">
                    <div className="hidden md:flex ">
                        <div className="h-max flex flex-col flex-1">
                            <div id="name-pet" className="flex flex-row items-center">
                                <img src="../../public/patinha.png" className="h-6 mr-4 mt-3"></img>
                                <h1 className="mt-4 text-2xl text-[#4b4b4b]">Rogerinho</h1>
                            </div>
                            <div className="my-3 h-0.5 w-full bg-[#9cd7e1]"></div>
                        </div>
                    </div>
                    <div className="w-full h-max min-h-30 mb-3">
                        <div className="md:hidden my-5 h-0.5 w-full bg-[#9cd7e1]"></div>
                        <h1 className="mt-4 mb-4 text-xl text-[#0097b2] text-center md:text-start">Sobre mim</h1>
                        <p className="text-[#4b4b4b] text-center md:text-start">
                            Eu fui resgatado e sei la o que, texto meramente ilustrativo. Finge que tem alguma coisa bem seria e emocionante aqui nesse container. Um beijo :)
                            Eu fui resgatado e sei la o que, texto meramente ilustrativo. Finge que tem alguma coisa bem seria e emocionante aqui nesse container. Um beijo :)
                        </p>
                    </div>
                    <div className="h-6 flex items-center">
                        <div className="h-0.5 w-full bg-[#9cd7e1]"></div>
                    </div>
                    <div className="w-full bg-[#daeef5] rounded-2xl min-h-20 h-max py-3 px-5 my-5">
                        <h1 className="text-xl text-[#0097b2]">Nivel de energia</h1>
                        <div className="h-10 my-4 md:h-15 md:my-6 flex flex-row justify-center">
                            <img className="mx-2" src="../../public/patinha3.png"></img>
                            <img className="mx-2" src="../../public/patinha2.png"></img>
                            <img className="mx-2" src="../../public/patinha2.png"></img>
                        </div>
                    </div>
                    <div className="w-full bg-[#daeef5] rounded-2xl min-h-20 h-max py-3 px-5 my-5">
                        <h1 className="text-xl text-[#0097b2]">Comportamentos</h1>
                        <div className="my-4 ml-1 md:my-6 flex flex-col justify-center gap-2">
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withDogs}
                                    ifTrue="Se dá bem com cães"
                                    ifFalse="Não se dá bem com cães"
                                />
                            </div>
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withChildren}
                                    ifTrue="Se dá bem com crianças"
                                    ifFalse="Não se dá bem com crianças"
                                />
                            </div>
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withCats}
                                    ifTrue="Se dá bem com gatos"
                                    ifFalse="Não se dá bem com gatos"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#daeef5] rounded-2xl min-h-20 h-max py-3 px-5 my-5">
                        <h1 className="text-xl text-[#0097b2]">Saúde</h1>
                        <div className="my-4 ml-1 md:my-6 flex flex-col justify-center gap-2">
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withChildren}
                                    ifTrue="Vacinado"
                                    ifFalse="Não vacinado"
                                />
                            </div>
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withDogs}
                                    ifTrue="Vermifugado"
                                    ifFalse="Não vermifugado"
                                />
                            </div>
                            <div className="flex items-center">
                                <StatusRow
                                    boolean={comportamentoPet.withChildren}
                                    ifTrue="Castrado"
                                    ifFalse="Não castrado"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-10 w-full"></div>
                </div>
            </div >

            {adotarClick && (<div className="fixed inset-0 z-1 flex items-center justify-center">
                {/* Dark background */}
                <div onClick={() => setAdotarClick(false)} className="absolute inset-0 bg-black opacity-60"></div>

                {/* Modal white box */}
                <div className="z-1 flex flex-col items-center w-[80%] lg:w-[40%] p-8 bg-white rounded-2xl">
                    <p className="mb-6 text-center md:text-2xl">Digite o novo animal:</p>

                    <br />
                    <button onClick={() => { }} className="px-6 py-2 text-white font-bold md:text-2xl lg:text-xl rounded-full cursor-pointer transition-colors bg-[#0097b2] hover:bg-[#015b6b] arturo">
                        Cadastrar animal
                    </button>
                </div>
            </div>)}


            <Footer></Footer>
        </div >
    )
}
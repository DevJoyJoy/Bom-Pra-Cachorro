import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const WhoWeAre = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            {/* Blue box of who we are */}
            <div className="bg-[#b6e7ef] flex items-center justify-between px-[5vw] py-5
            w-full min-h-[30vh]
            md:min-h-[35vh]
            lg:h-[80vh]">
                <img src="/mainDog_WhoWeAre.png" className="w-[45vw] md:w-[50vw] lg:w-[35vw]" alt="" />
                {/* Div with all the texts */}
                <div className="text-[#4b4b4b] 
                w-[55vw] 
                md:w-[50vw]
                lg:w-[45vw]">
                    <img src="/paw_WhoWeAre.png" className="absolute w-[50vw] bottom-55 md:w-[35vw] md:bottom-30 md:right-10 lg:w-[30vw] lg:bottom-20 lg:right-5" alt="" />
                    <p className="relative font-bold text-xl md:text-3xl lg:text-5xl">Quem somos</p>
                    <br />
                    <div className="relative lg:w-[30vw]">
                        <p className="text-[85%] md:text-xl lg:text-xl">
                            Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.
                            Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.
                        </p>
                    </div>
                </div>
            </div>

            {/* White box with pink portal of who we are */}
            <div className="flex items-center justify-between px-[5vw] py-5
            w-full min-h-[30vh]
            md:min-h-[35vh] 
            lg:h-[90vh] ">
                
                {/* Div with all the texts */}
                <div className="text-[#4b4b4b] 
                w-[50vw]
                md:w-[50vw] 
                lg:w-[42vw]">
                    <p className="font-bold text-xl md:text-3xl lg:text-5xl">Quem somos</p>
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="text-[85%] md:text-xl lg:text-xl">
                            Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.
                            Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.
                        </p>
                    </div>
                </div>

                {/* Pink portal with dog */}
                <div className="bg-[#ff66c4] rounded-t-[300px] 
                w-[35vw] h-[25vh] 
                md:w-[30vw] md:h-[30vh] 
                lg:w-[33vw] lg:h-[80vh]
                flex justify-center items-end"> 
                    <img src="/portalDog_WhoWeAre.png" className="h-[90%] w-auto object-contain" alt=""/>
                </div>
            </div>

            {/* White box with blue dog boxes */}
            <div className="flex items-center justify-between px-[5vw]
            w-full min-h-[20vh]
            md:min-h-[30vh] 
            lg:h-[90vh]">

                {/* Blue dog box 1 */}
                <div className="bg-[#0097b2] rounded-xl flex flex-col items-center justify-between p-2.5 aspect-square
                w-[25vw]
                md:w-[26vw]
                lg:w-[25vw]">
                    <img src="/dog_WhoWeAre.png" className="bg-white rounded-xl aspect-square
                    w-[20vw]
                    md:w-[22vw]
                    lg:w-[22vw]" alt="" />
                    <p className="text-[1vh] md:text-xl">Cachorrinho num 1</p>
                </div>

                {/* Blue dog box 2 */}
                <div className="bg-[#0097b2] rounded-xl flex flex-col items-center justify-between p-2.5 aspect-square
                w-[25vw]
                md:w-[26vw]
                lg:w-[25vw]">
                    <img src="/dog_WhoWeAre.png" className="bg-white rounded-xl aspect-square
                    w-[20vw]
                    md:w-[22vw]
                    lg:w-[22vw]" alt="" />
                    <p className="text-[1vh] md:text-xl">Cachorrinho num 2</p>
                </div>

                {/* Blue dog box 3 */}
                <div className="bg-[#0097b2] rounded-xl flex flex-col items-center justify-between p-2.5 aspect-square
                w-[25vw]
                md:w-[26vw]
                lg:w-[25vw]">
                    <img src="/dog_WhoWeAre.png" className="bg-white rounded-xl aspect-square
                    w-[20vw]
                    md:w-[22vw]
                    lg:w-[22vw]" alt="" />
                    <p className="text-[1vh] md:text-xl">Cachorrinho num 3</p>
                </div>
            </div>

            {/* White box with recicle */}
            <div className="flex items-center justify-between p-[5vw]
            w-full min-h-[35vh]
            md:min-h-[40vh] 
            lg:h-[85vh] lg:pb-35">
                
                <img src="/paperCicle.png" className="w-[45vw] md:w-[50vw] lg:w-[35vw] h-auto object-contain mx-auto" alt=""/>                
                {/* Div with all the texts */}
                <div className="text-[#4b4b4b] w-[40vw] lg:w-[42vw]">
                    <p className="text-xl md:text-3xl lg:text-5xl font-bold">Reciclagem</p>
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="text-[85%] md:text-xl lg:text-xl">
                            Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.
                        </p>
                    </div>
                    <br />

                    {/* List with images and texts */}
                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-row">
                                <img src="/patinha.png" className="mr-2 w-[5vw] md:w-[4vw] lg:w-[3vw]" alt="" />
                                <p>Texto 1</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <img src="/patinha.png" className="mr-2 w-[5vw] md:w-[4vw] lg:w-[3vw]" alt="" />
                                <p>Texto 2</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <img src="/patinha.png" className="mr-2 w-[5vw] md:w-[4vw] lg:w-[3vw]" alt="" />
                                <p>Texto 3</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <img src="/patinha.png" className="mr-2 w-[5vw] md:w-[4vw] lg:w-[3vw]" alt="" />
                                <p>Texto 4</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer */}
            <Footer open={menuOpen} setOpen={setMenuOpen}></Footer>
        </>
    )
}
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const FindAnimals = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className="w-full min-h-screen flex flex-col">

                <Header open={menuOpen} setOpen={setMenuOpen} />

                {/* Box title */}
                <div className="w-[90%] m-5">
                    <h1 className="text-2xl">Encontre seu novo amigo</h1>
                </div>

                {/* Box for all the animals */}
                <div className="w-full flex flex-1 items-start justify-center">
                    <div className="w-full max-w-4xl mx-auto p-4 md:px-9 lg:px-0 flex flex-wrap items-start justify-center gap-9 sm:gap-10">
                        {/* Example of cards for the pets*/}
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" onClick={() => {navigate('/teste')}}> {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" > {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" > {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" > {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" > {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>
                        <div className="h-[30%] w-[45%] p-2 sm:w-[27%] lg:h-[25%] lg:w-[30%] rounded-2xl cursor-pointer transition-all duration-150 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-1 active:shadow-sm" > {/*onClick={() => {navigate('/teste')}}*/}
                            <div className="relative w-full h-[60%] group">
                                <img src="../fundo_grid_pet.png" className="w-full rounded-2xl transition-transform duration-300 group-hover:-rotate-6" />
                                <img src="../exampleDog.jpg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] rounded-2xl transition-transform duration-300 group-hover:scale-105 " />
                            </div>
                            <div className="pl-3">
                                <span className="text-lg">Doguinho</span> <br></br>
                                <span className="text-lg">3 anos</span>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Futer */}
                <Footer />
            </div>
        </>
    )
}
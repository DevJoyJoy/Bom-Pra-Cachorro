import { useState } from "react";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const AvaliablePets = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-white 
        w-full h-max 
        md:h-auto">
        {/* Header */}
        <Header/>
        
        {/* White box */}
        <div className="flex flex-col items-center justify-start p-3
        w-auto h-[88vh] max-h-[95vh] 
        lg:pl-10
        ">
            <h1 className="pt-3 lg:pb-3 font-bold breeSerif
            text-2xl 
            md:text-4xl 
            lg:text-3xl">
                Editar animais disponíveis
            </h1>
            
            {/* Animal box*/}
            <div className="flex flex-col mt-3 gap-4 items-center
            w-full h-full overflow-y-scroll">
                <div className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row
                w-[90vw] h-[15vh]">
                    <img src="/dog_WhoWeAre.png" className="rounded-2xl" alt=""/>
                    <div className="flex flex-col text-[80%]">
                        <p className="font-semibold text-[130%] lg:text-2xl">Doguinho</p>
                        <p className="lg:text-xl">Idade: </p>
                        <p className="lg:text-xl">Raça: </p>
                    </div>
                    {/* Box for buttons */}
                    <div className="flex gap-1 ml-auto self-start p-2">
                        <button className="bg-[#868585] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">!</button>
                        <button className="bg-[#972222] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#661616]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">X</button>
                    </div>
                </div>

                {/* Dogs for overflow test */}
                <div className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row
                w-[90vw] h-[15vh]">
                    <img src="/dog_WhoWeAre.png" className="rounded-2xl" alt=""/>
                    <div className="flex flex-col text-[80%]">
                        <p className="font-semibold text-[130%] lg:text-2xl">Doguinho</p>
                        <p className="lg:text-xl">Idade: </p>
                        <p className="lg:text-xl">Raça: </p>
                    </div>
                    {/* Box for buttons */}
                    <div className="flex gap-1 ml-auto self-start p-2">
                        <button className="bg-[#868585] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">!</button>
                        <button className="bg-[#972222] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#661616]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">X</button>
                    </div>
                </div>

                <div className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row
                w-[90vw] h-[15vh]">
                    <img src="/dog_WhoWeAre.png" className="rounded-2xl" alt=""/>
                    <div className="flex flex-col text-[80%]">
                        <p className="font-semibold text-[130%] lg:text-2xl">Doguinho</p>
                        <p className="lg:text-xl">Idade: </p>
                        <p className="lg:text-xl">Raça: </p>
                    </div>
                    {/* Box for buttons */}
                    <div className="flex gap-1 ml-auto self-start p-2">
                        <button className="bg-[#868585] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">!</button>
                        <button className="bg-[#972222] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#661616]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">X</button>
                    </div>
                </div>

                <div className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row
                w-[90vw] h-[15vh]">
                    <img src="/dog_WhoWeAre.png" className="rounded-2xl" alt=""/>
                    <div className="flex flex-col text-[80%]">
                        <p className="font-semibold text-[130%] lg:text-2xl">Doguinho</p>
                        <p className="lg:text-xl">Idade: </p>
                        <p className="lg:text-xl">Raça: </p>
                    </div>
                    {/* Box for buttons */}
                    <div className="flex gap-1 ml-auto self-start p-2">
                        <button className="bg-[#868585] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">!</button>
                        <button className="bg-[#972222] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#661616]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">X</button>
                    </div>
                </div>

                <div className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row
                w-[90vw] h-[15vh]">
                    <img src="/dog_WhoWeAre.png" className="rounded-2xl" alt=""/>
                    <div className="flex flex-col text-[80%]">
                        <p className="font-semibold text-[130%] lg:text-2xl">Doguinho</p>
                        <p className="lg:text-xl">Idade: </p>
                        <p className="lg:text-xl">Raça: </p>
                    </div>
                    {/* Box for buttons */}
                    <div className="flex gap-1 ml-auto self-start p-2">
                        <button className="bg-[#868585] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">!</button>
                        <button className="bg-[#972222] text-white flex items-center justify-center p-3 rounded-[30%] cursor-pointer hover:bg-[#661616]
                        w-[5vw] h-[4vh]
                        md:h-[6vh]
                        lg:w-[3vw]">X</button>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
    );
};

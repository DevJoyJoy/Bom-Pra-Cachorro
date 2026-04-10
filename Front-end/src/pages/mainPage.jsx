import { useState, useEffect } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const images = ["/dogo_teste.png", "/segundo_dog.png", "/dogo_teste.png", "/segundo_dog.png"];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header open={menuOpen} setOpen={setMenuOpen} />

            {/* FIRST SECTION */}
            <div className="w-full h-[65vh] bg-[#ff66c4] flex flex-col items-start py-10
                md:flex-row md:h-[36vh]">

                <section className="flex flex-col gap-6 w-full max-w-6xl px-6 text-center 
                   md:text-left md:w-[50%] ">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold">
                        Me Adota
                    </h1>

                    <button
                        onClick={() => navigate("/Pets")}
                        className="px-6 py-3 bg-[#0097b2] text-white rounded-full text-xl hover:bg-[#33AEC4] w-40 mx-auto md:mx-0"
                    >
                        Adotar!
                    </button>
                </section>

                <div className="relative w-full flex flex-col items-center">
                   <img
                        src="/dog pirata certa.png"
                        className="w-full max-w-[100vw] object-cover z-20 mt-12
                                md:w-[60vw] md:-mt-5" 
                    />
                    <div className="w-full h-[10vh] bg-white z-10 absolute bottom-0
                        md:bottom-2.2 md:h-[7vh]"></div>
                </div>

            </div>

            {/* SECOND SECTION */}
            <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 mt-8
                md:mt-10">
                
                <section className="w-[80vw] max-w-md flex flex-col items-center justify-center">
                    <div className="bg-[#0097b2] text-white text-xl md:text-2xl h-14 flex items-center justify-center rounded-t-2xl w-full">
                        Quem Somos?
                    </div>

                    <div className="border-2 border-[#0097b2] p-6 rounded-b-2xl flex flex-col items-center justify-center gap-6 text-center">
                        <h1 className="text-xl md:text-2xl">
                            Bom pra Cachorro!
                        </h1>

                        <p className="text-base md:text-lg">
                            Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                        </p>

                        <button 
                            onClick={() => navigate("LearnMore")}
                            className="bg-[#ff66c4] text-white rounded-xl py-2 px-4 hover:bg-[#ff85d1] w-[30vw]">
                            Saiba mais
                        </button>
                    </div>
                </section>

                <section className="w-[80vw] max-w-lg
                md:w-[50vw]">
                    <div className="overflow-hidden rounded-2xl">
                        <div 
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <img key={index} src={img} className="w-full shrink-0" />
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer
                                ${current === index ? "bg-[#ff66c4] scale-125" : "bg-gray-300"}`}
                            />
                        ))}
                    </div>
                </section>
            </div>

            {/* THIRD SECTION */}
            <div className="bg-[#0097b2] w-full flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-10">

                <img 
                    src="/polaroid_dog.png" 
                    className="w-[80vw] max-w-sm"
                />

                <section className="flex flex-col gap-4 items-center justify-center text-center md:text-left max-w-md">
                    <h1 className="text-xl md:text-2xl text-white">
                        Saiba como ajudar a ONG
                    </h1>

                    <p className="text-white">
                        Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                    </p>

                    <p className="text-white">
                        Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                    </p>

                    <button 
                        onClick={() => navigate("/Help")}
                        className="px-6 py-3 bg-white text-[#0097b2] rounded-full w-[80%] md:w-fill">
                        Saiba como Contribuir!
                    </button>
                </section>
            </div>

            {/* FOURTH SECTION */}
            <div className="bg-white w-full flex px-6 py-10 items-center justify-center
                md:h-[45vh]">

                <section className="w-full max-w-5xl bg-[#ffef63] rounded-3xl flex flex-col p-6 gap-6 items-center justify-start
                    md:flex-row md:h-[30vh]">

                    <div className="flex flex-col gap-4 text-center relative z-10
                     md:text-center md:w-[50vw]">
                        <h1 className="text-xl md:text-2xl">
                            Violência contra o animal? Denuncie!
                        </h1>

                        <hr className="border-black" />

                        <p className="text-base md:text-lg">
                            Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE!
                            Disque 181 ou 156 para denunciar.
                        </p>
                    </div>

                    <img 
                        src="/heroi_dogo.png"
                        className="w-full absolute z-10
                            md:w-[30vw] md:right-11"
                    />
                </section>
            </div>

            <Footer />
        </>
    );
};
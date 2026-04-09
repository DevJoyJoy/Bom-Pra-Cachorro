import { useState, useEffect } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();

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
            <Header />

            {/* First Section */}
            <div className="w-full min-h-[70vh] bg-[#ff66c4] relative overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-10">
                <section className="z-10 text-center md:text-left md:ml-[5%]">
                    <h1 className="text-5xl md:text-7xl lg:text-9xl text-white">
                        Me <br/>Adota
                    </h1>

                    <button
                        onClick={() => navigate("/Pets")}
                        className="w-[60vw] md:w-[15vw] h-[6vh] md:h-[8vh] bg-[#0097b2] text-white rounded-2xl text-xl md:text-3xl mt-5 md:mt-[10%] hover:bg-[#33AEC4]">
                        Adotar!
                    </button>
                </section>

                <div className="absolute right-[-10%] bottom-[-10%] w-[120vw] h-[40vh] md:w-[40%] md:h-full bg-[#ffef63] rounded-full z-0"></div>

                <img src="/Dog Pirata.png" alt="" className=" relative md:absolute md:right-[5%] md:bottom-0 w-[70%] md:w-[35%] mt-5 md:mt-0 z-20 "/>
            </div>

            {/* Second Section */}
            <div className="bg-white w-full min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-5 md:px-10 gap-10 md:gap-[15%]">

                {/* Left Card */}
                <section className="w-[90vw] md:w-[30vw]">
                    <div className="bg-[#0097b2] text-white text-xl md:text-3xl  w-full h-[8vh] flex items-center justify-center rounded-3xl rounded-b-none">
                        <h1>Quem Somos?</h1>
                    </div>

                    <div className="border-2 border-[#0097b2] text-lg md:text-2xl w-full min-h-[40vh] flex flex-col items-center justify-center rounded-3xl rounded-t-none p-5">
                        <h1 className="text-2xl md:text-3xl">Bom pra Cachorro!</h1>

                        <p className="my-5 text-center">
                            Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                        </p>

                        <button onClick={() => navigate("LearnMore")} className="bg-[#ff66c4] hover:bg-[#ff85d1] px-6 py-2 text-white rounded-2xl">
                            Saiba mais
                        </button>
                    </div>
                </section>

                {/* Carousel */}
                <section className="w-[80vw] md:w-[23%]">
                    <div className="relative w-full overflow-hidden rounded-2xl">
                        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
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

            {/* Third Section */}
            <div className="bg-[#0097b2] w-full min-h-[80vh] flex flex-col md:flex-row justify-center items-center px-5 md:px-10 gap-10">

                <section>
                    <img src="/polaroid_dog.png" className="w-[70%] md:w-[90%]" />
                </section>

                <section className="flex flex-col gap-6 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl text-white">
                        Saiba como ajudar a ONG
                    </h1>

                    <p className="text-lg md:text-2xl text-white">
                        Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                    </p>

                    <p className="text-lg md:text-2xl text-white">
                        Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                    </p>

                    <button onClick={() => navigate("/Help")} className="self-center md:self-start px-6 py-3 w-[60vw] md:w-[15vw] text-[#0097b2] text-xl md:text-3xl rounded-4xl bg-white">
                        Contribua!
                    </button>
                </section>
            </div>

            {/* Fouth Section */}
            <div className="bg-white w-full min-h-[80vh] flex justify-center items-center px-5">

                <section className="w-full md:w-[80%] min-h-[55vh] bg-[#ffef63] rounded-4xl flex flex-col md:flex-row relative p-5">

                    <section className="flex flex-col justify-center gap-6 w-full md:w-[50%]">
                        <h1 className="text-3xl md:text-5xl">
                            Violência contra o animal? Denuncie!
                        </h1>

                        <hr className="border-t-2 border-black w-full" />

                        <p className="text-lg md:text-2xl">
                            Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE!
                            Disque 181 ou 156 para denunciar.
                        </p>
                    </section>

                    <img src="/heroi_dogo.png" className="relative md:absolute md:-right-30 md:bottom-0 md:-top-20 w-[80%] md:w-[55%] mx-auto" />
                </section>
            </div>

            <Footer />
        </>
    );
};
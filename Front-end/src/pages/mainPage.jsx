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

            {/* First Section */}
            <div className="w-full h-[70vh] bg-[#ff66c4] flex items-center
                md:h-[50vh]">

                    {/* Conteudo "Me adota" */}
                    <section className="flex flex-col gap-6 ml-[9%]
                        md:ml-[5%] md:self-center
                        sm:self-start sm:text-center sm:ml-[15%] sm:gap-0 sm:mt-[4%]">

                        <section className="w-[20%]
                            md:w-80 md:text-left 
                            sm:w-110">
                            <h1 className="text-9xl text-white
                                sm:text-8xl">
                                Me Adota</h1>
                        </section>

                        <button
                            onClick={() => navigate("/Pets")}
                            className="w-[10vw] p-[2%] bg-[#0097b2] text-white rounded-4xl text-3xl mt-5 hover:bg-[#33AEC4]
                                md:self-start
                                sm:w-[45%] sm:self-center">
                                Adotar!
                        </button>
                    </section>

                   <div className={`absolute right-[15%] z-20
                        md:right-0
                        ${menuOpen ? "top-[20%] sm:top-[55.2%] md:top-[1%]" : "top-[3.5%] sm:top-[39.2%] md:top-[19%]"}
                    `}>
                        <img 
                            src="/dog pirata certa.png" alt="" className="w-230 
                                sm:w-110"
                        />
                    </div>
                </div>  


                {/* Second Section */}
                <div className="w-full h-[85vh] bg-white flex items-center justify-center gap-[10%] z-10 mt-[3%]
                    md:flex-row md:h-[75vh]
                    sm:flex-col sm:gap-10 sm:h-[140vh]">
                    
                    <section className="w-[30vw] flex flex-col
                        md:mt-0 md:w-[40%]
                        sm:mt-[10%] sm:w-[70%]">
                        <div className="bg-[#0097b2] text-white text-4xl w-full h-[8vh] flex items-center justify-center rounded-3xl rounded-b-none">
                            <h1>Quem Somos?</h1>
                        </div>

                        <div className="border-2 border-[#0097b2] text-lg w-full min-h-[40vh] flex flex-col items-center justify-center rounded-3xl rounded-t-none p-5 gap-10
                            sm:gap-5">
                            <h1 className="
                                md:text-2xl
                                sm:text-3xl">
                                Bom pra Cachorro!</h1>

                            <p className="w-[70%] text-center text-2xl
                                md:text-[20px] md:w-[120%]
                                sm:text-[24px] sm:w-[80%]">
                                Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                            </p>

                            <button onClick={() => navigate("LearnMore")} className="bg-[#ff66c4] hover:bg-[#ff85d1] w-[35%] text-white rounded-2xl p-[2%] text-3xl
                                md:w-[80%]
                                sm:w-[50%]">
                                Saiba mais
                            </button>
                        </div>
                    </section>

                    <section className="w-[60vw] z-10
                        md:w-[40vw]
                        sm:w-[70vw]">
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
            <div className="bg-[#0097b2] w-full h-[80vh] flex flex-col justify-center items-center px-5 gap-10
                md:flex-row md:h-[75vh]
                sm:h-screen">

                <section className="flex items-center justify-center">
                    <img src="/polaroid_dog.png" className="w-[70%] 
                        md:w-[110vw]
                        sm:self-center sm:w-[80%]"/>
                </section>

                <section className="flex flex-col gap-6 text-center 
                    md:text-left
                    sm:gap-4">
                    <h1 className="text-3xl text-white
                        md:text-3xl">
                        Saiba como ajudar a ONG
                    </h1>

                    <p className="text-lg text-white
                        md:text-xl">
                        Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                    </p>

                    <p className="text-lg text-white
                        md:text-xl">
                        Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                    </p>

                    <button onClick={() => navigate("/Help")} className="self-center px-6 py-3 w-[60vw] text-[#0097b2] text-xl rounded-4xl bg-white
                        md:self-start md:w-[35vw] md:text-xl
                        sm:w-[45vw]">
                        Saiba como Contribuir!
                    </button>
                </section>
            </div>

            {/* Fouth Section */}
            <div className="bg-white w-full min-h-[80vh] flex justify-center items-center px-5
                md:h-[75vh]
                sm:h-screen">

                <section className="w-full h-[55vh] bg-[#ffef63] rounded-4xl flex flex-col relative p-5
                    md:w-[90%] md:h-[55vh] md:flex-row
                    sm:text-center">

                    <section className="flex flex-col justify-center gap-6 w-full 
                        md:w-[65%]
                        sm:mt-[5%]">
                        <h1 className="text-3xl 
                            md:text-3xl
                            sm:text-3xl">
                            Violência contra o animal? Denuncie!
                        </h1>

                        <hr className="border-t-2 border-black w-full" />

                        <p className="text-lg 
                            md:text-xl
                            sm:text-xl">
                            Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE!
                            Disque 181 ou 156 para denunciar.
                        </p>
                    </section>

                    <img src="/heroi_dogo.png" className="relative w-[80%] mx-auto
                        md:absolute md:-right-30 md:bottom-0 md:top-20 md:w-[70%]" />
                </section>
            </div>

            <Footer />
        </>
    );
};
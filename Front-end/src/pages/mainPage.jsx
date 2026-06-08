import { useState, useEffect } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const images = ["/dogo_teste.png", "/segundo_dog.png", "/dogo_teste.png", "/segundo_dog.png"];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Header open={menuOpen} setOpen={setMenuOpen} />

            {/* HERO */}
            <div
                className="
                    w-full min-h-[70vh]
                    flex flex-col items-center justify-center
                    px-6 gap-10
                    bg-[#ff66c4]
                    overflow-x-hidden

                    sm:min-h-[60vh]

                    md:flex-row
                    md:min-h-[30vh]

                    lg:h-[30vh]

                    xl:min-h-[50vh]

                    2xl:min-h-[70vh]
                "
            >
                {/* TEXTO */}
                <section
                    className="
                        w-full max-w-xl
                        flex flex-col gap-6
                        items-center text-center

                        md:w-1/2
                    "
                >
                <img
                    src="/me adota.png"
                    alt="Adote um pet"
                    className="
                        w-full max-w-sm

                        sm:w-[55vw]

                        md:w-[40vw]

                        xl:w-[35vw]
                    "
                />

                <button
                    onClick={() => navigate('/Pets')}
                    className="
                        px-6 py-3
                        bg-[#0097b2]
                        text-white
                        rounded-full
                        text-lg
                        hover:bg-[#33AEC4]

                        w-full max-w-xs

                        sm:text-3xl

                        md:text-xl
                    "
                >
                    Adotar!
                </button>
            </section>

    {/* IMAGEM */}
    <div
        className="
            w-full
            md:w-1/2

            flex justify-center

            lg:justify-end

            xl:w-screen
        "
    >
        <img
            src="/cachorro pirata.png"
            alt="Cachorro"
            className="
                w-full max-w-md
                object-contain

                sm:w-[80vw]

                md:w-[50vw]

                xl:w-[90vw]

                2xl:max-w-[35vw]
            "
        />
    </div>
</div>

            {/* SOBRE */}
            <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16
                sm:text-2xl
                xl:min-h-[20vh]
                2xl:gap-40">

                <section className="w-full max-w-md flex flex-col items-center text-center">
            {/* FIRST SECTION */}
            <div className="w-full h-screen bg-[#ff66c4] flex flex-col pt-10 pb-0 overflow-hidden items-center justify-center
                            sm:h-screen
                            md:flex-row md:h-[32vh]
                            lg:h-[71vh]
                            2xl:h-[98vh]">

                <section className="flex flex-col w-80 max-w-6xl gap-6 justify-center
                                    md: md:w-[50%] md:ml-10
                                    xl:ml-[5%]">
                    
                    <img src="../public/me adota.png" alt="" className=""/>

                    <button
                        onClick={() => navigate("/Pets")}
                        className="px-6 py-3 bg-[#0097b2] text-white rounded-full text-xl hover:bg-[#33AEC4] w-40 mx-auto md:mx-0
                                    xl:text-3xl xl:w-[20vw]
                                    2xl:text-5xl">
                        Adotar!
                    </button>
                </section>

                {/* Img cachorro */}
                <div className="w-full h-full flex items-end justify-center overflow-hidden leading-none">
                    <img
                        src="../public/cachorro pirata.png"
                        className="max-h-full w-auto object-contain block"
                    />
                </div>

            </div>

            {/* SECOND SECTION */}
            <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-[15%] px-6 py-10 mt-10
                sm:mt-3
                xl:mt-20">
                
                <section className="w-full max-w-md flex flex-col items-center justify-center
                    2xl:w-[90vw]">
                    <div className="bg-[#0097b2] text-white text-xl h-14 flex items-center justify-center rounded-t-2xl w-full
                        sm:text-2xl
                        md:text-2xl
                        lg:text-3xl">
                        Quem Somos?
                    </div>

                    <div className="border-2 border-[#0097b2] p-6 rounded-b-2xl flex flex-col gap-6 w-full
                        sm:text-2xl">
                        <h1 className="text-xl
                            sm:text-2xl
                            md:text-2xl
                            lg:text-3xl">
                            Bom pra Cachorro!
                        </h1>

                        <p className="text-base
                            sm:text-xl
                            md:text-lg
                            lg:text-xl">
                            Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                        </p>

                        <button
                            onClick={() => navigate("LearnMore")}
                            className="bg-[#ff66c4] text-white rounded-xl py-2 px-4 hover:bg-[#ff85d1] w-[50%]
                                sm:text-3xl
                                md:w-[25vw]
                                lg:text-2xl
                                xl:text-3xl
                                2xl:w-[20vw]">
                            Saiba mais
                        </button>
                    </div>
                </section>

                {/* CARROSSEL */}
                <section className="w-full max-w-md
                    lg:w-[40vw]
                    xl:w-[30vw]">
                {/* <section className="w-full max-w-md"> */}
                <section className="w-[80vw] max-w-lg
                    sm:w-[70vw]
                    md:w-[65vw]
                    lg:w-[30vw]
                    2xl:w-[25vw]">
                    <div className="overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <img key={index} src={img} className="w-full shrink-0 object-cover" />
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

            {/* AJUDA */}
            <div className="bg-[#0097b2] w-full h-auto min-h-[60vh] flex flex-col-reverse items-center justify-center px-6 py-16 gap-10
                md:flex-row
                lg:min-h-[30vh]
                2xl:gap-50">

                <img
                    src="/polaroid_dog.png"
                    alt="Dog"
                    className="w-full max-w-sm 
                        md:w-[60vw]"
                />

                <section className="flex flex-col gap-4 text-center md:text-left max-w-md text-white items-center justify-center">
                    <h1 className="text-xl
                        sm:text-3xl
                        md:text-3xl 
                        g:text-3xl
                        lg:text-4xl">
                        Saiba como ajudar a ONG
                    </h1>

                    <p className="
                        sm:text-xl
                        md:text-xl
                        lg:text-2xl">
                        Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                    </p>

                    <p className="
                        sm:text-xl
                        md:text-xl
                        lg:text-2xl">
                        Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                    </p>

                    <button
                        onClick={() => navigate("/Help")}
                        className="px-6 py-3 bg-white text-[#0097b2] rounded-full w-full text-center
                            sm:text-xl sm:w-[40vw]
                            md:w-[30vw]
                            lg:text-3xl">
                        Contribuir
                    </button>
                </section>
            </div>

            <div className="bg-white w-full min-h-[80vh] flex items-center justify-center px-6 py-16
                md:min-h-[60vh]
                lg:min-h-[30vh]
                xl:min-h-[70vh]
                2xl:min-h-[80vh]">
                <section className="w-full h-135 bg-[#ffef63] rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 gap-6
                    md:h-[40vh]
                    lg:h-[55vh]
                    xl:justify-around
                    2xl:h-[70vh]">

                    {/* TEXTO */}
                    <div className="flex flex-col gap-4 text-center md:text-left max-w-md
                    2xl:max-w-[45vw]">
                        <h1 className="text-xl 
            {/* THIRD SECTION */}
         <div className="bg-[#0097b2] w-full h-[120vh] flex flex-col items-center justify-center px-6 py-10 gap-10
                md:flex-row md:h-[40vh]
                lg:h-[70vh]
                xl:h-[65vh]
                2xl:h-[80vh]">

            <img 
                src="/polaroid_dog.png" 
                className="w-[80%] 
                    md:w-[50%]
                    lg:w-[45%]
                    xl:w-[35%]"
            />

            <section className="flex flex-col gap-4 items-center justify-center text-center md:text-left max-w-md">
                <h1 className="text-xl text-white
                    sm:text-3xl
                    md:text-2xl
                    lg:text-3xl
                    xl:text-4xl">
                    Saiba como ajudar a ONG
                </h1>

                <p className="text-white
                    sm:text-xl
                    lg:text-xl
                    xl:text-2xl">
                    Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                </p>

                <p className="text-white
                    sm:text-xl
                    lg:text-xl
                    xl:text-2xl">
                    Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                </p>

                <button 
                    onClick={() => navigate("/Help")}
                    className="px-6 py-3 bg-white text-[#0097b2] rounded-full w-[80%]
                        sm:text-2xl
                        md:w-auto
                        lg:text-2xl">
                    Saiba como Contribuir!
                </button>
            </section>
        </div>  

            {/* FOURTH SECTION */}
            <div className="bg-white w-full h-screen flex px-6 py-10 items-center justify-center
                md:h-[40vh]
                lg:h-[80vh]
                xl:h-[75vh]
                2xl:h-[80vh]">

                <section className="w-full h-full max-w-5xl bg-[#ffef63] rounded-3xl flex flex-col p-6 gap-6 items-center justify-start
                    md:flex-row md:h-[30vh]
                    lg:h-[55vh]
                    2xl:h-[60vh] 2xl:w-[70vw]
                    relative overflow-visible">

                    <div className="flex flex-col gap-4 text-center relative z-10
                        md:text-center md:w-[50vw]
                        2xl:w-[35vw]">
                        
                        <h1 className="text-xl
                            sm:text-2xl
                            md:text-2xl 
                            lg:text-5xl
                            xl:text-4xl
                            2xl:text-5xl">
                            Violência contra o animal? Denuncie!
                        </h1>

                        <hr className="border-black" />

                        <p className="text-base
                            sm:text-2xl
                            md:text-2xl
                            lg:text-3xl
                            xl:text-3xl
                            2xl:text-4xl">
                            Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE!
                            Disque 181 ou 156.
                        </p>
                    </div>

                    {/* IMAGEM */}
                    <img
                        src="/heroi_dogo.png"
                        alt="Herói"
                        className="w-45
                            md:w-55
                            lg:w-75
                            xl:w-60
                            2xl:w-65"
                    />

                </section>
            </div>

            <Footer />
        </>
    );
};
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

        lg:h-[40vh]
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
            "
        />
    </div>
</div>

            {/* SOBRE */}
            <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16
                sm:text-2xl">

                <section className="w-full max-w-md flex flex-col items-center text-center">
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
                            className="bg-[#ff66c4] text-white rounded-xl py-2 px-4 hover:bg-[#ff85d1] w-full max-w-xs mx-auto">
                            Saiba mais
                        </button>
                    </div>
                </section>

                {/* CARROSSEL */}
                <section className="w-full max-w-md">
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
                md:flex-row">

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
                        g:text-3xl">
                        Saiba como ajudar a ONG
                    </h1>

                    <p className="
                        sm:text-xl
                        md:text-xl">
                        Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!
                    </p>

                    <p className="
                        sm:text-xl
                        md:text-xl">
                        Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.
                    </p>

                    <button
                        onClick={() => navigate("/Help")}
                        className="px-6 py-3 bg-white text-[#0097b2] rounded-full w-full text-center
                            sm:text-xl sm:w-[40vw]
                            md:w-[30vw]">
                        Contribuir
                    </button>
                </section>
            </div>

            <div className="bg-white w-full min-h-[80vh] flex items-center justify-center px-6 py-16
                md:min-h-[60vh]">
                <section className="w-full h-135 bg-[#ffef63] rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 gap-6
                    md:h-[40vh]">

                    {/* TEXTO */}
                    <div className="flex flex-col gap-4 text-center md:text-left max-w-md">
                        <h1 className="text-xl 
                            sm:text-2xl
                            md:text-2xl 
                            lg:text-3xl">
                            Violência contra o animal? Denuncie!
                        </h1>

                        <hr className="border-black" />

                        <p className="text-base
                            sm:text-2xl
                            md:text-2xl
                            lg:text-xl">
                            Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE!
                            Disque 181 ou 156.
                        </p>
                    </div>

                    {/* IMAGEM */}
                    <img
                        src="/heroi_dogo.png"
                        alt="Herói"
                        className="w-45
                            md:w-55"
                    />

                </section>
            </div>

            <Footer />
        </>
    );
};
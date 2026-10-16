import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const images = ["/dogo_teste.png", "/segundo_dog.png", "/dogo_teste.png", "/segundo_dog.png"];

export const MainPage = () => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 5000);
        return () => clearInterval(interval);
    }, [paused]);

    return (
        <div className="page-shell">
            <Header />
            <main id="main-content">
                <section className="bg-[#ff66c4]">
                    <div className="page-container grid items-center gap-8 py-10 md:grid-cols-2 md:py-14">
                        <div className="flex min-w-0 flex-col items-center gap-6 text-center">
                            <h1 className="w-full max-w-sm"><img src="/me adota.png" alt="Me adota! Encontre seu novo melhor amigo." className="w-full object-contain" /></h1>
                            <Link to="/Pets" className="primary-button w-full max-w-xs text-xl">Adotar!</Link>
                        </div>
                        <img src="/cachorro pirata.png" alt="Cachorro à espera de um lar" className="mx-auto max-h-[30rem] w-full max-w-lg object-contain" />
                    </div>
                </section>

                <section className="page-container section-space grid items-center gap-10 md:grid-cols-2 lg:gap-20" aria-labelledby="about-title">
                    <div className="overflow-hidden rounded-2xl border-2 border-[#0097b2] text-center">
                        <h2 id="about-title" className="bg-[#007f96] px-5 py-4 text-2xl text-white">Quem somos?</h2>
                        <div className="flex flex-col items-center gap-6 p-6 sm:p-8">
                            <h3 className="section-title">Bom pra Cachorro!</h3>
                            <p className="body-copy">Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!</p>
                            <Link to="/WhoWeAre" className="w-full rounded-xl bg-[#ff66c4] px-5 py-3 text-lg text-[#4b2540] hover:bg-[#ff85d1]">Saiba mais</Link>
                        </div>
                    </div>
                    <section className="min-w-0" aria-label="Fotos dos nossos animais" aria-roledescription="carrossel">
                        <div className="overflow-hidden rounded-2xl bg-[#daeef5]">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                                {images.map((image, index) => <img key={index} src={image} alt={`Animal da ONG — foto ${index + 1}`} aria-hidden={current !== index} className="aspect-[4/3] w-full shrink-0 object-cover" loading="lazy" />)}
                            </div>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
                            {images.map((_, index) => <button key={index} type="button" aria-label={`Mostrar foto ${index + 1}`} aria-pressed={current === index} onClick={() => { setCurrent(index); setPaused(true); }} className="flex h-11 w-11 items-center justify-center rounded-full"><span className={`h-3 w-3 rounded-full ${current === index ? "bg-[#bf2689]" : "bg-gray-400"}`} /></button>)}
                            <button type="button" className="min-h-11 rounded-lg px-3 text-sm underline" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Reproduzir" : "Pausar"}</button>
                        </div>
                    </section>
                </section>

                <section className="bg-[#007f96] text-white" aria-labelledby="help-title">
                    <div className="page-container section-space grid items-center gap-10 md:grid-cols-2 lg:gap-20">
                        <img src="/polaroid_dog.png" alt="Um dos cães cuidados pela ONG" loading="lazy" className="order-2 mx-auto max-h-[30rem] w-full max-w-sm object-contain md:order-1" />
                        <div className="order-1 flex flex-col items-center gap-5 text-center md:order-2 md:items-start md:text-left">
                            <h2 id="help-title" className="section-title">Saiba como ajudar a ONG</h2>
                            <p className="body-copy">Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença!</p>
                            <p className="body-copy">Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho.</p>
                            <Link to="/Help" className="mt-2 w-full rounded-full bg-white px-6 py-3 text-center text-xl text-[#007084] hover:bg-[#e3f6f9] sm:max-w-xs">Contribuir</Link>
                        </div>
                    </div>
                </section>

                <section className="page-container section-space" aria-labelledby="report-title">
                    <div className="grid items-center gap-8 rounded-3xl bg-[#ffef63] p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:p-14">
                        <div className="min-w-0 space-y-6 text-center md:text-left">
                            <h2 id="report-title" className="section-title">Violência contra o animal? Denuncie!</h2>
                            <hr className="border-[#4b4b4b]/40" />
                            <p className="body-copy">Caso presencie qualquer tipo de violência animal, NÃO SEJA CÚMPLICE! Disque <a className="underline" href="tel:181">181</a> ou <a className="underline" href="tel:156">156</a>.</p>
                        </div>
                        <img src="/heroi_dogo.png" alt="Cachorro vestido de super-herói" loading="lazy" className="mx-auto max-h-80 w-full max-w-60 object-contain" />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
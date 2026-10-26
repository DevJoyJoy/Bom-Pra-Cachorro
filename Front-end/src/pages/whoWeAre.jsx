import { Header } from "../components/header";
import { Footer } from "../components/footer";

const aboutText = "Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço. Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.";

export const WhoWeAre = () => (
    <div className="page-shell">
        <Header />
        <main id="main-content">
            <section className="relative isolate overflow-hidden bg-[#b6e7ef]">
                <div className="page-container section-space grid items-center gap-8 md:grid-cols-2 lg:gap-16">
                    <img src="/mainDog_WhoWeAre.png" className="order-2 mx-auto max-h-[30rem] w-full max-w-md object-contain md:order-1" alt="Cachorro da Bom pra Cachorro" />
                    <div className="relative isolate order-1 min-w-0 space-y-6 md:order-2">
                        <img src="/paw_WhoWeAre.png" className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-contain opacity-30" alt="" />
                        <h1 className="page-title">Quem somos</h1>
                        <p className="body-copy">{aboutText}</p>
                    </div>
                </div>
            </section>
            <section className="page-container section-space grid items-center gap-10 md:grid-cols-2 lg:gap-20" aria-labelledby="story-title">
                <div className="space-y-6">
                    <h2 id="story-title" className="section-title">Nossa história</h2>
                    <p className="body-copy">{aboutText}</p>
                </div>
                <div className="mx-auto flex aspect-[4/5] w-full max-w-sm items-end justify-center overflow-hidden rounded-t-full bg-[#ff66c4] px-4 pt-8">
                    <img src="/portalDog_WhoWeAre.png" className="h-full w-full object-contain object-bottom" loading="lazy" alt="Um de nossos cães" />
                </div>
            </section>
            <section className="page-container grid grid-cols-1 gap-6 pb-10 sm:grid-cols-3 sm:gap-5" aria-label="Cães da ONG">
                {[1, 2, 3].map((number) => <figure key={number} className="mx-auto flex w-full max-w-sm flex-col gap-3 rounded-2xl bg-[#007f96] p-4 text-white">
                    <img src="/dog_WhoWeAre.png" className="aspect-square w-full rounded-xl bg-white object-cover" loading="lazy" alt={`Cachorrinho número ${number}`} />
                    <figcaption className="text-center text-lg">Cachorrinho num {number}</figcaption>
                </figure>)}
            </section>
            <section className="page-container section-space grid items-center gap-10 md:grid-cols-2 lg:gap-20" aria-labelledby="recycling-title">
                <img src="/paperCicle.png" className="mx-auto max-h-[28rem] w-full max-w-md object-contain" loading="lazy" alt="Reciclagem de papel em apoio aos animais" />
                <div className="space-y-6">
                    <h2 id="recycling-title" className="section-title">Reciclagem</h2>
                    <p className="body-copy">Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.</p>
                    <ul className="space-y-4">
                        {[1, 2, 3, 4].map((number) => <li key={number} className="flex items-center gap-3 text-lg"><img src="/patinha.png" className="h-8 w-8 shrink-0 object-contain" alt="" /><span>Texto {number}</span></li>)}
                    </ul>
                </div>
            </section>
        </main>
        <Footer />
    </div>
);
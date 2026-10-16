import { Footer } from "../components/footer";
import { Header } from "../components/header";

const donations = [
    { title: "Papel Reciclado", image: "/reciclagem.png" },
    { title: "Tampas de Garrafa", image: "/tampa_garrafa.png" },
    { title: "Óleo de Cozinha", image: "/oleo.png" },
    { title: "Lixo Eletrônico", image: "/lixo.png" },
    { title: "Latas de Alumínio", image: "/lata.png" },
    { title: "Rifas", image: "/reciclagem.png" },
];

export const Help = () => (
    <div className="page-shell">
        <Header />
        <main id="main-content" className="page-container section-space">
            <div className="mb-10 max-w-3xl space-y-4">
                <h1 className="page-title">Nos ajude a continuar!</h1>
                <p className="body-copy">Para apoiar nossa causa, você pode fazer doações dos seguintes itens:</p>
            </div>
            <div className="grid items-start gap-5 lg:grid-cols-2 lg:gap-8">
                {[donations.slice(0, 3), donations.slice(3)].map((column, index) => <div key={index} className="flex min-w-0 flex-col gap-5">
                    {column.map(({ title, image }) => <details key={title} className="group min-w-0 rounded-3xl bg-[#e5f6f9] open:pb-3">
                        <summary className="flex min-h-20 list-none items-center gap-3 rounded-3xl bg-[#007f96] p-3 text-white marker:content-none [&::-webkit-details-marker]:hidden sm:gap-4">
                            <img src="/paw-help-page.png" alt="" className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14" />
                            <span className="min-w-0 flex-1 break-words text-lg sm:text-2xl">{title}</span>
                            <i aria-hidden="true" className="bi bi-chevron-down mr-2 shrink-0 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col items-center gap-5 p-5 sm:flex-row lg:flex-col xl:flex-row">
                            <img src={image} className="h-24 w-24 shrink-0 object-contain" alt="" loading="lazy" />
                            <p className="min-w-0 text-base leading-relaxed sm:text-lg">Se você ama os animais tanto quanto a gente, saiba que pode fazer a diferença! Com a sua contribuição, conseguimos oferecer alimentação, cuidados veterinários e muito carinho para os animaizinhos.</p>
                        </div>
                    </details>)}
                </div>)}
            </div>
        </main>
        <Footer />
    </div>
);
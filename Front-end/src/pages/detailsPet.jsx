import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Modal } from "../components/modal";
import { PageState } from "../components/pageState";
import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { getFirebaseClient } from "../lib/firebaseClient";

const StatusRow = ({ value, positive, negative }) => (
    <li className="flex items-start gap-3">
        <i aria-hidden="true" className={`bi shrink-0 text-xl ${value === true ? "bi-check-circle-fill text-green-700" : value === false ? "bi-x-circle-fill text-red-700" : "bi-question-circle text-gray-600"}`} />
        <span className="min-w-0 pt-0.5">{value === true ? positive : value === false ? negative : `${positive}: não informado`}</span>
    </li>
);

const energyLabels = { 0: "Pouca energia", 1: "Energia moderada", 2: "Muita energia" };

export const DetailsPetPage = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadedId, setLoadedId] = useState(null);
    const [error, setError] = useState("");
    const [attempt, setAttempt] = useState(0);
    const [contactType, setContactType] = useState(null);
    const closeModal = useCallback(() => setContactType(null), []);
    useEffect(() => {
        let active = true;
        const loadPet = async () => {
            try {
                const { db } = await getFirebaseClient();
                const snapshot = await getDoc(doc(db, "pets", id));
                if (active) { setError(""); setPet(snapshot.exists() ? { ...snapshot.data(), id: snapshot.id } : null); }
            } catch (cause) {
                console.error(cause);
                if (active) setError("Não foi possível carregar este pet. Tente novamente em instantes.");
            } finally { if (active) { setLoadedId(id); setLoading(false); } }
        };
        loadPet();
        return () => { active = false; };
    }, [id, attempt]);
    const retry = () => { setError(""); setLoading(true); setAttempt((value) => value + 1); };
    // Avoid displaying a previous pet while React Router loads a different ID.
    const currentPet = pet?.id === id ? pet : null;
    const pending = loading || loadedId !== id;
    const behavior = currentPet?.behavior || {};
    const health = currentPet?.health || {};
    const contactMessage = `Olá! Gostaria de saber mais sobre ${contactType === "sponsor" ? "o apadrinhamento" : "a adoção"} de ${currentPet?.name || "um pet"}.`;

    return (
        <div className="page-shell">
            <Header />
            <main id="main-content" className="page-container section-space" aria-busy={pending}>
                <Link to="/Pets" className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-lg text-[#00677a] underline"><span aria-hidden="true">←</span>Voltar aos animais</Link>
                {pending || error || !currentPet ? <PageState loading={pending} error={pending ? "" : error} empty="Este pet não foi encontrado ou não está mais disponível." onRetry={retry} /> : <>
                    <div className="mb-8 flex items-center gap-3 border-b-2 border-[#9cd7e1] pb-5">
                        <img src="/patinha.png" alt="" className="h-8 w-8 shrink-0 object-contain" />
                        <h1 className="page-title pet-name">{currentPet.name || "Conheça este pet"}</h1>
                    </div>
                    <div className="grid items-start gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] lg:gap-12">
                        <aside className="min-w-0 space-y-5" aria-label="Fotos e informações do pet">
                            <img src={currentPet.images?.[0] || "/exampleDog.jpg"} alt={currentPet.name || "Pet disponível para adoção"} className="aspect-square w-full rounded-2xl border-4 border-[#0097b2] object-cover" />
                            <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-[#daeef5] p-4 sm:p-6">
                                {[["Nascimento", currentPet.birthDate, "/icon-birthday.png"], ["Porte", currentPet.size, "/icon-regua.png"], ["Raça", currentPet.breed, "/icon-dna.png"], ["Sexo", currentPet.sex, "/icon-sex.png"]].map(([label, value, image]) => <div key={label} className="flex min-w-0 flex-col items-center gap-1 py-3 text-center">
                                    <img src={image} alt="" className="mb-2 h-12 w-12 object-contain" />
                                    <dt>{label}</dt><dd className="max-w-full break-words font-semibold">{value || "Não informado"}</dd>
                                </div>)}
                            </dl>
                            <div className="flex flex-col gap-3">
                                <button type="button" onClick={() => setContactType("adopt")} className="primary-button w-full text-lg">Quero adotar</button>
                                <button type="button" onClick={() => setContactType("sponsor")} className="min-h-12 w-full rounded-xl border-2 border-[#007f96] px-4 py-3 text-lg text-[#00677a] hover:bg-[#e3f6f9]">Quero apadrinhar</button>
                                <p className="text-sm leading-relaxed">Apadrinhar é ajudar com cuidados e suporte mensal, mesmo sem adotar.</p>
                                <p className="flex items-center justify-center gap-2 py-2"><i className="bi bi-exclamation-triangle" aria-hidden="true" />Adoção responsável</p>
                            </div>
                        </aside>
                        <div className="min-w-0 space-y-6">
                            <section className="space-y-4 pb-4" aria-labelledby="description-title"><h2 id="description-title" className="text-2xl text-[#00677a]">Sobre mim</h2><p className="body-copy whitespace-pre-line break-words">{currentPet.description || "Em breve, mais informações sobre este pet."}</p></section>
                            <section className="space-y-4 rounded-2xl bg-[#daeef5] p-5 sm:p-6" aria-labelledby="energy-title">
                                <h2 id="energy-title" className="text-2xl text-[#00677a]">Nível de energia</h2>
                                <p className="text-lg">{energyLabels[currentPet.energyLevel] || "Não informado"}</p>
                                {energyLabels[currentPet.energyLevel] && <div className="flex gap-2" aria-hidden="true">{[0, 1, 2].map((level) => <span key={level} className={`h-3 flex-1 rounded-full ${level <= Number(currentPet.energyLevel) ? "bg-[#007f96]" : "bg-white"}`} />)}</div>}
                            </section>
                            <section className="space-y-4 rounded-2xl bg-[#daeef5] p-5 sm:p-6" aria-labelledby="behavior-title">
                                <h2 id="behavior-title" className="text-2xl text-[#00677a]">Comportamentos</h2>
                                <ul className="space-y-3"><StatusRow value={behavior.withDogs} positive="Se dá bem com cães" negative="Não se dá bem com cães" /><StatusRow value={behavior.withChildren} positive="Se dá bem com crianças" negative="Não se dá bem com crianças" /><StatusRow value={behavior.withAnimals ?? behavior.withCats} positive="Se dá bem com outros animais" negative="Não se dá bem com outros animais" /></ul>
                            </section>
                            <section className="space-y-4 rounded-2xl bg-[#daeef5] p-5 sm:p-6" aria-labelledby="health-title">
                                <h2 id="health-title" className="text-2xl text-[#00677a]">Saúde</h2>
                                <ul className="space-y-3"><StatusRow value={health.vaccinated} positive="Vacinado" negative="Não vacinado" /><StatusRow value={health.dewormed} positive="Vermifugado" negative="Não vermifugado" /><StatusRow value={health.castrated ?? currentPet.isCastrated} positive="Castrado" negative="Não castrado" /></ul>
                            </section>
                        </div>
                    </div>
                </>}
            </main>
            {contactType && <Modal title={contactType === "sponsor" ? "Apadrinhar" : "Adotar"} onClose={closeModal}>
                <p className="mb-6 text-lg leading-relaxed">Ao continuar, você será redirecionado para o WhatsApp da responsável pela {contactType === "sponsor" ? "ONG para conversar sobre o apadrinhamento" : "adoção"}.</p>
                <a href={`https://wa.me/5541996602943?text=${encodeURIComponent(contactMessage)}`} target="_blank" rel="noopener noreferrer" className="primary-button w-full"><img src="/WhatsApp_icon.png" className="h-7 w-7 shrink-0 object-contain" alt="" />Continuar no WhatsApp<span className="sr-only"> (abre em nova aba)</span></a>
            </Modal>}
            <Footer />
        </div>
    );
};
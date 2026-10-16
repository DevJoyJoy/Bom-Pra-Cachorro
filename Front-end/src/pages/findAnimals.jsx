import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PageState } from "../components/pageState";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { getFirebaseClient } from "../lib/firebaseClient";

export const FindAnimals = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [attempt, setAttempt] = useState(0);
    useEffect(() => {
        let active = true;
        const fetchPets = async () => {
            try {
                const { db } = await getFirebaseClient();
                const snapshot = await getDocs(collection(db, "pets"));
                if (active) setPets(snapshot.docs.map((document) => ({ ...document.data(), id: document.id })));
            } catch (cause) {
                console.error(cause);
                if (active) setError("Não foi possível carregar os animais. Tente novamente em instantes.");
            } finally { if (active) setLoading(false); }
        };
        fetchPets();
        return () => { active = false; };
    }, [attempt]);
    const retry = () => { setError(""); setLoading(true); setAttempt((value) => value + 1); };

    return (
        <div className="page-shell">
            <Header />
            <main id="main-content" className="page-container section-space" aria-busy={loading}>
                <h1 className="page-title mb-8">Encontre seu novo amigo</h1>
                {loading || error || !pets.length ? <PageState loading={loading} error={error} empty="Nenhum animal disponível no momento. Volte em breve!" onRetry={retry} /> :
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                        {pets.map((pet) => <Link key={pet.id} to={`/DetailsPet/${pet.id}`} className="group min-w-0 rounded-2xl border border-[#b6e7ef] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative aspect-square overflow-hidden rounded-xl bg-[#daeef5]">
                                <img src="/fundo_grid_pet.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
                                <img src={pet.images?.[0] || "/exampleDog.jpg"} alt={pet.name || "Animal disponível para adoção"} loading="lazy" className="absolute inset-[6%] h-[88%] w-[88%] rounded-xl object-cover transition-transform group-hover:scale-105" />
                            </div>
                            <div className="space-y-1 p-3">
                                <h2 className="pet-name text-2xl text-[#00677a]">{pet.name || "Pet sem nome"}</h2>
                                {pet.birthDate && <p className="break-words">Nascimento: {pet.birthDate}</p>}
                                <span className="mt-2 inline-block text-[#00677a] underline">Conheça este pet <span aria-hidden="true">→</span></span>
                            </div>
                        </Link>)}
                    </div>}
            </main>
            <Footer />
        </div>
    );
};
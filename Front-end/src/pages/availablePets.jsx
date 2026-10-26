import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PageState } from "../components/pageState";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getFirebaseClient } from "../lib/firebaseClient";

export const AvailablePets = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [attempt, setAttempt] = useState(0);
    const [deletingId, setDeletingId] = useState(null);
    useEffect(() => {
        let active = true;
        const loadPets = async () => {
            try {
                const { db } = await getFirebaseClient();
                const snapshot = await getDocs(collection(db, "pets"));
                if (active) setPets(snapshot.docs.map((document) => ({ ...document.data(), id: document.id })));
            } catch (cause) {
                console.error(cause);
                if (active) setError("Não foi possível carregar os animais. Tente novamente em instantes.");
            } finally { if (active) setLoading(false); }
        };
        loadPets();
        return () => { active = false; };
    }, [attempt]);
    const retry = () => { setError(""); setLoading(true); setAttempt((value) => value + 1); };
    const confirmDelete = async (petId, petName) => {
        const result = await Swal.fire({
            titleText: `Deletar ${petName}?`, text: "Você não poderá reverter esta ação!", icon: "warning", showCancelButton: true,
            confirmButtonColor: "#972222", cancelButtonColor: "#007f96", confirmButtonText: "Sim, deletar!", cancelButtonText: "Cancelar", reverseButtons: true,
        });
        if (!result.isConfirmed) return;
        setDeletingId(petId);
        try {
            const { db } = await getFirebaseClient();
            await deleteDoc(doc(db, "pets", petId));
            setPets((previous) => previous.filter((pet) => pet.id !== petId));
            await Swal.fire({ title: "Deletado!", text: "O pet foi deletado da lista.", icon: "success", timer: 2000, showConfirmButton: false });
        } catch (cause) {
            console.error(cause);
            await Swal.fire({ title: "Erro!", text: "Erro ao deletar pet. Tente novamente.", icon: "error" });
        } finally { setDeletingId(null); }
    };

    return (
        <div className="page-shell">
            <Header />
            <main id="main-content" className="page-container section-space" aria-busy={loading}>
                <h1 className="page-title mb-8">Editar animais disponíveis</h1>
                {loading || error || !pets.length ? <PageState loading={loading} error={error} empty="Nenhum animal cadastrado no momento." onRetry={retry} /> :
                    <ul className="space-y-4">
                        {pets.map((pet) => <li key={pet.id} className="grid min-w-0 grid-cols-[5rem_minmax(0,1fr)] items-center gap-4 rounded-2xl bg-[#f1f1f1] p-4 shadow-sm sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:gap-6">
                            <img src={pet.images?.[0] || "/dog_WhoWeAre.png"} className="aspect-square w-full rounded-xl object-cover" alt={pet.name || "Pet"} loading="lazy" />
                            <div className="min-w-0 space-y-1 break-words">
                                <h2 className="pet-name text-xl font-semibold sm:text-2xl">{pet.name || "Pet sem nome"}</h2>
                                <p>Porte: {pet.size || "Não informado"}</p>
                                <p>Sexo: {pet.sex || "Não informado"}</p>
                            </div>
                            <div className="col-span-2 flex flex-wrap gap-3 sm:col-span-1">
                                <Link to={`/Register/${pet.id}`} aria-label={`Editar ${pet.name}`} className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#626262] px-4 py-2 text-white hover:bg-[#444] sm:flex-none"><i className="bi bi-pencil" aria-hidden="true" />Editar</Link>
                                <button type="button" disabled={deletingId !== null} onClick={() => confirmDelete(pet.id, pet.name)} aria-label={`Excluir ${pet.name}`} className="flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#972222] px-4 py-2 text-white hover:bg-[#661616] sm:flex-none"><i className="bi bi-trash" aria-hidden="true" />{deletingId === pet.id ? "Excluindo…" : "Excluir"}</button>
                            </div>
                        </li>)}
                    </ul>}
            </main>
            <Footer />
        </div>
    );
};
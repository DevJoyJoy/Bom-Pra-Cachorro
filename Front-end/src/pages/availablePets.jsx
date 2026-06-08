import { Header } from "../components/header";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export const AvailablePets = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        loadPets();
    }, []);

    const loadPets = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "pets"));

            const petsList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setPets(petsList);
        } catch (error) {
            console.error(error);
        }
    };

    const confirmDelete = (petId, petName) => {
        Swal.fire({
            title: `Deletar ${petName}?`,
            text: "Você não poderá reverter esta ação!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#972222",
            cancelButtonColor: "#0097b2",
            confirmButtonText: "Sim, deletar!",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
            borderRadius: "1rem",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteDoc(doc(db, "pets", petId));

                    setPets((prev) => prev.filter((pet) => pet.id !== petId));

                    Swal.fire({
                        title: "Deletado!",
                        text: "O pet foi deletado da lista.",
                        icon: "success",
                        timer: 2000,
                        showConfirmButton: false,
                    });
                } catch (error) {
                    console.error(error);

                    Swal.fire({
                        title: "Erro!",
                        text: "Erro ao deletar pet.",
                        icon: "error",
                    });
                }
            }
        });
    };

    return (
        <div className="flex flex-col bg-white 
        w-full h-max 
        md:h-auto">
            {/* Header */}
            <Header />

            {/* White box */}
            <div className="flex flex-col items-center justify-start p-3
        w-auto h-[88vh] max-h-[95vh] 
        lg:
        ">
                <h1 className="pt-3 lg:pb-3 font-bold
            text-2xl 
            md:text-4xl 
            lg:text-3xl">
                    Editar animais disponíveis
                </h1>

                {/* Animal box*/}
                <div className="flex flex-col mt-3 gap-4 items-center
            w-full h-max py-8 px-2">
                    {pets.map((pet) => (
                        <div
                            key={pet.id}
                            className="bg-[#e7e7e7] rounded-2xl gap-2 shadow-xl flex flex-row w-full h-28"
                        >
                            <img
                                src={pet.images?.[0] || "/dog_WhoWeAre.png"}
                                className="rounded-2xl h-full w-28 object-cover"
                                alt=""
                            />

                            <div className="flex flex-col text-[80%] py-3 pl-2">
                                <p className="font-semibold mb-1 text-xl lg:text-xl">
                                    {pet.name}
                                </p>

                                <p className="text-lg lg:text-xl">
                                    Porte: {pet.size}
                                </p>

                                <p className="text-lg lg:text-xl">
                                    Sexo: {pet.sex}
                                </p>
                            </div>

                            <div className="flex flex-col justify-between md:flex-row gap-2 ml-auto p-3">
                                <button
                                    onClick={() => navigate(`/details/${pet.id}`)}
                                    className="bg-[#868585] text-white flex items-center justify-center p-1 rounded-[30%] cursor-pointer hover:bg-[#5f5f5f]
                                        w-10 h-full md:h-10 lg:w-10"
                                >
                                    <i className="bi-pencil"></i>
                                </button>

                                <button
                                    onClick={() => confirmDelete(pet.id, pet.name)}
                                    className="bg-[#972222] text-white flex items-center justify-center p-1 rounded-[30%] cursor-pointer hover:bg-[#661616]
                                        w-10 h-full md:h-10 lg:w-10"
                                >
                                    <i className="bi-trash text-bg-danger text-lg"></i>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

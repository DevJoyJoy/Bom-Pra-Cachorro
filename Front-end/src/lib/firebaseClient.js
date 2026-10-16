// Keep the UI usable when the local, gitignored Firebase configuration is absent.
// The existing configuration should export the Firebase auth/db instances.
const configurations = import.meta.glob("../../firebaseConfig.{js,ts}");

export const getFirebaseClient = async () => {
    const load = Object.values(configurations)[0];
    if (!load) throw new Error("O serviço está indisponível no momento. Tente novamente mais tarde.");
    return load();
};
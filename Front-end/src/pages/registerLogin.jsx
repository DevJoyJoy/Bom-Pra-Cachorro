import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirebaseClient } from "../lib/firebaseClient";

export const RegisterLogin = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        if (submitting) return;
        setError("");
        setSubmitting(true);
        try {
            const { auth, db } = getFirebaseClient();
            let email = username.trim();
            if (!email.includes("@")) {
                const snapshot = await getDocs(query(collection(db, "usuarios"), where("username", "==", email)));
                email = snapshot.docs[0]?.data().email;
            }
            if (!email) { setError("Usuário ou senha inválidos."); return; }
            await signInWithEmailAndPassword(auth, email, senha);
            navigate("/Register");
        } catch (cause) {
            console.error(cause);
            setError(cause.message?.startsWith("Firebase config is missing:")
                ? cause.message
                : "Não foi possível entrar. Verifique seus dados e tente novamente.");
        } finally { setSubmitting(false); }
    };

    return (
        <div className="page-shell">
            <Header />
            <main id="main-content" className="page-container grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-16">
                <section className="mx-auto w-full max-w-md">
                    <h1 className="page-title mb-4">Cadastro de animais</h1>
                    <p className="body-copy mb-8">Faça login para realizar o cadastro de animais!</p>
                    <form onSubmit={handleLogin} className="space-y-5" aria-busy={submitting}>
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-lg">E-mail ou usuário</label>
                            <input id="username" name="username" autoComplete="username" autoCapitalize="none" required value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Digite seu e-mail ou usuário" className="form-input" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-lg">Senha</label>
                            <input id="password" name="password" autoComplete="current-password" required type={show ? "text" : "password"} value={senha} onChange={(event) => setSenha(event.target.value)} placeholder="Digite sua senha" className="form-input" />
                            <button type="button" aria-controls="password" aria-pressed={show} className="min-h-11 rounded-lg px-2 text-[#00677a] underline" onClick={() => setShow(!show)}>{show ? "Ocultar senha" : "Mostrar senha"}</button>
                        </div>
                        {error && <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">{error}</p>}
                        <button disabled={submitting} className="primary-button arturo w-full text-xl" type="submit">{submitting ? "Entrando…" : "Entrar"}</button>
                    </form>
                </section>
                <img src="/DogLogin.png" alt="" className="hidden max-h-[38rem] w-full rounded-3xl object-contain lg:block" />
            </main>
            <Footer />
        </div>
    );
};
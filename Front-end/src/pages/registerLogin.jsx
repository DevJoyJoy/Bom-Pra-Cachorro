import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { useState } from "react";

export const RegisterLogin = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      // busca email no doc do usuario, procurando pelo username
      const q = query(
        collection(db, "usuarios"),
        where("username", "==", username),
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setResponse("Usuário não encontrado.");
        return;
      }
      const userData = querySnapshot.docs[0].data();

      const email = userData.email;
      await signInWithEmailAndPassword(auth, email, senha);

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login.");
    }
  };

  return (
    <div className="flex flex-col
      h-full w-full
      lg:h-[91vh] lg:w-full">
      {/* Header */}
      <Header />

      {/* Main content box */}
      <div className="flex
        w-screen h-[91vh] items-center justify-center
        lg:flex-row">
          {/* Texts box */}
          <div className="flex flex-col items-center justify-center 
            lg:h-[91vh] lg:w-[70%]"
            >
            <p className="text-3xl lg:text-3xl md:text-5xl">Cadastro de animais:</p>
            <br />
            <p className=" text-2xl lg:text-2xl md:text-3xl text-center">Faça login para realizar o cadastro de animais!</p>
            <br />
            <br />

            {/* Inputs box */}
            <div className="flex flex-col">
              <p className="text-xl lg:text-xl md:text-3xl">Usuário</p>
              <input type="text" name="" id="" placeholder="Digite seu usuário:" className="bg-[#E7E7E7] p-[0.8vh] rounded-xl
                lg:w-[18vw] lg:text-xl
                md:text-2xl"/>
              <br />
              <p className="text-xl lg:text-xl md:text-3xl">Senha
              </p>
              <input type={show? "text" : "password"} name="" id="" placeholder="Digite sua senha:" className="bg-[#E7E7E7] p-[0.8vh] rounded-xl
                lg:w-[18vw] lg:text-xl
                md:text-2xl"/>
              <button className="md:text-xl" onClick={() => setShow(!show)}> {show ? "Ocultar senha" : "Mostrar senha"}
              </button>
              <br />
              <br />
              <button onClick={() => navigate('/Register')} className="arturo bg-[#0097b2] text-white rounded-xl cursor-pointer font-bold hover:bg-[#015b6b] p-[1vh] text-2xl">Entrar</button>
            </div>
          </div>
          {/* Image (only on desktop)*/}
          <img src="/DogLogin.png" alt="" className="h-0 w-0
            md:h-0 md:w-0
            lg:h-[91vh] lg:w-[35%]
            "/>
      </div>
    </div>
  );
};

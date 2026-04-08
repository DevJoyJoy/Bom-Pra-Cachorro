import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()

    return(
        <>
        <div className="h-[9vh] w-full bg-[#ff66c4] flex justify-between items-center text-center text-white text-4xl font-arturo p-[1%]">
           <section className="flex gap-4 text-center items-center justify-center ">
               <img onClick={() => navigate("/")} src="../public/icon paw.png" alt="" className="w-[4vw] mb-[2]"/>
               <h1>Bom pra Cachorro</h1>
           </section>
           <section className="flex gap-4 text-lg">
            <Link to="/Pets"> Adote </Link>
            <Link to="/Help">Como Ajudar</Link>
            <Link to="/LearnMore"> Saiba Mais </Link>
           </section>
        </div>
        </>
    )
}
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <>
        <div className="h-[8vh] w-full bg-[#ff66c4] flex justify-between items-center px-4 text-white text-4xl font-arturo">
           <section className="flex gap-4">
               <img src="../public/icon paw.png" alt="" className="w-[4vw]"/>
               <h1>Bom pra Cachorro</h1>
           </section>
           <section className="flex gap-4 text-lg">
            <Link to="/Pets"> Adote </Link>
            <Link to="">Como Ajudar</Link>
            <Link to=""> Saiba Mais </Link>
           </section>
        </div>
        </>
    )
}
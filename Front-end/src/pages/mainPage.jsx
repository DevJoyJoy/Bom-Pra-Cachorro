import { useState, useEffect } from "react";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const MainPage = () => {

   const images = ["/dogo_teste.png", "/dogo_teste.png", "/dogo_teste.png"];
   const [current, setCurrent] = useState(0);

   const nextSlide = () => {
       setCurrent((prev) => (prev + 1) % images.length);
   };

   const prevSlide = () => {
       setCurrent((prev) =>
           prev === 0 ? images.length - 1 : prev - 1
       );
   };

   useEffect(() => {
       const interval = setInterval(nextSlide, 3000);
       return () => clearInterval(interval);
   }, []);

   return (
       <>
       {/* Header */}
       <Header/>

       {/* Hero */}
       <div className="w-full h-[65vh] bg-[#ff66c4] relative overflow-hidden flex items-center justify-between px-10">
           <section className="ml-[5%] z-10">
               <h1 className="text-9xl text-white">Me <br/>Adota</h1>
               <button className="w-[12vw] bg-white rounded-2xl text-2xl p-[1%] mt-[10%]">
                   Adotar!
               </button>
           </section> 

           <div className="h-full w-[40%] bg-[#ffef63] rounded-full mt-[10%] relative z-0"></div>

           {/* cachorro */}
           <img
               src="/Dog Pirata.png"
               alt=""
               className="absolute right-[5%] bottom-0 w-[35%] z-20"
           />
       </div>

       {/* Segunda seção */}
       <div className="bg-white w-full h-[80vh] flex justify-center items-center px-10 gap-[15%]">
          
           {/* Card Conheça mais */}
           <section>
               <div className="bg-[#0097b2] text-white text-3xl w-[30vw] h-[10vh] flex items-center justify-center rounded-3xl rounded-b-none">
                   <h1>Quem Somos?</h1>
               </div>

               <div className="border-2 border-[#0097b2] text-2xl w-[30vw] h-[40vh] flex flex-col items-center justify-center rounded-3xl rounded-t-none">
                   <h1 className="text-3xl">Bom pra Cachorro!</h1>

                   <h1 className="m-[7%] text-center">
                       Somos uma ONG de Curitiba que cuida de mais de 20 animais disponíveis para adoção!
                   </h1>

                   <button className="bg-[#ff66c4] hover:bg-[#ff85d1] p-[3%] text-white rounded-2xl">Conheça mais</button>
               </div>
           </section>       

           {/* CARROSSEL */}
           <section className="w-[23%]">
               <div className="relative w-full overflow-hidden rounded-2xl">
                  
                   {/* Slides */}
                   <div
                       className="flex transition-transform duration-500"
                       style={{ transform: `translateX(-${current * 100}%)` }}
                   >
                       {images.map((img, index) => (
                           <img
                               key={index}
                               src={img}
                               className="w-full flex-shrink-0"
                               alt=""
                           />
                       ))}
                   </div>
               </div>

               {/* BOLINHAS */}
               <div className="flex justify-center gap-2 mt-4">
                   {images.map((_, index) => (
                       <div
                           key={index}
                           onClick={() => setCurrent(index)}
                           className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                               ${current === index
                                   ? "bg-[#ff66c4] scale-125"
                                   : "bg-gray-300 hover:bg-gray-400"}
                           `}
                       />
                   ))}
               </div>
           </section>
       </div>

       {/* Terceira sessão */}
       <div className="bg-[#0097b2] w-full h-[80vh] flex justify-center items-center px-10 gap-[6%]">
            <section>
                <img src="../public/polaroid_dog.png" alt="" className="w-[90%]"/>
            </section>

            <section className="flex flex-col gap-6">
                <h1 className="text-5xl text-white">Saiba como ajudar a ONG</h1>
                <h1 className="text-2xl text-white">Se voce ama os animais tanto quanto a gente, saiba que pode fazer a diferença!</h1>
                <h1 className="text-2xl text-white">Com a sua contribuição, conseguimos oferecer alimentacão, cuidados veterinários e muito carinho para os animaiszinhos.</h1>
                
                <button className="self-start p-[3%] w-[15vw] text-[#0097b2] text-3xl rounded-4xl bg-white">Contribua!</button>
            </section>
       </div>
  
       {/* Footer */}
       <Footer/>
       </>
   );
};

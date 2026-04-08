import { useState, useEffect } from "react";

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
       <div className="h-[8vh] w-full bg-[#ff66c4] flex justify-between items-center px-4 text-white text-4xl font-arturo">
           <section className="flex gap-4">
               <img src="/icon paw.png" alt="" className="w-[4vw]"/>
               <h1>Bom pra Cachorro</h1>
           </section>
           <section className="flex gap-4 text-lg">
               <a href="">Adote</a>
               <a href="">Como Ajudar</a>
               <a href="">Saiba mais</a>
           </section>
       </div>

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
       <div className="bg-white w-full h-[90vh] flex justify-center items-center px-10 gap-[15%]">
          
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
           <section className="w-[30%]">
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
       <div className="bg-[#0097b2] w-full h-[90vh] flex justify-center items-center px-10 gap-[15%]">

       </div>
  
       {/* Footer */}
       <div className="bg-[#f3df2a] w-full h-[120px] flex items-center justify-between p-5">
           <section className="text-white text-sm md:text-xl flex flex-col">
               <button>Home</button>
               <button>Como ajudar</button>
               <button>Perguntas gerais</button>
           </section>

           <img src="/icon paw.png" alt="" className="h-10 md:h-20"/>

           <section className="text-white text-sm md:text-xl flex flex-col items-end text-right">
               <button>Adotar</button>
               <button>Nossa história</button>
               <button>@bompracachorro</button>
               <h1>41 9 9660-2943</h1>
           </section>
       </div>
       </>
   );
};

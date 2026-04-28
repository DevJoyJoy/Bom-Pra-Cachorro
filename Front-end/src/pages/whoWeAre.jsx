import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const WhoWeAre = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            {/* Header */}
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            {/* Blue box of who we are */}
            <div className="bg-[#b6e7ef]
            lg:w-full lg:h-[90vh]">
                <div className="absolute text-[#4b4b4b] 
                lg:w-[42vw] lg:h-[30vh] lg:self-start lg:justify-self-end lg:mt-[28vh]">
                    <p className="lg:text-5xl">Quem somos</p>
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="lg:text-xl">Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço. Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.</p>
                    </div>
                </div>
            </div>

            {/* White box with pink portal of who we are */}
            <div className="flex flex-row items-end justify-around relative
            lg:w-full lg:h-[90vh]">
                <div className="atext-[#4b4b4b] 
                lg:mb-[28vh] lg:w-[30vw]">
                    <p className="lg:text-5xl">Quem somos</p>
                    <img src="" alt="" />
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="lg:text-xl">Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço. Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.</p>
                    </div>
                </div>
                <div className="bg-[#e13ea7]
                lg:w-[33vw] lg:h-[80vh] rounded-t-[300px]">

                </div>
            </div>




            {/* Footer */}
            <Footer open={menuOpen} setOpen={setMenuOpen}></Footer>
        </>
    )
}
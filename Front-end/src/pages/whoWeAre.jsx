import { useState, useEffect } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const WhoWeAre = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>

            {/* Blue box of who we are */}
            <div className="bg-[#b6e7ef] w-full h-[30vh] lg:h-[90vh] flex items-center justify-end px-[5vw]">
                <div className="text-[#4b4b4b] w-[55vw] lg:w-[42vw]">
                    <p className="text-xl lg:text-5xl font-bold">Quem somos</p>
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="text-[85%] lg:text-xl">
                            Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.
                            Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.
                        </p>
                    </div>
                </div>
            </div>

            {/* White box with pink portal of who we are */}
            <div className="w-full h-[30vh] lg:h-[90vh] flex items-center justify-between px-[5vw]">
                <div className="text-[#4b4b4b] w-[50vw] lg:w-[42vw]">
                    <p className="text-xl lg:text-5xl font-bold">Quem somos</p>
                    <br />
                    <div className="lg:w-[30vw]">
                        <p className="text-[85%] lg:text-xl">
                            Esse texto é meramente ilustrativo. No Bom Pra Cachorro, transformamos abandono em recomeço.
                            Cuidamos de cães que esperam apenas por uma chance de amar e ser amados.
                        </p>
                    </div>
                </div>

                <div className="bg-[#e13ea7] rounded-t-[300px]
                    w-[30vw] h-[20vh] 
                    lg:w-[33vw] lg:h-[80vh]">
                </div>

            </div>




            {/* Footer */}
            <Footer open={menuOpen} setOpen={setMenuOpen}></Footer>
        </>
    )
}
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
            




            {/* Footer */}
            <Footer open={menuOpen} setOpen={setMenuOpen}></Footer>
        </>
    )
}
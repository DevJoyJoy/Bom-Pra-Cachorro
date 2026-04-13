import { useState, useEffect } from "react";
import { Header } from "../components/header";

export const LearnMore = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <>
            <Header open={menuOpen} setOpen={setMenuOpen}></Header>
        </>
    )
}
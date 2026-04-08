import { Header } from "../components/header"
import { Footer } from "../components/footer"

export const FindAnimals = () => {
    return(
        <>
        <div className="w-full min-h-screen flex flex-col">
            {/* Header */}
            <Header/>

            {/* Box title */}
            <div className="w-[90%] m-5">
                <h1 className="md:text-2xl">Encontre seu novo amigo</h1>
            </div>

            {/* Box for all the animals */}
            <div className="w-full flex flex-1 items-center justify-center">
                <div className="w-[90%] h-[90%] flex flex-wrap m-5 items-center justify-center gap-3">
                    {/* Example of cards for the pets*/}
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    <div className="h-[25%] w-[30%]">
                        <div className="w-full h-full bg-cyan-300 rounded-2xl rotate-45"></div>
                        <img src="../exampleDog.jpg" alt="" className="rounded-2xl w-full z-1"/>
                        <h1>Doguinho</h1>
                        <h1>3 anos</h1>
                    </div>
                    
                </div>
            </div>

            {/* Futer */}
            <Footer/>
        </div>
        </>
    )
}
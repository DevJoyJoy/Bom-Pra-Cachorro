import { Footer } from "../components/footer"
import { Header } from "../components/header"

export const DetailsPetPage = () => {
    return (
        <div id="screen" className="w-full min-h-screen flex flex-col items-center">
            <Header></Header>
            
            <div id="container" className="w-[90%] h-100% flex-1">
                <div id="name-pet" className="flex flex-row items-center">
                <img src="../../public/patinha.png" className="h-6 mr-4"></img>
                <h1 className="my-5 text-2xl">Rogerinho</h1>
                </div>
                <div id="col-1">
                    <img src="../../public/exampleDog.jpg" className="rounded-2xl border-5 border-[#0097b2]"></img>
                </div>
                <div id="col-2"></div>
                

                
            </div>

            <Footer></Footer>
        </div>
    )
}
//import { useNavigate } from "react-router-dom"

export const MainPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return(
        <div className='bg-[#fef6d8] min-h-screen flex flex-col'>
            <div className='bg-[#d63e9c] w-full h-20 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Bom pra cachorro</h1>
            </div>
            
            <div className="bg-[#f1c048] h-[20vh] w-[35vw] rounded-3xl ml-20 mt-20">
                <h1 className="text-4xl  ml-5 mt-5">Quem somos?</h1>
                <div className="bg-white h-[50vh] w-[50vw] mt-5 rounded-3xl">

                </div>
            </div>
        </div>
    )
}


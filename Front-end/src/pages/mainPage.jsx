import { useNavigate } from "react-router-dom"

export const mainPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return(
        <div className='bg-pink-100 min-h-screen flex flex-col'>
            <div className='bg-pink-500 w-full h-23 flex flex-row items-center px-4'>
                <img src="../Monokuma.gif" alt="" className="h-[98%]" />
                <h1 className="ml-4 font-sans text-white text-3xl">Danganronpa</h1>
            </div>
            <div className="h-[90%] w-full flex p-6 gap-6">

                <div className="flex flex-col bg-pink-200 rounded-lg p-6 w-2/3">
                    <p className="mb-4">
                        Danganronpa (ダンガンロンパ Dangan Ronpa in the original Japanese) is a Japanese 
                        video game franchise developed and published originally by Spike (later merged 
                        with Chunsoft as Spike Chunsoft) and localized by NIS America in 2014 and later 
                        by Spike Chunsoft in 2020. The series currently consists of three main titles and 
                        two major spin-off games. The franchise also includes some anime, manga, 
                        mobile games, and light novel spin-offs based on the Danganronpa universe and 
                        characters.
                    </p>
                    <p>The series revolves around an exclusive, government-funded high school called Hope's
                     Peak Academy which, every year, selects "Ultimate" students who are at the top of their 
                     field, and one average "Ultimate Lucky Student" who is chosen by lottery. However, when average 
                     student Makoto Naegi arrives at the school, he loses consciousness, and when he wakes up discovers
                     that he and his 14 classmates have been trapped within the school. Headmaster Monokuma, a 
                     sadistic robot bear, informs the students that they will be forced to live within the school
                     forever, with only one way to leave: murdering another student and getting away with it.

                     When a crime scene is discovered, a Class Trial is held, in which the remaining students must 
                     decide amongst themselves who the murderer is. If the students successfully discover the murderer,
                     the culprit will be executed, and the killing game continues. However, if they guess incorrectly, 
                     the culprit will be able to leave the school, but the other students will be executed.
                     </p>
                     <br />
                    <button 
                        onClick={() => navigate("/Games")} 
                        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition w-fit"
                    >
                        List of Games
                    </button>
                </div>

                <div className="flex justify-center items-center w-1/3 bg-pink-200 rounded-lg">
                    <img src="../danganronpadecadence.webp" alt="" className="rounded-lg max-h-[450px]"/>
                </div>

                </div>
        </div>
    )
}


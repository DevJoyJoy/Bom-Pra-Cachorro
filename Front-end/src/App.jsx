import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/mainPage"
import { RegisterLogin } from "./pages/registerLogin"
import { RegisterPet } from "./pages/registerPet"
import { FindAnimals } from "./pages/findAnimals"
import { Help } from "./pages/helpPage"
import { DetailsPetPage } from "./pages/detailsPet"
import { WhoWeAre } from "./pages/whoWeAre"
import { RegisterPet2 } from "./pages/registerPet2"
import { AvaliablePets } from "./pages/availablePets"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/Login' element={<RegisterLogin />}></Route>
          <Route path='/Register' element={<RegisterPet />}></Route>
          <Route path="/Register2" element={<RegisterPet2 />}></Route>
          <Route path="/Pets" element={<FindAnimals />}></Route>         
          <Route path="/DetailsPet" element={<DetailsPetPage/>}></Route>
          <Route path="/Help" element={<Help />}></Route>
          <Route path="/WhoWeAre" element={<WhoWeAre />}></Route>
          <Route path="/EditPets" element={<AvaliablePets />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

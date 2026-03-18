import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/mainPage"
import { RegisterLogin } from "./pages/registerLogin"
import { RegisterPet } from "./pages/registerPet"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/Login' element={<RegisterLogin/>}></Route>
          <Route path='/Register' element={<RegisterPet/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

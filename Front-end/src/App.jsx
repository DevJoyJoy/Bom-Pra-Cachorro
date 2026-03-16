import { BrowserRouter, Routes, Route } from "react-router-dom"
import { mainPage } from "./pages/mainPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<mainPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

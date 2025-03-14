import { BrowserRouter , Route, Routes} from "react-router-dom"
import { LoginRegister } from "./pages/LoginRegister"
import { Notes } from "./pages/Notes"


function App() {

  return <BrowserRouter>
      <Routes>
              <Route element={<Notes/>} path="/" />
              <Route element={<LoginRegister/>} path="/login" />
      </Routes>
  
  </BrowserRouter>
}

export default App

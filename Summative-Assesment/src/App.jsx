import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Landing } from "./pages/Landing"
import { About } from "./pages/About"
import { ProductProvider } from "./context/ProductProvider"
import './App.css'

function App() {
    return (
        <ProductProvider>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Landing" element={<Landing />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </ProductProvider>
    )
}

export default App
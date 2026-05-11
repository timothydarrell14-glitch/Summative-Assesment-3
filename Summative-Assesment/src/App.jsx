import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { Landing } from "./pages/Landing"
import { About } from "./pages/About"
import { ProductProvider } from "./context/ProductProvider"
import { AdminPortal } from "./pages/AdminPortal";
import './App.css'

function App() {
    return (
        <ProductProvider>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/AdminPortal" element={<AdminPortal />} />
            </Routes>
        </ProductProvider>
    )
}

export default App
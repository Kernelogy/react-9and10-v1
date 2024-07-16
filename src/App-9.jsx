import MyLayout from "./layouts/MyLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import NotFound from './pages/NotFound'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MyLayout />}>
                        <Route index element={<HomePage />}></Route>
                        <Route path="/contact" element={<ContactPage />}></Route>
                        <Route path="/about" element={<AboutPage />}></Route>
                        <Route path="/product" element={<ProductPage />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Route>                    
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App 
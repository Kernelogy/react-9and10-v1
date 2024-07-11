import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const MyLayout = () => {
    return (
        <>
            <Header />    
            <Outlet />
            <Footer />  
        </>
    )
}

export default MyLayout
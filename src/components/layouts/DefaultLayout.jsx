import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <div className='container'>

                <Header />
                <Outlet />
                <Footer />

            </div>
        </>
    )
}
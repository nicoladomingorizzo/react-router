import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
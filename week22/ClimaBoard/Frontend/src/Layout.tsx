import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./Layout.css"
export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

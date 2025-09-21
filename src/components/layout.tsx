import { Link, Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function Layout() {
    return (
        <div>
            <Header />
            <main className="flex flex-col justify-center">
                <Outlet />
            </main>

            <Footer />
        </div >

    )
}
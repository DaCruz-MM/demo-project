
import "./style.css"
import { Outlet, Link } from "react-router-dom"
import ToggleTheme from "../ToggleTheme";

export default function Layout() {

    return (
        <>
            <header id="Header" className="shadow">
                <nav id="navbar">
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/Signin">Cadastro</Link> </li>
                        <li> <Link to="/404">Page 404</Link> </li>
                    </ul>
                    <div id="navbar_menu">
                        <ToggleTheme/>
                    </div>
                </nav>
            </header>
            <main id="Main">
                <Outlet />
            </main>
            <footer id="Footer" className="shadow">
                <span id="Copyright">© 2025 Gustavo da Cruz Medeiros Moreira</span>
            </footer>
        </>
    )
}
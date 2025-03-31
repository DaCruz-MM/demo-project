import { useEffect, useState } from "react";
import sun from "./icons/sun.png"
import moon from "./icons/moon.png"
import "./style.css"

export default function ToggleTheme() {

    const [isDark, setIsDark] = useState(
        () => { if (localStorage.getItem("DL") === "01") return true; return false; }
    );

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
            localStorage.setItem("DL", "01");
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem("DL", "00");
        }
    }, [isDark])

    return (
        <button id="Theme-button" onClick={() => setIsDark(!isDark)}>
            {isDark ?
                <img src={moon} />
                :
                <img src={sun} />
            }
        </button>
    )
}
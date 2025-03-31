import "./style.css"
import warning from "./icon/warning.png"

export default function NoPage() {
    return (
        <div id="NoPage_Container">
            <div id="noPage_Card">
                <img src={warning} ></img>
                <h2 id="noPage_Text">Pagina Inexistente!</h2>
            </div>
        </div>
    )
}
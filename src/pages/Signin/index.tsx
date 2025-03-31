import "./style.css"
import { useState } from "react"
import Input from "../../components/Input"
import { Link } from "react-router-dom"

const regexUsername = /^[A-z0-9_-]{3,15}$/
//const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

export default function Signin() {

    const [error, setError] = useState({
        username: "",
        password: "",
    })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        var errors = {
            username: "",
            password: "",
        }
        if (!regexUsername.test(username)) 
            errors = { ...errors, username: "Nome de usuário invalido!" };
        if (!regexPassword.test(password))
            errors = { ...errors, password: "Senha invalida!" };
        if (username == "") errors = { ...errors, username: "Campo em branco!" };
        if (password == "") errors = { ...errors, password: "Campo em branco!" };
        setError(errors);
    }

    return (
        <div id="Signup_Container">
            <form id="Signin_Form">
                <Input
                    label="Nome de Usuário"
                    type="text"
                    name="username"
                    placeholder="Nome de Usuário"
                    value={username}
                    error={error.username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={password}
                    error={error.password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div id="Signin_Field">
                    <button onClick={handleSubmit}>confirmar</button>
                    <span>Não possui uma conta?</span>
                    <Link to="/Signup">Clique aqui</Link>
                </div>
            </form>
        </div>
    )
}
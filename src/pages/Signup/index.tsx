import "./style.css"
import { useState } from "react"
import Input from "../../components/Input"
import { Link } from "react-router-dom"

const regexUsername = /^[A-z0-9_-]{3,15}$/
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/

export default function Signup() {

    const [error, setError] = useState({
        username: "",
        email: "",
        password: "",
        rpassword: "",
    })
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rpassword, setRpassword] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        var errors = {
            username: "",
            email: "",
            password: "",
            rpassword: "",
        }
        if (!regexUsername.test(username)) 
            errors = { ...errors, username: "O seu nome de usuário:\
            \n ● deve conter entre 3 e 15 caracteres\
            \n ● não deve conter espaços, apenas ( _,- )\
            \n ● não deve conter outros caracteres especiais" };
        if (!regexEmail.test(email)) 
            errors = { ...errors, email: "Email invalido!" };
        if (!regexPassword.test(password))
            errors = { ...errors, password: "Sua senha deve conter:\
            \n ● no minimo 8 caracteres\
            \n ● caracteres maiusculos e minusculos\
            \n ● um numero e um caracter especial"};
        if (!(password === rpassword)) errors = { ...errors, rpassword: "As duas senhas são diferentes!" };
        if (username == "") errors = { ...errors, username: "Campo em branco" };
        if (email == "") errors = { ...errors, email: "Campo em branco" };
        if (password == "") errors = { ...errors, password: "Campo em branco" };
        setError(errors);
    }

    return (
        <div id="Signup_Container">
            <form id="Signup_Form">
                <Input
                    label="Nome de Usuário"
                    type="text"
                    value={username}
                    name="username"
                    placeholder="Nome de Usuário"
                    onChange={e => setUsername(e.target.value)}
                    error={error.username}
                />
                <Input
                    label="Email"
                    type="text"
                    value={email}
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    error={error.email}
                />
                <Input
                    label="Senha"
                    type="password"
                    value={password}
                    name="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                    error={error.password}
                />
                <Input
                    label="Repita a senha"
                    type="password"
                    value={rpassword}
                    name="rpassword"
                    placeholder="Repita a senha"
                    onChange={e => setRpassword(e.target.value)}
                    error={error.rpassword}
                />
                <div id="Signup_Field">
                    <button onClick={handleSubmit} >confirmar</button>
                    <span>Já possui uma conta?</span>
                    <Link to="/Signin">Clique aqui</Link>
                </div>
            </form>
        </div>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Signin" element={<Signin/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
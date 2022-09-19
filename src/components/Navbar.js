import React from "react"
import "./components/Navbar.css"

const Navbar = () =>{
    return <nav>
        <a>
            <img src="./public/logo192.png"/>
        </a>
        <a class="active" href="/">Home</a>
        <a href="/">News</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
    </nav>
}

export default Navbar;
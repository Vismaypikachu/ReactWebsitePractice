import React from "react"
import "./Navbar.css"

const Navbar = () =>{
    return <nav>
        <ul>
            <li>
                <a href="/">
                    <img src="public/logo192.png"/>
                </a>
            </li>
            <li>
                <a href="/">
                    Home
                </a>
            </li>
            <li>
                <a href="/">
                    News
                </a>
            </li>
            <li>
                <a href="/">
                    Contact
                </a>
            </li>
            <li>
                <a href="/">
                    About
                </a>
            </li>
        </ul>
    
    </nav>
}

export default Navbar;
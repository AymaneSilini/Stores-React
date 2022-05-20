import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../ressources/css/Sidebar.css'

export default props => {
    return (
        // Pass on our props
        <Menu {...props}>
            <a className="menu-item" href="/">
                Login
            </a>

            <a className="menu-item" href="/home">
                Home
            </a>

            <a className="menu-item" href="/fridge">
                Fridge
            </a>
        </Menu>
    );
};

import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import './Navbar.css'


class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-meu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>

                            </li>

                        )
                    })}

                </ul>
                <div className="buttons">
                    <a href="" className="btn btn-outline-info">
                        <i className="fa fa-sign-in me-1"></i>
                        Login
                    </a>
                    <a href="" className="btn btn-outline-info">
                        <i className="fa fa-user-plus me-1"></i>
                        Inscription
                    </a>
                    <div className="cart">
                        <span>
                            <i className="fa fa-shopping-cart me-1"></i>
                        </span>
                        <span> 0</span>
                    </div>
                </div>
            </nav >
        )
    }
}

export default Navbar
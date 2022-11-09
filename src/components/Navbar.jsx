import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar is-light" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" width="112" height="28" />
                </a>
            
                <a role="button" href="." className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                <a className="navbar-item" href="/">
                    Home
                </a>
                </div>
            
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <a className="button is-light" href="/logout">
                        Logout
                    </a>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;
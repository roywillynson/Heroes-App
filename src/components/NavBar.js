import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({ title }) => {
    return (
        <>
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item title py-2">
                            { title }
                        </Link>

                    </div>

                    <div className="navbar-menu">

                        <div className="navbar-start">

                            <NavLink exact activeClassName="is-active" className="navbar-item" to="/">
                                Marvel
                            </NavLink>

                            <NavLink exact activeClassName="is-active" className="navbar-item" to="/dc">
                                DC
                            </NavLink>

                            <NavLink exact activeClassName="is-active" className="navbar-item" to="/search">
                                Search Heroe
                            </NavLink>

                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    {/* <Link className="button is-primary" to="/login">
                                        <strong>Sign up</strong>
                                    </Link> */}
                                <Link className="button is-light" to="/login">
                                    Log out
                                </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
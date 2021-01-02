import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import AuthContext from '../auth/authContext'
import types from '../types/types';

const NavBar = ({ title }) => {

    const { user, dispatch } = useContext(AuthContext);
    const { name } = user;
    const history = useHistory();

    const handleLogout = () => {
        
        // 1. dispatch logout
        dispatch({
            type: types.LOGOUT
        })

        // Redirect to login
        history.replace('/login');
    }

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
                                    <span className="button is-primary">
                                        { name }
                                    </span> 
                                    <button className="button is-light" onClick={ handleLogout }>
                                        Log out
                                    </button>
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
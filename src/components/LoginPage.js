import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = ( ) => {

    const history = useHistory();

    const handleLogin = () => {
        history.replace('/');
    }
    return (
        <div className="container mt-6">
            <h1 className="title">Login Page</h1>
            <hr/>
            <button onClick={handleLogin} className="button is-info is-outlined is-medium">
                Login
            </button>
        </div>
    )
}

export default LoginPage

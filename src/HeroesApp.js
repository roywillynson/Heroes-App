import React,{ useReducer } from 'react';
import AppRouter from './routers/AppRouter';
import authReducer from './auth/authReducer';
import AuthContext from './auth/authContext';


const init = () => {

    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)


    return (
        <AuthContext.Provider value={ { user, dispatch } }>  
            <AppRouter /> 
        </AuthContext.Provider>
    )
};

export default HeroesApp
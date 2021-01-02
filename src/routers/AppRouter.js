import React, { useContext }  from 'react'
import {
    HashRouter as Router,
    Switch,
} from 'react-router-dom';
// Context
import AuthContext from '../auth/authContext';
// Components
import PrivateRoute from './PrivateRoute';
import PublicRoute from "./PublicRoute";
import RoutesWithNavBar from './RoutesWithNavBar';
// pages
import LoginPage from '../components/LoginPage';


const AppRouter = () => {

    // hooks
    const { user } = useContext(AuthContext)

    return (
        <Router>  
                <Switch>    
                    <PublicRoute exact path="/login" component={ LoginPage } isAuthenticated={ user.logged } />
                    <PrivateRoute 
                        path="/" 
                        component={ RoutesWithNavBar } 
                        isAuthenticated={ user.logged } 
                    />
                </Switch>
        </Router>
    )
};




export default AppRouter;

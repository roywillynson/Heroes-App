import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// Components
import LoginPage from '../components/LoginPage';
import RoutesWithNavBar from './RoutesWithNavBar';

const AppRouter = () => {
    return (
        <Router>  
            
                <Switch>    
                    <Route exact path="/login" component={ LoginPage }></Route>
                    <Route path="/" component={ RoutesWithNavBar }></Route>
                </Switch>
        </Router>
    )
}

export default AppRouter

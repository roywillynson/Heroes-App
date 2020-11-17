import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import DCPage from '../components/DCPage'
import HeroePage from '../components/HeroePage'
import MarvelPage from '../components/MarvelPage'

import NavBar from '../components/NavBar'
import SearchPage from '../components/SearchPage'

const RoutesWithNavBar = () => {
    return (
        <>
            <NavBar title="HeroesApp"/>

            <Switch>
                <Route exact path="/heroe/:heroeId" component={ HeroePage }></Route>
                <Route exact path="/search" component={ SearchPage }></Route>
                <Route exact path="/marvel" component={ MarvelPage }></Route>
                <Route exact path="/dc" component={ DCPage }></Route>

                <Redirect to="/marvel"></Redirect>
            </Switch>     
           
        </>
    )
}

export default RoutesWithNavBar

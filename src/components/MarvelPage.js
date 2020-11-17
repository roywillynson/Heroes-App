import React from 'react';
import HeroeList from './HeroeList';


const MarvelPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="title">Marvel Page</h1>
            <hr />
            <HeroeList publisher="Marvel Comics"/>
        </div>
    )
}

export default MarvelPage

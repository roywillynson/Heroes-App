import React from 'react'
import HeroeList from './HeroeList';

const DCPage = () => {
    return (
        <div className="container mt-5">
            <h1 className="title">DC Page</h1>
            <hr />
            <HeroeList publisher='DC Comics' />
        </div>
    )
}

export default DCPage

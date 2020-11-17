import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../utils/heroesUtils'
import HeroeCard from './HeroeCard';

const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [publisher])

    return (
        <>
            <div className="columns is-multiline fade-in">
                {heroes.map( heroe => (
                    <HeroeCard 
                        {...heroe}
                        key={ heroe.id }
                    /> 
                ))}
            </div>
        </>
    )
}

export default HeroeList

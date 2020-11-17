import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../utils/heroesUtils'

const HeroePage = ({ history }) => {

    const { heroeId } = useParams();

    const heroe = getHeroesById(heroeId)

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe;

    const handleReturn = ( ) => {

        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }


    return heroe ? 
    (
        <>
            <div className="container mt-6">
                <div className="columns is-multiline">
                    {/* Images */}
                    <div className="column is-4-desktop is-4-tablet">
                        <article className="image" style={ { minWidth: '100%',objectFit:'cover'} }>
                            <img src={ `/assets/heroes/${id}.jpg` } className="fade-in-left" alt={superhero} />
                        </article>
                    </div>
                    {/* Descripcion Del Heroe */}
                    <div className="column is-8-desktop is-8-tablet">
                        <h1 className="title">{superhero}</h1>
                        <ul>
                            <li className="mb-4"><b>Alter ego:</b> {alter_ego}</li>
                            <li className="mb-4"><b>Publisher:</b> {publisher}</li>
                            <li className="mb-4"><b>First appearance:</b> {first_appearance}</li>
                            <li className="mb-4"><b>Characters:</b> 
                            {
                                characters.split(',').map( character => 
                                    <a 
                                        href={`https://www.google.com/search?q=${ encodeURI(character) }`} 
                                        className="tag is-info is-light is-medium m-2" 
                                        target="_blank"
                                        rel="noreferrer"
                                        key={character}
                                    >
                                        {character}
                                    </a>
                                )
                            }
                            </li>
                        </ul>


                        <button 
                            className="button is-primary is-medium is-rounded mt-3 is-outlined"
                            onClick={ handleReturn }
                        >
                            ‹‹ Regresar
                        </button>
                    </div>
                </div>
            </div>
        </>

    ):(
        <Redirect to="/" />
    )
}

export default HeroePage

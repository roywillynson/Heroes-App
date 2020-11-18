import React from 'react';
import { Link } from 'react-router-dom';

const HeroeCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    isFullWidth
}) => {
    return (
        <div className={ isFullWidth ? "column px-0 fade-in-right" : "column is-4-desktop is-6-tablet"}>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image has-background-grey-light" style={ { width:'85px', maxWidth: '85px' } } >
                        <img src={`./assets/heroes/${ id }.jpg`} alt={ superhero } />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <div>
                            <strong className="is-size-5 has-text-weight-semibold">{ superhero }</strong>
                            <br/>
                            <p className="is-size-6">{ alter_ego }</p>
                            {alter_ego !== characters 
                                && <p className="is-size-6">{characters}</p>
                            }
                            <p>
                                <small className="has-text-grey">{ first_appearance }</small>
                            </p>
                            
                            <Link to={ `./heroe/${id}`}>M&aacute;s...</Link>
                        </div>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                       
                        </div>
                    </nav>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default HeroeCard

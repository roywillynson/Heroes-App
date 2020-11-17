import { heroes } from '../data/heroes';

const validPublishers = ['DC Comics', 'Marvel Comics'];

export const getHeroesByPublisher = ( publisher ) => {
    
    if( !validPublishers.includes( publisher ) ) 
        throw new Error(`Publisher "${publisher}" no es valido.`)

    return heroes.filter( heroe => heroe.publisher === publisher );
}

export const getHeroesById = ( id ) => {
    
    return heroes.find( heroe => heroe.id === id );
}

export const getHeroesByName = ( name='' ) => {

    return !name.trim() ? 
    [] : 
    heroes.filter( ({ superhero }) => 
        superhero
            .toLocaleLowerCase()
            .includes( name.toLocaleLowerCase() )
    );
}
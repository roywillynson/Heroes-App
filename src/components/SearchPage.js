import React, { useMemo } from 'react';
import { parse as parseQueryParams } from 'query-string';
import { useLocation } from 'react-router-dom';
// Hooks
import useForm from '../hooks/useForm';
// Components
import HeroeCard from './HeroeCard';
import { getHeroesByName } from '../utils/heroesUtils';



const SearchPage = ({ history }) => {
    // Hooks
    const location = useLocation(); // Location of URL
    const { q = '' } =  parseQueryParams(location.search); // Query Params of URL, ej: '?name=Juan' => { name: 'Juan' }

    const [ formValues, handleInputValue ] = useForm({ search: q });
    const { search } = formValues;

    // Filters heroes list for superhero name
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]) 

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${encodeURI(search)}`);
    }

    return (
        <div className="container mt-5">
            <h1 className="title">Search Page</h1>
            <hr/>
            <div className="columns">
                <div className="column is-5">

                    <form onSubmit={ handleSearch }>
                        <h2 className="subtitle mb-0">Search Form</h2>
                        <hr/>
                        <div className="fields">
                            <div className="control">
                                <input 
                                    autoComplete="off" 
                                    type="text" 
                                    className="input is-medium" 
                                    name="search" id="search" 
                                    placeholder="Search heroe..."
                                    value={ search }
                                    onChange={ handleInputValue }
                                />
                            </div>
                            <div className="control">
                                <button 
                                    type="submit"
                                    className="button is-info is-medium is-fullwidth is-outlined mt-3"
                                >
                                Search
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="column is-7">
                    <h2 className="subtitle">Results</h2>
                    <hr/>

                    { !q && 
                    (
                        <article className="message is-info fade-in-right">
                            <div className="message-body has-text-centered">
                                Search your favorite heroe😎 
                            </div>
                        </article>
                    )}

                    { (q && !heroesFiltered.length ) && 
                    (
                        <article className="message is-danger fade-in-right">
                            <div className="message-body has-text-centered">
                                Heroe <strong>"{ q }"</strong> not found!! 🙃 
                            </div>
                        </article>
                    )}

                    {
                        heroesFiltered.map( heroe => <HeroeCard isFullWidth key={heroe.id} {...heroe}></HeroeCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage

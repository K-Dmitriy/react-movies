import React, { useState, useEffect, useRef } from 'react';
import List from "../components/List";
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Service from '../services/Service';

function Main() {
    const [movies, setMovies] = useState([]);
    const [requestError, setRequestError] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const [search, setSearch] = useState('matrix');
    const [type, setType] = useState('all');
    const serviceRef = useRef(null);

    const processMoviesData = (data) => {
        if (data.Response !== 'False') {
            setMovies(data.Search);
            setIsLoad(true);
        } else {
            setRequestError(data.Error);
            setIsLoad(true);
        }
    };
        
    const handleChangeSearch = (evt) => {
        setIsLoad(false);
        setSearch(evt.target.value);
        setRequestError('');
    };

    const changeFilter = evt => {
        setType(evt.target.value);
    };

    useEffect(() => {
        serviceRef.current = new Service();
    }, [])

    useEffect(() => {
        if (type === 'all') {
            serviceRef.current.getMovie(search)
                .then(processMoviesData);
        } else {
            serviceRef.current.getMovieByType(search, type)
                .then(processMoviesData);
        }
    }, [search, type]);

    return (
        <main className="container content">
            <Search onChange={handleChangeSearch} search={search}/>
            <Filter onChange={changeFilter} type={type}/>
            {
                requestError
                    ? <h2 className="red-text text-darken-3">{requestError}</h2>
                    : isLoad
                        ? <List movies={movies} />
                        : <Preloader />
            }
        </main>
    );
}

export default Main;
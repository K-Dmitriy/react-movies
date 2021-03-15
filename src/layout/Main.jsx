import React, {Component} from 'react';
import List from "../components/List";
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Service from '../services/Service';

class Main extends Component {
    state = {
        movies: [],
        requestError: '',
        search: 'matrix',
        isLoad: false,
        type: 'all'
    }
    
    service = new Service();

    searchMovies = () => {
        if (this.state.type === 'all') {
            this.service.getMovie(this.state.search)
                .then(this.processMoviesData);
        } else {
            this.service.getMovieByType(this.state.search, this.state.type)
                .then(this.processMoviesData);
        }
    };

    processMoviesData = (data) => {
        if (data.Response !== 'False') {
            this.setState({ movies: data.Search, isLoad: true});
        } else {
            this.setState({ requestError: data.Error, isLoad: true});
        }
    };

    componentDidMount() {
        this.searchMovies();
    }
        
    handleChangeSearch = (evt) => {
        this.setState(() => {
            return { isLoad: false, search: evt.target.value, requestError: '' };
        }, this.searchMovies);
    };

    changeFilter = evt => {
        this.setState(() => {
            return { type: evt.target.value };
        }, this.searchMovies)
    };

    render() {
        const { movies, requestError, isLoad, search, type } = this.state;

        return (
            <main className="container content">
                <Search onChange={this.handleChangeSearch} search={search}/>
                <Filter onChange={(this.changeFilter)} type={type}/>
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
}

export default Main;
import React, {Component} from 'react';
import List from "../components/List";
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import Service from '../services/Service';

class Main extends Component {
    state = {
        movies: [],
        requestError: '',
        search: 'matrix',
        isLoad: false
    }
    
    service = new Service();

    componentDidMount() {
        this.service.getMovie(this.state.search)
            .then(data => {
                if (data.Response !== 'False') {
                    this.setState({ movies: data.Search, isLoad: true});
                } else {
                    this.setState({ requestError: data.Error, isLoad: true});
                }
            });
    }
        
    handleChange = (evt) => {
        this.setState(() => {
            return { isLoad: false, search: evt.target.value, requestError: '' };
        }, () => {
            this.service.getMovie(this.state.search)
                .then(data => {
                    if (data.Response !== 'False') {
                        this.setState({ movies: data.Search, isLoad: true});
                    } else {
                        this.setState({ requestError: data.Error, isLoad: true});
                    }
                });
        });
    };

    render() {
        const { movies, requestError, isLoad, search } = this.state;

        return (
            <main className="container content">
                <Search onChange={this.handleChange} search={search}/>
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
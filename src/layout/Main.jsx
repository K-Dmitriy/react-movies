import React, {Component} from 'react';
import List from "../components/List";
import Service from '../services/Service';

class Main extends Component {
    state = {
        movies: [],
        isLoad: false
    }
    
    service = new Service();

    componentDidMount() {
        this.service.getMovie()
            .then(data => {
                this.setState({ movies: data.Search, isLoad: true});
            });
    }

    render() {
        const { movies, isLoad } = this.state;

        return (
            <main className="container content">
                {
                    isLoad
                        ? <List movies={movies} />
                        : <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                }
            </main>
        );
    }
}

export default Main;
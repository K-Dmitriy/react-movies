const API_KEY = process.env.REACT_APP_API_KEY;

class Service {

    _apiBase = `https://www.omdbapi.com/?apikey=${API_KEY}`;

    async getMovie(movie) {
        const res = await fetch(`${this._apiBase}&s=${movie}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${`${this._apiBase}&s=${movie}`}, received ${res.status}`);
        }

        return await res.json();
    }

    async getMovieByType(movie, type) {
        const res = await fetch(`${this._apiBase}&s=${movie}&type=${type}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${`${this._apiBase}&s=${movie}&type=${type}`}, received ${res.status}`);
        }

        return await res.json();
    }
}

export default Service;
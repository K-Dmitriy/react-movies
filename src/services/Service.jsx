class Service {
    async getMovie(movie) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=1aa3e346&s=${movie}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${`http://www.omdbapi.com/?apikey=1aa3e346&s=${movie}`}, received ${res.status}`);
        }

        return await res.json();
    }

    async getMovieByType(movie, type) {
        const res = await fetch(`http://www.omdbapi.com/?apikey=1aa3e346&s=${movie}&type=${type}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${`http://www.omdbapi.com/?apikey=1aa3e346&s=${movie}&type=${type}`}, received ${res.status}`);
        }

        return await res.json();
    }
}

export default Service;
class Service {
    async getMovie(url = 'http://www.omdbapi.com/?apikey=1aa3e346&s=matrix') {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }
}

export default Service;
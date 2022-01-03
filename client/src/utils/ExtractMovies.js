export function getMovies(responses) {
    if (responses !== undefined) {
        const movies = responses.map(resp => {
            const {data} = resp;
            const movie = {
                id: data.id,
                year: data.year,
                title: data.title,
                rating: data.rating,
                image: data.poster,
                plot: data.plot,
                actors: data.cast.map(c => c.actor)
            }
            return movie
        });
        return movies;
    }
}

export function getMoviesFromImdb(responses) {
    if (responses !== undefined) {
        const movies = responses.map(resp => {
            const {data} = resp;
            const movie = {
                id: data.imdbID,
                year: data.Year,
                title: data.Title,
                rating: data.imdbRating,
                image: data.Poster,
                plot: data.Plot,
                actors: data.Actors,
                director: data.Director,
                genre: data.Genre,
                writer: data.Writer
            }
            return movie
        });
        return movies;
    }
}

function fetchMovies () {
    const API_URL = "https://developers.themoviedb.org/3";
    return (
        fetch(`${API_URL}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('Success', data);
                
            })
    )
}

export default fetchMovies;
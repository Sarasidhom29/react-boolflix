import { useContext } from "react";
import { BoolflixContext } from "./contexts/BoolflixContext";
import SearchBar from "./components/SearchBar";

function App() {
  
    const { movies, isLoading } = useContext(BoolflixContext);

    return (
        <div className="app-container">
            {/* Header */}
            <header>
                <h1>Boolflix</h1>
                <SearchBar />
            </header>

            <main>
                {/*  messaggio di attesa */}
                {isLoading && <div className="loading">Caricamento in corso...</div>}

                {/* Lista film  */}
                <ul className="movies-list">
                    {movies.map((movie) => {
                        return (
                            <li key={movie.id} className="movie-card">
                                <h3>{movie.title}</h3>
                                <p>Titolo Originale: {movie.original_title}</p>
                                <p>Lingua: {movie.original_language}</p>
                                <p>Voto: {movie.vote_average}</p>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
}

export default App;

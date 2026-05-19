import { useState } from "react";
import { createContext } from "react";
import fetchMovies from "../utils/api";

const BoolflixContext = createContext();

function BoolflixProvider({children}){
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchMovies = (queryTestuale) => {
        setIsLoading(true);

        fetchMovies(queryTestuale)
            .then((data) => {
                setMovies(data.results);
            })
            .catch(error =>console.error(error))
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <BoolflixContext.Provider value={{
            search, setSearch, 
            movies, setMovies, 
            isLoading, setIsLoading,
            searchMovies
        }}>
            {children}
        </BoolflixContext.Provider>
    );
};

export {
    BoolflixContext,
    BoolflixProvider
};
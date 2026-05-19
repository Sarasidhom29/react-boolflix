import { useState } from "react";
import { createContext } from "react";

const BoolflixContext = createContext();

function BoolflixProvider({children}){
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <BoolflixContext.Provider value={{search, setSearch, movies, setMovies, isLoading, setIsLoading}}>
            {children}
        </BoolflixContext.Provider>
    );
};

export {
    BoolflixContext,
    BoolflixProvider
};
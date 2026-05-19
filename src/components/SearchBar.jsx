import { useContext } from "react";
import { BoolflixContext } from "../contexts/BoolflixContext";

function SearchBar(){
    //Estrazione stato
    const {search, setSearch} = useContext(BoolflixContext);

    //funzione invio
    const handleSearch = (e) =>{
        e.preventDefault()

        //log per debugging
        console.log("Stai cercando:", search);
        
    };

    return(
        <form onSubmit={handleSearch}>
            <input 
                placeholder="Cerca un film.."
                type="text"
                value={search} 
                onChange={(e)=> setSearch(e.target.value)}
            />
            <button type="submit">Cerca</button>
        </form>

    );
}

export default SearchBar;
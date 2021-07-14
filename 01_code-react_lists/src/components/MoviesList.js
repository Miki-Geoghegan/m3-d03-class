import React, {useState} from 'react'
import moviesData from '../movies-data.json' /* this gives access to the movies-data file */
import MovieCard from './MovieCard'

function MoviesList(){
    const [movies, setMovies] = useState(moviesData)

    /* in order to modify state, it is necessary to use the setMovies function ONLY 
    to delete something, we therefore need to create a helper function that modifies the array for me*/
    function deleteMovie(movieId){
        const updatedMoviesArray = movies.filter(movie=>movie._id !==movieId) /* filtering by exclusion - keep the ones that DON'T have the id (movieId) that we want to delete */
        setMovies(updatedMoviesArray) /* set movies has to accept an edited/ updated movies array, so we have to use a helper function to create an updated array to pass to setMovies() - it will only accept an updated array */
        /* filter returns a new Array, which can delete a movie and return a new array, set movies that uses that new array */

            
    }

    return(
        movies.map((movie, _id) =>{
            return(
                <MovieCard key={_id} movie={movie} handleDelete={deleteMovie}/> /* this is simulating calling an API */
                /* must pass the helper function deleteMovie, handleDelete is a convention - helper functions are usually referred to as handle */
            )
        })

    )
}


export default MoviesList
import React, { Children } from 'react'


function MovieCard(props){
    const {handleDelete, movie:{title, director, IMDBRating}} = props /* the cards are children so they need to inherit info from parent element (MoviesList), therefore they need props */
    return(
        <div className="MovieCard">
        <h3>{title}</h3>
        <p>Director: {director}</p>
        <p>Rating: {IMDBRating}</p>
        <button className='btn-delete' onClick={()=> handleDelete(_id)}>Delete 🗑</button>
        </div>
        /* We are getting an error here because it wants each child in a list to have a unique key. To change, we need to add a key
        Here we can add a key to the opening div, we use the ID because this will always be unique, we can also use the index (idx) - best to use the id */
    )

}

export default MovieCard
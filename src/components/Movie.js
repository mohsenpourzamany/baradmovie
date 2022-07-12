import React from "react";
// import React from "react"
const DEFAULT_PLACEHOLDER_IMAGE =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3wqv5k499ZORub3i-u02YuB0ZCsUJ3Yuiw&usqp=CAU";

const Movie = ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img width='200' alt={movie.Title} src={poster} />
            </div>
            <p>({movie.Year})</p>
        </div> 
        
    );    
};

export default Movie;
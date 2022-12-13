import React, { useEffect, useState } from "react";
import './Row.css';
import axios from './axios'; // here i am actually importing instance in axios.js but since it is a default import I can name it here as I wish


const base_url_img = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchURL, islargeRow }) {
    const [movies, setMovies] = useState([]);
   
    //in use Effect when ever the value in the [] changes the function inside the { } will be executed
    // if we leave the [] empty => means run once when the row loads and dont dun it again
    // if we give any dependancy inside it the the function will be eecuted every time the dependency changes
    // follow the same methord to call async function in useEffect ; else it may creat issues
    // if these are any variables used inside the useEffect is should be included as a dependency eg fetchURL
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            console.log(request)
            //request syntax = https://api.themoviedb.org/3/fetchURl
            setMovies(request.data.results);
            return request
        }
        fetchData()
    }, [fetchURL]);
    // console.table(movies)
    

    return (
        <div className="row">
            <h2 className="row_title">{title}</h2>
            <div className={`row_posters`}>
                {/* use ` fo */}
                {movies.map(movie => (
                    <img className={`row_poster ${islargeRow && "row_posterLarge"}` } key = {movie.id} 
                    
                    src={`${base_url_img}${islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                ))}
            </div>
        </div>
    )
}

export default Row;
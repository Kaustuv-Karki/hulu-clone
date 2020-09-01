import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from '../VideoCard/VideoCard'
import axios from '../../axios'
import FlipMove from 'react-flip-move'
import requests from '../../requests'

const Results = ({selectedOption}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
       async function fetchData() {
        const request = await axios.get(selectedOption)
        setMovies(request.data.results)
        return request;
        } 
       fetchData()
    },[selectedOption])
    console.log(movies)
    return (
        <div className="results">
            <FlipMove>
            {movies.map(movie => (
                <VideoCard key={movie.id} movie={movie}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Results

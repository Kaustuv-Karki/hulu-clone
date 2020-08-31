import React from 'react'
import './VideoCard.css'

const VideoCard = ({movie}) => {
    return (
        <div className="videoCard">
            <img src="https://www.denofgeek.com/wp-content/uploads/2015/12/legend-stars-poster.jpg?resize=768%2C432" alt=""/>
            <p>movie description</p>
            <h1>{movie}</h1>
            <p>number of likes</p>
        </div>
    )
}

export default VideoCard

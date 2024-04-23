import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className='hero-text'>Library</h1>
            <p className='hero-description'>
            Within the pages of a book, lies the doorway to a world of imagination, adventure, and enlightenment. Embrace the journey of discovery, for within the depths of knowledge, one finds the keys to unlock boundless possibilities.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home
import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1>Welcome to my store!</h1>
            <div className="home-buttons-wrapper">
                <Link to="/posts">See all my posts</Link>
                <Link to="/add-post">Add a post</Link>
            </div>
        </div>
    )
}
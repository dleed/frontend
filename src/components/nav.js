import React from 'react'
import { NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <div className='nav-wrapper'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/posts">Products</NavLink>
            <NavLink to="/add-post">Add Product</NavLink>
        </div>
    )
    
}


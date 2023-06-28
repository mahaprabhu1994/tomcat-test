import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Welcome to Tomcat Configuration - TASPro !!</h1>
            <Link to='/about'>About </Link>
            <Link to='/product'>Product</Link>
        </div>
    )
}

export default Home
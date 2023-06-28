import React from 'react'
import { Link } from 'react-router-dom'

function Product() {
    return (
        <div><h1>Product</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About </Link>
        </div>
    )
}

export default Product
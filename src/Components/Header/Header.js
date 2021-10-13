import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
}

export default Header

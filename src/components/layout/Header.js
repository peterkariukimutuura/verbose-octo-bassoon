import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link>||<Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}


const headerStyle = {
    background: '#134040',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    fontFamily:'Arial',
    marginBottom:'5px'
}

const linkStyle = {
    color:'white',
    margin: '2px'
}
export default Header;
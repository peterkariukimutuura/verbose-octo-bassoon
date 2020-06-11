import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
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

export default Header;
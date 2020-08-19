import React from 'react'
import './myStyles.css'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Stylesheet () {
    return (
        <div>
            <header className='primary' >
            This is header component
            </header>
            <h1 style={heading}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
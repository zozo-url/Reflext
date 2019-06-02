import React from 'react'
import {Link} from 'react-router-dom'

const HomeButtons = () => {
return (
    <div className ="nav">
        <p className='navButton' key='start'><Link to='/new'>new entry</Link></p>
        <p className='navButton' key='viewlogs'><Link to='/view'>view entries</Link></p>
        <p className='navButton' key='my stats'><Link to='/stats'>my stats</Link></p>
    </div>
)
}

export default HomeButtons
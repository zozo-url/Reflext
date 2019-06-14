import React from 'react'
import {Link} from 'react-router-dom'

const HomeButtons = () => {
return (
    <div className ="nav">
        <p className='navButton' key='start'><Link to='/new' className='navButton'>new entry</Link></p>
        <p className='navButton' key='viewlogs'><Link to='/view' className='navButton'>view entries</Link></p>
    </div>
)
}

export default HomeButtons
import React from 'react'
import {Link} from 'react-router-dom'

const HomeButtons = () => {
return (
    <div>
        <button key='start'><Link to='/new'>new entry</Link></button>
        <button key='viewlogs'><Link to='/view'>view entries</Link></button>
        <button key='my stats'><Link to='/stats'>my stats</Link></button>
    </div>
)
}

export default HomeButtons
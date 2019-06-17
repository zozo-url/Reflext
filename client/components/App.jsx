import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import NewEntry from './NewEntry'
import ViewEntries from './ViewEntries'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div>
      <Route path = "/" component={HomeButtons}/>
      <Route exact path = "/" component={Home}/>
      <Route path = "/new" component={NewEntry}/>
      <Route path = "/view" component={ViewEntries}/>
    </div>
    </Router>
  )
}

export default App


import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import NewEntry from './NewEntry'
import ViewEntries from './ViewEntries'

const App = () => {
  return (
    <Router>
      <div>
      <Route path = "/" component={HomeButtons}/>
      <Route path = "/new" component={NewEntry}/>
      <Route path = "/view" component={ViewEntries}/>
    </div>
    </Router>
  )
}

export default App


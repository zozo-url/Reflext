import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import HomeButtons from './HomeButtons'
import NewEntry from './NewEntry'
import ViewEntries from './ViewEntries'
import MyStats from './MyStats'

const App = () => {
  return (
    <Router>
      <div>
      <Route path = "/" component={HomeButtons}/>
      <br/>
      <br/>
      <Route path = "/new" component={NewEntry}/>
      <Route path = "/view" component={ViewEntries}/>
      <Route path = "/stats" component={MyStats}/>
    </div>
    </Router>
  )
}

export default App


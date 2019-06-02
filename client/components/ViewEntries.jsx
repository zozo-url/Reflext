import React from 'react'
import {Link} from 'react-router-dom'
import {getJournalEntries} from '../api'

class viewEntries extends React.Component {
constructor(props){
super(props)
this.state = {
    error: null,
    entries: []
}
this.renderEntries = this.renderEntries.bind(this)
this.refreshList = this.refreshList.bind(this)
}
componentDidMount(){
    this.refreshList()
}
renderEntries(err, entries) {
    this.setState({
        error:err,
        entries: entries || []
    })
    console.log(entries)
}
refreshList(err){
    this.setState({
        error: err,
    })
    getJournalEntries(this.renderEntries)
}
render(){
  
return (
    <div>
        <h1>MY ENTRIES</h1>
        {this.state.entries.map((entry, index) => 
        <div className= 'entry' key = {index}>
        <p>{entry.date}</p>
        <h2>I'm feeling: {entry.mood}</h2>
        <p>{entry.external}</p>
        <p key={index}>{entry.journal}</p>
        </div>
        )}
    </div>
)
}
}

export default viewEntries
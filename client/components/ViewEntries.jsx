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
refreshList(err){
    this.setState({
        error: err,
    })
    getJournalEntries(this.renderEntries)
}
renderEntries(err, entries) {
    var fixedEntries = entries.map(entry => {
        entry.external = entry.external.split("+");
        return entry;
    })
    this.setState({
        error:err,
        entries: fixedEntries || []
    })
    console.log(this.state.entries)
}

render(){
return (
    <div>
        <h1>My Entries</h1>
        <div className="entries">
            {this.state.entries.map((entry, index) => 
            <div className= 'entry' key = {index}>
                <p>{entry.date}</p>
                <h2>I'm feeling: {entry.mood}</h2>
                {entry.external.map(factor => {
                   return <p className="exFactor">{factor} </p>
                })}
                <p>{entry.tags}</p>
                <p key={index}>{entry.journal}</p>
            </div>
            )}
        </div>
    </div>
)
}
}

export default viewEntries
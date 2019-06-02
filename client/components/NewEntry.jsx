import React from 'react'
import {Link} from 'react-router-dom'
import {postEntry} from '../api'
import data from '../../data/data.json'

class newEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "date": '',
            "mood": '',
            "external": '',
            "reflection": ''
        }  
        this.setMood = this.setMood.bind(this)
        this.setFactor = this.setFactor.bind(this)
        this.saveEntry = this.saveEntry.bind(this)
    }
    setMood(e) {
        let text = e.target.innerHTML
        this.setState(state => ({
            mood: text
        }))
        console.log(this.state)
    }
    setFactor(e) {
        let text = this.state.external + '  ' + e.target.innerHTML
        this.setState(state => ({
            external: text
        }))
        // this.state.external.push(text)
        console.log(this.state)
    }
    saveEntry(e) {
        
        this.state.reflection = document.getElementById('journal').value
        this.state.date = new Date()
        console.log(this.state)
        var entry = this.state
        postEntry(entry)

        // postEntry(this.state)
        //set this data to something, send it to database
        //go back to homepage/ to view entries
    }
render () {
  return (
    <div>
        <h1>How are you?</h1>
            <div className = 'options'>
            {data.moods.map(mood => {
            return <p className='button' key={mood} onClick={this.setMood}>{mood}</p>
            })}
            </div>
      <br/>
         <h1>External factors</h1>
           <div className = 'options'>
           {data.extFactor.map(factor => {
            return <p className='button' key={factor} onClick={this.setFactor}>{factor}</p>
            })}
            </div>
        <h1>Detail your experience</h1>
        <div className = 'bottomOfForm'><textarea rows='10' cols='100' id='journal'/> <br/> <br/>
        <Link to='/view'><h1 className='submit' onClick={this.saveEntry}>submit</h1></Link></div>
    </div>
)  
}

}

export default newEntry
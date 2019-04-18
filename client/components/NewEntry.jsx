import React from 'react'
import {Link} from 'react-router-dom'

class newEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mood: '',
            external: [],
            reflection: ''
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
        let text = e.target.innerHTML
        this.state.external.push(text)
        console.log(this.state)
    }
    saveEntry(e) {
        this.state.reflection = document.getElementById('journal').value
        console.log(this.state)
        //set this data to something, send it to database
        //go back to homepage/ to view entries
    }
render () {
    let style = {
        height: '10em',
        width: '400px'
    }
    let moods = [
        "excited", "empowered", "confident", "passionate",
        "happy", "content", "focused", "grateful", "relaxed",
        "calm", "ok", "tired", "uneasy", "nervous", "melancholic",
        "irritated", "depressed", "overwhelmed", "anxious", "scared", "angry"
    ]
    let exFactor = [
        "no sleep", "good sleep", "etc"
    ]
  return (
    <div>
        <h2>How are you?</h2>
        {moods.map(mood => {
            return <button key={mood} onClick={this.setMood}>{mood}</button>
            })}
        <h2>External factors</h2>
        {exFactor.map(factor => {
            return <button key={factor} onClick={this.setFactor}>{factor}</button>
            })}
        <h2>Detail your experience</h2>
        <input style={style} type='text' id='journal'/> <br/> <br/>
        <button onClick={this.saveEntry}>submit</button>
    </div>
)  
}

}

export default newEntry
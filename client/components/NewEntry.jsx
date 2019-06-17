import React from 'react'
import {Link} from 'react-router-dom'
import {postEntry} from '../api'
import data from '../../data/data.json'
import moment from 'moment'

class newEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "date": "",
            "mood": "",
            "external": "",
            "reflection": ""
        }  
        this.setMood = this.setMood.bind(this)
        this.setFactor = this.setFactor.bind(this)
        this.saveEntry = this.saveEntry.bind(this)
    }
    setMood(e) {
        let text = e.target.innerHTML
        data.moods.map(mood => {
            if (e.target.id === mood){
                document.getElementById(mood).style.backgroundColor = "white";
            }
            else {
                document.getElementById(mood).style.backgroundColor = "transparent";
            }
        })
        this.setState(state => ({
            mood: text
        }))
    }
    setFactor(e) {
        var text;
        document.getElementById(e.target.id).style.backgroundColor = "white";
        if (this.state.external === "") {
            text = e.target.innerHTML
        }
        else {
            text = this.state.external + "+" + e.target.innerHTML
        }
        this.setState(state => ({
            external: text
        }))
    }
    saveEntry(e) {
        this.state.reflection = document.getElementById("reflection").value;
        if (this.state.reflection === "") {
            return
        }
        else {
            this.state.date = moment().format('DD/MM/YY')
            var entry = this.state;
            postEntry(entry);
        }   
    }

render () {
  return (
    <div>
        <h1>How are you?</h1>
        <div className = "options">
            {data.moods.map(mood => {
                return <p className="button" id={mood} key={mood} onClick={this.setMood}>{mood}</p>
            })}
        </div>
        <br/>
        <h1>External factors</h1>
        <div className = "options">
           {data.extFactor.map(factor => {
                return <p className="button" id={factor} key={factor} onClick={this.setFactor}>{factor}</p>
            })}
        </div>
        <br/>
        <h1>Detail your experience</h1>
        <div className="bottomOfForm">
            <textarea className="journalTextArea" rows="10" cols="100" id="reflection"/>
        <br/>
            <Link to="/view">
            <h1 className="buttonStyle submitButton" onClick={this.saveEntry}>submit</h1>
            </Link>
        </div>
    </div>
)}
}

export default newEntry
import React from 'react'
import {Link} from 'react-router-dom'
import {postEntry} from '../api'
import data from '../../data/data.json'

class newEntry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "date": "",
            "mood": "",
            "external": "",
            "reflection": "",
            "tags": [],
        }  
        this.setMood = this.setMood.bind(this)
        this.setFactor = this.setFactor.bind(this)
        this.saveEntry = this.saveEntry.bind(this)
        this.setTags = this.setTags.bind(this)
        this.deleteTag = this.deleteTag.bind(this)
    }
    setMood(e) {
        let text = e.target.innerHTML
        this.setState(state => ({
            mood: text
        }))
    }
    setFactor(e) {
        let text = this.state.external + ", " + e.target.innerHTML
        this.setState(state => ({
            external: text
        }))
    }
    setTags(e) {
        let tagInput = document.getElementById("tag");
        let newTag = tagInput.value;
        let newTagArray = this.state.tags
        if (newTag==""){
            return
        }
        else {
            newTagArray.push(newTag)
            this.setState(state => ({
                tags: newTagArray
            }))
            tagInput.value = ""; 
        }
        
    }
    deleteTag(displayedTagIndex){
        this.setState({
          tags: this.state.tags.filter((tag, arrayTagIndex) => arrayTagIndex !== displayedTagIndex)
        })
    }
    saveEntry(e) {
        this.state.reflection = document.getElementById("journal").value
        let tagString = this.state.tags.toString()
        console.log(tagString)
        this.setState(state => ({
            tags: tagString
        }))
        this.state.date = new Date()
        var entry = this.state
        postEntry(entry)
    }

render () {
  return (
    <div>
        <h1>How are you?</h1>
        <div className = "options">
            {data.moods.map(mood => {
                return <p className="button" key={mood} onClick={this.setMood}>{mood}</p>
            })}
        </div>
        <br/>
        <h1>External factors</h1>
        <div className = "options">
           {data.extFactor.map(factor => {
                return <p className="button" key={factor} onClick={this.setFactor}>{factor}</p>
            })}
        </div>
        <br/>
        <h1>Detail your experience</h1>
        <div className="bottomOfForm">
            <textarea className="journalTextArea" rows="10" cols="100" id="journal"/>
        <br/>
        <h1>Add tags</h1>
        {this.state.tags.map((tag, i) => {
            return <div className="tags">
            <p className="tag" key={i} id={i}>{tag}</p>
            <button className="tag-x" id={i} onClick={() => this.deleteTag(i)}>x</button>
            </div>
        })}
        <div className="tagInput">
            <input className="journalTextArea" type="text" id="tag"></input> 
            <p className="addButton" onClick={this.setTags}>add</p>
            <br/>
        </div>
        <br/>
        <Link to="/view">
            <h1 className="submitButton" onClick={this.saveEntry}>submit</h1>
            </Link>
        </div>
    </div>
)}
}

export default newEntry
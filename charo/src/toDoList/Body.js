import React, {Component} from 'react';
import ToDoList from './ToDoList';
import ToDoAct from './ToDoAct';
import Note from './Note'
export default class Body extends Component {
    constructor() {
        super();
        this.note = []
        this.value = '';
        this.state = {
            value: []
        }
    }
    checkNote = (e) => {
        this.value = e.target.value; 
    }
    delNote = (e) => {
        let newNote = this.state.value.filter(elem => {
            return e.target.key === elem.key
        })
        this.note = newNote;
        this.setState({
            value: newNote
        })
    }
    submitNote = (e) => {
        let n = <Note value={this.value} key = {this.value + 1} delNote={this.delNote}/>;
        console.log(n)
        let ex = false;
        this.note.forEach(elem => {
            if(elem.key === n.key) {
                 ex = true;
                 alert('You have already added this note')
            }
        })
        if(!ex && this.value !== '') {
        this.note.push(n);
        }
        this.value = '';
        this.setState({
            value: this.note
        })
    }
    render() {
        const act = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '15%',
            height: '300px',
            border: '2px solid #ffb100',
            borderLeft: '0px',
            backgroundColor: '#ffb1007a',
            borderRadius: '0px 0px 15px 0px',
            boxSizing: 'border-box'
        }
        const srch = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '15%',
            height: '300px',
            border: '2px solid #ffb100',
            borderRight: '0px',
            backgroundColor: '#ffb1007a',
            borderRadius: '0px 0px 0px 15px',
            boxSizing: 'border-box'
        }
        return(
            <div style={{display: 'flex'}}>
                <div style={srch}></div>
                <div style={{margin:'left', width:'70%',  boxSizing:'border-box'}}><ToDoList list={this.state.value}/></div>
                <div style={act}><ToDoAct checkNote={this.checkNote} submitNote={this.submitNote}/></div>
            </div>
        )
    }
}
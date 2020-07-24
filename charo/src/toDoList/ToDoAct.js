import React, {Component} from 'react';
export default class ToDoAct extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const but = {
            margin: 'auto',
            marginBottom: '3px',
            width: '50px',
            height: '30px',
            boxShadow: '0px 50px 16px -17px #276873',
            background:'linear-gradient(to bottom, #a159b3 5%, #408c99 100%)',
            backgroundColor:'#a159b3',
            borderRadius:'8px',
            display:'inline-block',
            cursor:'pointer',
            color:'#ffffff',
            fontFamily:'Verdana',
            fontSize:'10px',
            fontWeight:'bold',
            fontStyle:'italic',
            textDecoration:'none',
            textShadow:'0px 0px 0px #3d768a',
        }
        const inp = {
            marginTop: '3px',
            marginBottom: '5px',
            width:'100px',
            height:'280px',
            border:'2px solid #0dc3cc',
            borderRadius:'5px',
            backgroundColor:'#00ffc421',
            outline: 'none'
        }
        const thisDiv = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }
        return(
            <div style={thisDiv}>
                <textarea style={inp} placeholder='type your note...' overflow='auto' onChange={this.props.checkNote}></textarea>
                <button style={but} onClick={this.props.submitNote}>Add Note</button>
            </div>
        )
    }
}
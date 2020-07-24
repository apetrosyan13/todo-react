import React, {Component} from 'react';
export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }
    didDone = () => {
        console.log('asd')
        this.setState({
            done: !this.state.done
        })
    }
    render() {
        const noteStyle = {
            width: '95%',
            height: '30px',
            border: '2px solid #ffb100',
            backgroundColor: '#ffb1007a',
            borderRadius: '5px',
            margin: 'auto',
            marginTop: '3px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        const doneStyle = {
            height: '20px',
            margin: '3px',
            border: '2px solid #ffb100',
            backgroundColor: this.state.done?'green':'#5d42067a',
            borderRadius: '5px'
        }
        const delStyle = {
            height: '20px',
            margin: '3px',
            border: '2px solid #ffb100',
            backgroundColor: 'red',
            borderRadius: '5px'
        }
        return (
            <div style={noteStyle}>
                <div style={{overflow:'auto'}}>
               {this.props.value}
               </div>
               <div>
               <button style={delStyle} onClick={this.props.delNote}>Delete</button>
               <button style={doneStyle} onClick={this.didDone}>Done</button>
               </div>
            </div>
        )
    }
}
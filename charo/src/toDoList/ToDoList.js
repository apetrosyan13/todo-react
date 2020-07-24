import React, {Component} from 'react';
export default class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const list = {
            width: '100%',
            height: '500px',
            border: '2px solid #ffb100',
            backgroundColor: '#ffb1007a',
            margin: 'auto',
            borderRadius: '0px 0px 15px 15px',
            boxSizing: 'border-box'
        }
        return(
            <div style={list}>{this.props.list}</div>
        )
    }
}
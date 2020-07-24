import React, {Component} from "react";
export default class Lenta extends Component {
    render() {
        const Lenta = {
            width: '400px',
            height: '500px',
            border: '2px solid #ec0808',
            backgroundColor: '#e62828',
            textAlign: 'center',
            verticalAlign: 'center',
            fontSize: '50px',
            float: 'left'
        }
        return (
            <div style={Lenta}>Friendneri activity<br/>Subscibi norutyunner<br/>Ev eyln</div>
        )
    }
}
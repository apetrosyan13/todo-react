import React, {Component} from "react";

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const header = {
            height: '100px',
            width: '100%',
            border: "2px solid green",
            backgroundColor: '#39ef39',
            textAlign: 'center'
        }
        return (
            <div style = {header}>
                <section>Carayutyunneri Matucum</section>
                <section>Norutyunneri bajin</section>
                <button onClick={this.props.changeState}>Back to<br/>SignUp</button>
            </div>
        )
    }
}
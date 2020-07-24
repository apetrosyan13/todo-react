import React, {Component} from 'react';
export default class SignUpComp extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const susi = {
            width: '300px',
            height: '500px',
            border: '2px solid #0d0863',
            backgroundColor: '#291dea',
            textAlign: 'center',
            verticalAlign: 'center',
            fontSize: '50px',
            float: 'left'
        }
        return (
            <div style={susi}>
               <div>Sign Up<br/>Sign In</div>
                <button onClick={this.props.changeState}>SignUp exanq</button>
            </div>
        )
    }
}
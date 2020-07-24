import React, {Component} from "react";
export default class Profile extends Component {
    render() {
        const profile = {
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
            <div style={profile}>
                Profili nkar<br/>Status<br/>U eli inchvor ban
            </div>
        )
    }
}
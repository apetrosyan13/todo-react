import React, {Component} from 'react';
export default class Slider extends Component {
    render() {
        const slider = {
            width: '100%',
            height: '500px',
            border: '2px solid #fff70b',
            backgroundColor: '#fff70b59',
            textAlign: 'center',
            fontSize: '50px'
        }
        return (
            <div style={slider}>Slider<br/>U eli inchvor<br/>Mi Ban</div>
        )
    }
}
import React, {Component} from "react";
 export default class Friends extends Component {
     render() {
        const friends = {
            width: '288px',
            height: '500px',
            border: '2px solid #cc510a',
            backgroundColor: '#e08149',
            textAlign: 'center',
            verticalAlign: 'center',
            fontSize: '50px',
            float: 'right'
        }
         return(
            <div style={friends}>Friendsi cank@<br/>Chat</div>
         )
     }
 }
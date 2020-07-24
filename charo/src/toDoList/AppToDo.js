import React, {Component} from 'react';
import Header from './Header'
import Body from './Body';
export default class AppToDo extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{width: '100%'}}>
            <Header/>
            <Body/>
            </div>
        )
    }
}
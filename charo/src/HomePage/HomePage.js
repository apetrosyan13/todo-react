import React, {Component} from "react";
import Header from "./components/Header";
import Profile from './components/Profile';
import Lenta from './components/Lenta';
import Friends from './components/Friends';
export default class Hompage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style = {{width: "1000px"}}>
                <Header changeState={this.props.changeState}/>
                <Profile/>
                <Lenta/>
                <Friends/>
            </div>
        )
    }
} 
import React, {Component} from 'react';
import SignUpComp from './signUpComp';
import Slider from './Slider'
import HomePage from "./HomePage/HomePage";
import Hompage from './HomePage/HomePage';
import AppToDo from './toDoList/AppToDo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true
    }
  }
  changeState = () => {
    console.log(this.state.signIn)
    this.setState({ 
      signIn: !this.state.signIn
    })
  }
  render() {
    const navBar = {
      width: "100%",
      height: "50px",
      border: "2px solid #710f0f",
      backgroundColor: "#ea5151",
      fontSize: "40px",
      textAlign: 'center'
    }
    const signIn = (
      <div style={{width:'1000px'}}>
      <div style={navBar}>NAVIGATION BAR</div>
      <div style={{width: '100%'}}>
      <SignUpComp changeState={this.changeState}/>
      <Slider/>
      </div>
    </div>
    )
    const app = this.state.signIn?signIn:<HomePage changeState={this.changeState}/>;
    //this.state.signIn? signIn: <HomePage changeState={this.changeState}/>;
    return (
      <div style={{alignSelf:'center'}}>
      {app}
      </div>
    )
  }
  }




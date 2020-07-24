import React, {Component} from 'react';
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            a: 255,
            b: 0,
            c: 0
        }
        this.changeColor = () => {
            let a = this.state.a;
            let b = this.state.b;
            let c = this.state.c;
            if (a === 255 && b === 0 && c < 255) {
                c +=1;
            } else if ( b === 0 && c === 255 && a > 0) {
                a-=1;
            } else if(a === 0 && c === 255 & b < 255) {
                b+=1;
            } else if(a === 0 && b === 255 && c > 0) {
                c-=1;
            } else if (b === 255 && c === 0 && a < 255) {
                a+=1;
            } else if (a === 255 && c === 0 && b > 0) {
                b-=1;
            }
            this.setState({
                a: a,
                b: b,
                c: c
            })
        }
    }
    componentDidMount() {
        let interval = setInterval(() => {
            this.changeColor()
        }, 10)
    }
    render() {
        const header = {
            width: '100%',
            height: '100px',
            borderRadius: '5px 5px 0px 0px',
            backgroundColor: '#ffb100',
            fontSize: '70px',
            textAlign: 'center',
            fontFamily: 'fantasy',
            color: `rgb(${this.state.a} ${this.state.b} ${this.state.c})`
        }
        return(
            <div style={header}>To Do List</div>
        )
    }
}
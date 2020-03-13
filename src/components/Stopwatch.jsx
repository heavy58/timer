import React, { Component } from 'react';
class Chrono extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0 ,
            on : false
    
        }
    }
    settime = (num) => {
        var h = Math.floor(num / 3600)
        var m = Math.floor((num % 3600) / 60)
        var s = ((num % 3600) % 60)
        return (<div>
            <span>{h.toString().padStart(2,0)} :</span>
            <span>{m.toString().padStart(2,0)} :</span>
            <span>{s.toString().padStart(2,0)} </span>
        </div>)
    }
    start=()=> {
        this.setState({
            on: true
        })
    this.interval=     setInterval(() => {
            this.setState({
                timer : this.state.timer+1
            })
        }, 1000);
       
    }
    reset=()=> {
        clearInterval(this.interval)
        this.setState({
            timer: 0
        })
    }
 pause =()=>  {
     clearInterval(this.interval)
     this.setState({
         on:false
     })
 }
    render() {
        return (<div>
           
            <span>{this.settime(this.state.timer)}</span> 
             <button onClick={!this.state.on?this.start:this.pause}>Start</button>
             <button onClick={this.reset}>Reset</button>
             </div>
        );
    }
}
export default Chrono;
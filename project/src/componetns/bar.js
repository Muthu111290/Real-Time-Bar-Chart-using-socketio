import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import socketIOClient from "socket.io-client";


var socket;

class Barchart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            January:"10",
            Febuary:"20",
            March:"30",
            April:"40",
            May:"50",
            June:"60",
            endpoint: "http://localhost:3001/"

        }
        this.changetemp = this.changetemp.bind(this);
        socket = socketIOClient(this.state.endpoint);
    }

    getJan = mmk =>{
        console.log(mmk)
        this.setState({January:mmk})
    }

    getFeb = mmk =>{
      console.log(mmk)
      this.setState({Febuary:mmk})
  }

  getMar = mmk =>{
    console.log(mmk)
    this.setState({March:mmk})
}

getApr = mmk =>{
  console.log(mmk)
  this.setState({April:mmk})
}

getMay = mmk =>{
  console.log(mmk)
  this.setState({May:mmk})
}

getJun = mmk =>{
  console.log(mmk)
  this.setState({June:mmk})
}

    componentDidMount() {        
        var state_current = this;
        socket.on("get_january", state_current.getJan);
        socket.on("get_Febuary", state_current.getFeb);
        socket.on("get_march", state_current.getMar);
        socket.on("get_april", state_current.getApr);
        socket.on("get_may", state_current.getMay);
        socket.on("get_june", state_current.getJun);
      }
    changetemp() {
        let a=20
        this.setState({June:a})
    }

    render() {
        const {January, Febuary, March, April, May, June } = this.state

       const chartData ={
            labels:['January', 'Feburary', 'March', 'April', 'May', 'June'],
            datasets:[{
                label:'Monthly Temperature',
                data:[
                    January,
                    Febuary,
                    March,
                    April,
                    May,
                    June
                ],
                background:[
                    'rgb(0, 191, 255)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)',
                    'rgb(255, 255, 255)'
                ]
            }]
        }
        
        return(
            <div><Bar
            data={chartData}
            width={100}
            height={30}
            options={{ }}
          />          
          </div>
        )
    }
}

export default Barchart;
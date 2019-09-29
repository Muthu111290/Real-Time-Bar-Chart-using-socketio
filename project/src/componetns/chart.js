import React, { Component } from "react";
import DataTable from 'react-data-table-component';
import socketIOClient from "socket.io-client";
import Bar from './bar'


var socket;

const columns = [
    {
      name: 'January',
      selector: 'Jan',
      sortable: true,
      center:true
    },
  
    {
      name: 'Febuary',
      selector: 'feb',
      sortable: true,
      center:true
    },
  
    {
      name: 'March',
      selector: 'march',
      sortable: true,
      center:true
    },
  
    {
      name: 'April',
      selector: 'april',
      sortable: true,
      center:true
    },
  
    {
      name: 'May',
      selector: 'may',
      sortable: true,
      center:true
    },
  
    {
      name: 'June',
      selector: 'june',
      sortable: true,
      center:true
    },
  
    
  ];

class Chart extends Component {
    constructor() {
        super();
        this.state={
          January:"10",
          Febuary:"20",
          March:"30",
          April:"40",
          May:"50",
          June:"60",
            endpoint: "http://localhost:3001/"
        }
        // this.handleclick = this.handleclick.bind(this)
        socket = socketIOClient(this.state.endpoint);
    }

    

      

    getJan = mmk =>{
        
        this.setState({January:mmk})
    }

    getFeb = mmk =>{
      
      this.setState({Febuary:mmk})
  }

  getMar = mmk =>{
    
    this.setState({March:mmk})
}

getApr = mmk =>{
 
  this.setState({April:mmk})
}

getMay = mmk =>{
  
  this.setState({May:mmk})
}

getJun = mmk =>{
  
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


    

    render() {
        const {January, Febuary, March, April, May, June } = this.state
        const data = [{ id: 1, Jan: January + " " + "deg cel", feb: Febuary + " " + "deg cel", march: March + " " + "deg cel",
    april:April + " " + "deg cel", may:May + " " + "deg cel", june:June + " " + "deg cel" } ];
        return(
          <div>
            <DataTable
        title="Table and chart"
        columns={columns}
        data={data}
      />
      <Bar />
          </div>
            
        )
    }
}

export default Chart;
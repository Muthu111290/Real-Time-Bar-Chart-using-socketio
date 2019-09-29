import React, { Component } from "react";
// import { Button, Table, Container } from "reactstrap";
// import {socket, Header} from '../Header/Header';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import DataTable from 'react-data-table-component';
import socketIOClient from "socket.io-client";


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

  

class Price extends Component {
    constructor() {
        super();
        this.state={
            January:"",
            Febuary:"",
            March:"",
            April:"",
            May:"",
            June:"",
            endpoint: "http://localhost:3001/",
            error:""
        }        
        this.handle_jan = this.handle_jan.bind(this);
        this.handle_feb = this.handle_feb.bind(this);
        this.handle_mar = this.handle_mar.bind(this);
        this.handle_apr = this.handle_apr.bind(this);
        this.handle_may = this.handle_may.bind(this);
        this.handle_jun = this.handle_jun.bind(this);
        socket = socketIOClient(this.state.endpoint);
    }

    // getData = mmk =>{
    //     console.log(mmk)
    //     this.setState({silver:mmk})
    // }

    // componentDidMount() {
    //     socket.emit("muthu");
    //     var state_current = this;
    //     socket.on("get_muthu", state_current.getData);
    //   }
reset() {
  this.setState({error:""})
}
error() {
  this.setState({error:"Enter Number"})
}    

    handle_jan() {
        let jan = this.state.January;
        console.log(jan)
        if(isNaN(jan)||jan==""){         
          this.error();
        }
        else{
        socket.emit('january', jan)
        this.reset()
      }
    }

    handle_feb() {
      
        let feb = this.state.Febuary
        if(isNaN(feb)||feb==""){          
          this.error();
        }
        else{
        socket.emit('Febuary', feb)
        this.reset()
        }

    }

    handle_mar() {
        let mar = this.state.March;
        if(isNaN(mar)||mar==""){          
          this.error();
        }
        else{
        socket.emit('march', mar)
        this.reset()
        }

    }

    handle_apr() {
        let apr = this.state.April;
        if(isNaN(apr)||apr==""){         
          this.error();
        }
        else{
        socket.emit('april', apr)
        this.reset()
        }

    }

    handle_may() {
        let may = this.state.May
        if(isNaN(may)||may==""){          
          this.error();
        }

      else{
        socket.emit('may', may)
        this.reset()
      }

    }

    handle_jun() {
        let jun = this.state.June;
        if(isNaN(jun)||jun==""){  
          this.error();        
        }
        else{       
        socket.emit('june', jun)
        this.reset()
        }

    }

    render() {
        const data = [{ id: 1, Jan: <input type="text" placeholder="Enter value" value={this.state.January} onChange = {e => this.setState({January:e.target.value})} />, 
feb: <input type="text" placeholder="Enter value" value={this.state.Febuary} onChange = {e => this.setState({Febuary:e.target.value})}  />,
 march: <input type="text" placeholder="Enter value" value={this.state.March} onChange = {e => this.setState({March:e.target.value})}  />,
  april: <input type="text" placeholder="Enter value" value={this.state.April} onChange = {e => this.setState({April:e.target.value})}  />,
   may: <input type="text" placeholder="Enter value" value={this.state.May} onChange = {e => this.setState({May:e.target.value})}  />,
    june: <input type="text" placeholder="Enter value" value={this.state.June} onChange = {e => this.setState({June:e.target.value})}  /> },
{id:2, Jan:<button type="button" onClick={this.handle_jan}>Change</button>, feb:<button onClick={this.handle_feb}>Change</button>, march:<button onClick={this.handle_mar}>Change</button>,
april:<button onClick={this.handle_apr}>Change</button>, may:<button onClick={this.handle_may}>Change</button>, june:<button onClick={this.handle_jun}>Change</button>}];
       

  return (
      <div>
    <DataTable
        title="2019 Temperatures"
        columns={columns}
        data={data}
      />

      <Link to="/chart">See Table and chart</Link><br/>

      <div style={{color:"red"}}>{this.state.error}</div>
      </div>
  )}
}

export default Price;
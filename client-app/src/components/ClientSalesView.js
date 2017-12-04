import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Table.js';
//import RevealButton from 'RevealButton.js';

class RevealButton extends React.Component {

    render() {

    return(
        <button onClick={this.props.handler}>{this.props.isopen ? "Hide Sales" : "Show Sales"}</button>
      )
    }
}

class Client extends React.Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.state.clientId = this.props.clientData.id;
      this.state.open = false;
      this.state.hasSales = true;
      this.state.clientSales = [];
      this.handleClick = this.handleClick.bind(this);
      this.getClientSales = this.getClientSales.bind(this);
    }


  handleClick(e) {
      e.preventDefault();

      this.getClientSales();

      this.setState(prevState => ({
            open: !prevState.open
        }));

      if(this.state.clientSales.length === 0){

        this.setState(prevState => ({
            hasSales: false
        }));

      }
    
      
    }

     getClientSales(){
      this.state.clientSales = this.props.sales.filter(sale => sale.clientId === this.state.clientId);
     }

  render(){

    var clientData = this.props.clientData;
    var clientView = "";

    return(
      <div className="clientSalesRow clearfix">
        Client: {clientData['firstname']} {clientData['surname']} <RevealButton handler={this.handleClick} isopen={this.state.open} />
        {this.state.open && this.state.hasSales ? <Table tableData={this.state.clientSales} tableHeaderData={this.state.clientSales[0]}/>: "" }
        {this.state.open && !this.state.hasSales ? <p className="ta_c"><strong>No sales</strong></p> : "" }
      </div>
      )
    
  }
}

class ClientSalesView extends React.Component {
  render(){

    var clientsData = this.props.clients;
    var clientRow = clientsData.map((client,index) => 

        <Client key={index} clientData={client} sales={this.props.sales} />

      )
    return(
      <div>
        <h2 className="ta_c">Client sales</h2>
        {clientRow}
      </div>
      )
    
  }
}

export default ClientSalesView;
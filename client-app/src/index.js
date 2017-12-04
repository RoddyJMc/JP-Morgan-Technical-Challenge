import React from 'react';
import ReactDOM from 'react-dom';


import {Table,TableHead,TableHeadCell,TableBody,TableRow,TableCell} from './components/Table.js'
import Tabs from './components/Tabs.js'
import SalesView from './components/SalesView.js'
import ClientView from './components/ClientView.js'
import ClientSalesView from './components/ClientSalesView.js'

const tabList = [
    { 'id': 1, 'title': 'Clients', 'view': 'clients' },
    { 'id': 2, 'title': 'Sales', 'view': 'sales' },
    { 'id': 3, 'title': 'Client Sales', 'view': 'client-sales' },
    { 'id': 4, 'title': 'Fault', 'view': 'fault' }
];

class FaultView extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	}

	componentDidMount() {

		function handleErrors(response) {
	    if (!response.ok) {
	        //throw Error(response.statusText);
	        this.setState({ error: response.status })
	    }
	    return response;
		}

	fetch("http://localhost:8080/fault")
	    .then(handleErrors.bind(this))
	    .then(response => console.log("ok") )
	    .catch(error => console.log(error) );

		}

	render() {

	if(this.state.error === 500){
		return (
			<div>
				Error 500
			</div>

			)	
		} 

	if(this.state.error === 404){
		return (
			<div>
				Error 404
			</div>

			)	
		}

			return (
				<div>
					Error 
				</div>

				)

		

	}
		
}

class App extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	    this.state.isLoading = true;
	    this.state.hasClients = false;
	    this.state.hasSales = false;
	    this.state.view = null;
	    this.handleTabClick = this.handleTabClick.bind(this);
	    this.updateState = this.updateState.bind(this);
	    this.testAllDataLoaded = this.testAllDataLoaded.bind(this);
	  }

	updateState(){

	    fetch('http://localhost:8080/clients')
	      .then(response => response.json())
	      .then(data => 
	      	this.setState({ clients: data, hasClients: true}),
	      	)
  		  .then(data => 
		  	this.testAllDataLoaded()
		  	)

		fetch('http://localhost:8080/sales')
		  .then(response => response.json())
		  .then(data => 
		  	this.setState({ sales: data, hasSales: true}),
		  	)
		  .then(data => 
		  	this.testAllDataLoaded()
		  	)

	}

	testAllDataLoaded(){
		if(this.state.hasSales && this.state.hasClients){
			this.setState({ isLoading : false})
		}
	}

	componentDidMount() {
		this.updateState();
	}

	handleTabClick(tabProp) {
		//e.preventDefault();
		this.setState(() => {
	      return {view: tabProp}
	    });

	  }

	render() {
		if(this.state.isLoading === true) {

			return(
				<p>Fetching</p>
				)

		} else {

		return(
			<div>
				<Tabs tabList={tabList} tabhandler={this.handleTabClick} />
				{this.state.view === null ? <p>Select a view from the above</p> : ""}
				{this.state.view === 'clients' ? <ClientView viewdata={this.state.clients} /> : ""}
				{this.state.view === 'sales' ? <SalesView viewdata={this.state.sales} /> : ""}
				{this.state.view === 'client-sales' ? <ClientSalesView clients={this.state.clients} sales={this.state.sales} /> : ""}
				{this.state.view === 'fault' ? <FaultView /> : ""}
			</div>
			)
	}
	}
}

ReactDOM.render(<App />, document.getElementById('root'));


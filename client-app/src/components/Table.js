import React from 'react';
import ReactDOM from 'react-dom';

class Table extends React.Component {
	render(){
		
		return(
			<table>
				<TableHead tableHeaderData={this.props.tableHeaderData} />
				<TableBody tableData={this.props.tableData} />
			</table>
		)
	}
}

class TableHeadCell extends React.Component {
	render(){

		const cellData = this.props.cellData;

		return(
			<th>{cellData}</th>
			);
	}
}

class TableHead extends React.Component {
	render(){

		const rowData = this.props.tableHeaderData;
		const cells = [];

		for (var cell in rowData){

			cells.push(<TableHeadCell key={cell} cellData={cell} />);

		}
		
		return(
			<thead>
				<tr>
					{cells}
				</tr>
			</thead>
			);
		
	}
}

class TableCell extends React.Component {
	render(){

		const cellData = this.props.cellData;

		return(
			<td>{cellData}</td>
			);
	}
}

class TableRow extends React.Component {
	render(){


		const rowData = this.props.rowData;
		const cells = [];

		for (var cell in rowData){

			cells.push(<TableCell key={cell} cellData={rowData[cell]}/>);

		}
		
		return(
			<tr>
				{cells}
			</tr>
			);
	}
}

class TableBody extends React.Component {
	render(){

		const data = this.props.tableData;
		const rows = data.map((rowData,index) =>
				<TableRow key={index} rowData={rowData}/> 
			)
		return(
			<tbody>
				{rows}
			</tbody>
			);
	}
}

export {Table};
import React from 'react';
import ReactDOM from 'react-dom';


class Tab extends React.Component {
	render(){
		const title = this.props.title;
		const tabId = this.props.tabId;
		return (
			<button className="tab" onClick={e => this.props.tabhandler(this.props.viewtoshow)}>{title}</button>
			);
	}
}

class Tabs extends React.Component {
	render(){

		const tabList = this.props.tabList;
		
		const tabs = tabList.map((tab,index) =>
				<Tab key={index} title={tab.title} tabId={tab.id} viewtoshow={tab.view} tabhandler={this.props.tabhandler}  />
			)
		
		return (
			<nav>
				{tabs}
			</nav>
			);
	}
}

export default Tabs
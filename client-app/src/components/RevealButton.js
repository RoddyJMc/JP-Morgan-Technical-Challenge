import React from 'react';
import ReactDOM from 'react-dom';

class RevealButton extends React.Component {

		render() {

		return(
				<button onClick={this.props.handler}>Show Sales</button>
			)
		}
}

export {RevealButton};
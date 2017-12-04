import React from 'react';
import ReactDOM from 'react-dom';
import {Table} from './Table.js'

class ClientView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: true,
    };
  }

  render() {

      return (
       <div>
       <h2 className="ta_c">Clients</h2>
       <Table tableData={this.props.viewdata} tableHeaderData={this.props.viewdata[0]} />
       </div>
      )
  }

}

export default  ClientView;
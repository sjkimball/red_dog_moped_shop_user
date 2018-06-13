import React from 'react';
// import Rebase from 're-base';
import './table.css';

import base from '../../../base.js'

class PrimaryTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bikes: [],
      loading: true
    };
  }

  componentDidMount() {
    this.ref = base.syncState('bikes', {
      context: this,
      state: 'bikes',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  render() {
    // console.log("When?", this.state.bikes);
    // let bike = this.state.bikes[0];
    // console.log("What?", bike);
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mike</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PrimaryTable;

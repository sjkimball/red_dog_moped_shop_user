import React from 'react';
import Rebase from 're-base';
import ReactTable from 'react-table';

import "react-table/react-table.css";

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
    const { bikes } = this.state;
    // let bikesData = this.state.bikes;
    //
    // console.log("What?", bikesData);
    //
    // bikesData.forEach(bike => {
    //   console.log(bike.make);
    //
    // });

    return (
        <ReactTable
          data={bikes}
          columns = {[
            {
              Header: "Bike Info",
              columns: [
                {
                  Header: "Year",
                  accessor: "year"
                },
                {
                  Header: "Make",
                  accessor: "make"
                },
                {
                  Header: "Model",
                  accessor: "model"
                }
              ]
            }
          ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
    );
  }
}

export default PrimaryTable;

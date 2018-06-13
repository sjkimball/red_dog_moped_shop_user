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
      repairs: [],
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

    this.ref = base.syncState('repairs', {
      context: this,
      state: 'repairs',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  render() {
    const { bikes } = this.state;
    let bikesData = this.state.bikes;
    let repairData = this.state.repairs;

    console.log("What now?", repairData);
    console.log("What?", bikesData);
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
              Header: "Awaiting Triage",
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
            showPagination = {true}
          />
    );
  }
}

export default PrimaryTable;

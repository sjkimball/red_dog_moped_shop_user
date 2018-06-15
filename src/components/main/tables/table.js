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
    this.ref = base.syncState('repairs', {
      context: this,
      state: 'repairs',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });

    this.ref = base.syncState('bikes', {
      context: this,
      state: 'bikes',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

 getBikeRepairData = (aRay, twoRay) => {

 }

  render() {

    const repairs = this.state.repairs;
    const bikes = this.state.bikes;
    const repair_bikes = [];

    return (
        <ReactTable
          data={repairs}
          columns = {[
            {
              Header: "Awaiting Triage",
              columns: [
                {
                  Header: "Repair ID",
                  accessor: "repair_Id"
                },
                {
                  Header: "Bike ID",
                  accessor: "bike_Id"
                },
                {
                  Header: "User Id",
                  accessor: "uid"
                }
              ]
            }
          ]}
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onMouseEnter: e =>
                console.log("Cell - onMouseEnter", {
                  state,
                  rowInfo,
                  column,
                  instance,
                  event: e
                })
            };
          }}
          defaultPageSize={10}
          className="-striped -highlight"
          showPagination = {true}
        />
    );
  }
}

export default PrimaryTable;

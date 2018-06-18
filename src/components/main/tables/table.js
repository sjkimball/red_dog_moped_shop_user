import React from 'react';
import Rebase from 're-base';
import ReactTable from 'react-table';

import "react-table/react-table.css";

import base from '../../../base.js'

let getBikes = (bidAray) => {
  let repairBikes = [];
  for (let i = 0; i < bidAray.length; i++) {
    base.fetch('bikes', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'bike_Id',
        equalTo: `${bidAray[i]}`
      }
    }).then((data) => {
        console.log("What", data);
        repairBikes.push(data);
      })
    }
    console.log("test", repairBikes);
    return repairBikes;
}

let getBikeIds = (aRay) => {
  const bikeaRay = aRay.map(item => {
    return item.bike_Id;
  });
  return bikeaRay;
}

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
        this.setState({
          bikes: getBikes(getBikeIds(this.state.repairs)),
          loading: false
         });
      }
    });
  }

  render() {
    const bikes = this.state.bikes;
    const repairs = this.state.repairs;
    console.log(bikes);
    console.log(repairs);

    return (
        <ReactTable
          data={bikes}
          columns = {[
            {
              Header: "Awaiting Triage",
              columns: [
                {
                  Header: "Bike ID",
                  accessor: "bike_Id"
                },
                {
                  Header: "Model",
                  accessor: "model"
                },
                {
                  Header: "Year",
                  accessor: "year"
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

import React from 'react';
import Rebase from 're-base';
import ReactTable from 'react-table';

import "react-table/react-table.css";

import base from '../../../base.js'

// let getBikes = (bidAray) => {
//   let repairBikes = [];
//   for (let i = 0; i < bidAray.length; i++) {
//     base.fetch('bikes', {
//       context: this,
//       asArray: false,
//       queries: {
//         orderByChild: 'bike_Id',
//         equalTo: `${bidAray[i]}`
//       }
//     }).then((data) => {
//         console.log("What", data);
//         repairBikes.push(data);
//       })
//     }
//     console.log("test", repairBikes);
//     return repairBikes;
// }

// let getBikeIds = (aRay) => {
//   const bikeaRay = aRay.map(item => {
//     return item.bike_Id;
//   });
//   return bikeaRay;
// }

class PrimaryTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bikes: [
        {
          bike_Id: '-LF3ogHak1KXjlRrHtx7',
          make: 'Chicago',
          model: 'Steel',
          nickname: 'The Tester',
          year: '1979',
          uid: 'VGimDuF6eggNl4C4BYkPGRJ7G102'
        },
        {
          bike_Id: '987654321',
          make: 'Honda',
          model: 'Rocket',
          year: '1980'
        }
      ],
      repairs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.ref = base.syncState('repairs', {
      context: this,
      state: 'repairs',
      asArray: true,
      then(data) {
        this.setState({
          loading: false
         });
      }
    });
  }

  render() {

    const bikes = this.state.bikes;
    const repairs = this.state.repairs;
    // console.log("bikes", bikes);
    // console.log("repairs", repairs);

    return (
        <ReactTable
          data={repairs}
          columns = {[
            {
              Header: "Awaiting Triage",
              columns: [
                {
                  Header: "Bike ID",
                  accessor: "bike_Id"
                },
                {
                  Header: "Repair ID",
                  accessor: "repair_Id"
                },
                {
                  Header: "Issue",
                  accessor: "issue"
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

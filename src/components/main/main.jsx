import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './main.css';

import PrimaryTable from './tables/table';
// import BikeDetails from './content/bike_details/bike_details.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main id="main_content" className="main">
        <Switch>
          <Route path="/queue" component={PrimaryTable} />
          {/* <BikeDetails /> */}
        </Switch>
      </main>
    );
  }
}

export default Main;

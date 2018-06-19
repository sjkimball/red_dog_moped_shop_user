import React from 'react';
import './main.css';

// import PrimaryTable from './tables/table.js';
import BikeDetails from './content/bike_details/bike_details.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <main id="main_content" className="main">
          {/* <PrimaryTable/> */}
          <BikeDetails />
      </main>
    );
  }
}

export default Main;

import React from 'react';
import './main.css';

import PrimaryTable from './tables/table.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <main id="main_content" className="main">
        <div className="main__container">
          <div className="main__header">
            <h3 className="main__heading">Hey there.</h3>
            <p className="main__subheading">Here's what the queue looks like.</p>
            <PrimaryTable/>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

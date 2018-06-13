import React from 'react';
import './main.css';

// import PrimaryTable from './tables/table.js';

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
            <h3 className="main__heading">This is a test.</h3>
            <p className="main__subheading">This is also a test.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

import React from 'react';
import './intake_form.css';

class IntakeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: null,
      cost: null,
      comment: null,
      here: false,
      inq: false,
      status: null,
      rfp: false
    }
  }

  getTime = (event) => {
    this.setState({
      time: event.target.value
    });
  }

  getCost = (event) => {
    this.setState({
      cost: event.target.value
    })
  }

  bikeHere = () => {
    this.setState({
      here: !this.state.here
    })
  }

  enableAdd2Q = () => {
    if (this.state.time !== null && this.state.cost !== null && this.state.here == true) {
      this.setState({
        inq: true
      })
    }
  }

  render(){
    if (!this.state.inq) {
      this.enableAdd2Q();
    };

    let secForm = null;
    if (this.state.inq) {
      secForm = <div className="supporting__form--right hidden">

        <div className="form-group">
          <label htmlFor="repair-cost">Add Repair comment</label>
          <textarea className="form-control" id="repair-cost" placeholder="e.g. Replaced starter" />
        </div>

        <div className="form__repair-status">
          <div className="btn-group">
            <button type="button" className="btn btn-dark dropdown-toggle repair-status" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Repair Status
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Awaiting Service</a>
              <a className="dropdown-item" href="#">In Service</a>
              <a className="dropdown-item" href="#">Pending</a>
            </div>
          </div>
          <button type="button" className="btn btn-danger submit" onClick={this.getFormData}>
            Submit
          </button>
        </div>

      </div>;
    };

    return(
      <form className="supporting__form">

        <div className="supporting__form--left">

          <div className="form-group">
            <label htmlFor="repair-issue">Issue:</label>
            <textarea readOnly className="form-control" id="repair-issue" placeholder={this.props.issue} />
          </div>
          <div className="form-group">
            <label htmlFor="repair-time">Quoted Repair Time:</label>
            <textarea id="repair-time" className="form-control" placeholder="e.g. '2 - 3 days'" onChange={this.getTime}/>
          </div>
          <div className="form-group">
            <label htmlFor="repair-cost">Quoted Repair Cost:</label>
            <textarea id="repair-cost" className="form-control" placeholder="e.g. '$150'" onChange={this.getCost} />
          </div>
          <div className="form-check">
            <input id="bike-onsite" className="form-check-input" type="checkbox" value="false"  onChange={this.bikeHere}/>
            <label className="form-check-label" htmlFor="bike-onsite">
              Bike Received?
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="false" id="add-queue" disabled={!this.state.inq} />
            <label className="form-check-label" htmlFor="add-queue">
              Add to Repair Queue?
            </label>
          </div>

        </div>

        {secForm}

      </form>
    );
  }
}

export default IntakeForm;

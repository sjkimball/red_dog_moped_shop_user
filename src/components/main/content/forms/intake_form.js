import React from 'react';
import './intake_form.css';

class IntakeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <form className="supporting__form">

        <div className="supporting__form--left">

          <div className="form-group">
            <label htmlFor="repair-issue">Issue:</label>
            <textarea className="form-control" id="repair-issue" placeholder="Customer description" />
          </div>
          <div className="form-group">
            <label htmlFor="repair-time">Quoted Repair Time:</label>
            <textarea className="form-control" id="repair-time" placeholder="e.g. '2 - 3 days'" />
          </div>
          <div className="form-group">
            <label htmlFor="repair-cost">Quoted Repair Cost:</label>
            <textarea className="form-control" id="repair-cost" placeholder="e.g. '$150'" />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="bike-onsite" />
            <label className="form-check-label" htmlFor="bike-onsite">
              Bike Received?
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="true" id="bike-rfp" />
            <label className="form-check-label" htmlFor="bike-rfp">
              Add to Repair Queue?
            </label>
          </div>

        </div>

        <div className="supporting__form--right hidden">

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
            <button type="button" className="btn btn-danger submit">
              Submit
            </button>
          </div>

        </div>
      </form>
    );
  }
}

export default IntakeForm;

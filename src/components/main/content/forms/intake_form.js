import React from 'react';
import './intake_form.css';
import '../../buttons/buttons.css';

import base from '../../../../base.js';

class IntakeForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: null,
      cost: null,
      comment: null,
      here: false,
      secForm: false,
      in_queue: false,
      status: null
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
    if (this.state.time !== null && this.state.cost !== null && this.state.here === true) {
      this.setState({
        secForm: true,
        in_queue: true
      })
    }
  }

  getComment = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleSubmit = () => {
    if (this.state.time !== null && this.state.cost !== null && this.state.here === true && this.state.comment !== null) {
      base.update(`repairs/${this.props.repair}`, {
        data:
          {
            time: this.state.time,
            cost: this.state.cost,
            comment: this.state.comment,
            here: this.state.here,
            in_queue: this.state.in_queue,
            status: this.state.status
          },
          then(data){
          console.log(data);
          }
        });
      }
    }

  render(){

    if (!this.state.secForm) {
      this.enableAdd2Q();
    }

    let secForm;
    if (this.state.secForm) {
      secForm = <div className="supporting__form--right">

        <div className="form-group">
          <label htmlFor="repair-comment">Add Repair comment</label>
          <textarea id="repair-comment" className="form-control"  placeholder="e.g. Replaced starter" onChange={this.getComment}/>
        </div>

        <div className="form__repair-status">
          <div className="btn-group">
            <button type="button" className="btn btn-dark dropdown-toggle repair-status" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Repair Status
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item">Pending</a>
              <a className="dropdown-item">In Service</a>
              <a className="dropdown-item">Ready for Pickup</a>
            </div>
          </div>
          <button type="button" className="btn btn-danger submit" onClick={this.handleSubmit}>
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
            <label htmlFor="repair-time">Estimated Repair Time:</label>
            <textarea id="repair-time" className="form-control" placeholder="e.g. '2 - 3 days'" onChange={this.getTime}/>
          </div>
          <div className="form-group">
            <label htmlFor="repair-cost">Estimated Repair Cost:</label>
            <textarea id="repair-cost" className="form-control" placeholder="e.g. '$150'" onChange={this.getCost} />
          </div>
          <div className="form-check">
            <input id="bike-onsite" className="form-check-input" type="checkbox" value="false"  onChange={this.bikeHere}/>
            <label className="form-check-label" htmlFor="bike-onsite">
              Bike Received?
            </label>
          </div>

        </div>

        {secForm}

      </form>
    );
  }
}

export default IntakeForm;

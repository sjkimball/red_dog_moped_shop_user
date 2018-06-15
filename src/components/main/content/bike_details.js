import React from 'react';
import './bike_details.css';

import diablo from './../../../images/Indigan-Diablo.jpg';
import qrcode from './../../../images/sampleqr.png';

class BikeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in_queue: false,
      status: null,
      here: false,
      rfp: false
    }
  }
  render () {
    // const diablo = require('../../../images/Indigan-Diablo.jpg');
    return(
      <div className="main__container">

      <div className="main__header--black">
        <div className="main__headings">
          <h3 className="main__heading--white">Sam Kimball</h3>
          <p className="main__subheading--white">
            1600 Pennsylvania Ave.
            Washington, D.C.
          </p>
        </div>
        <div className="main__header-pic">
          <img src={diablo} alt="Indigan Diablo" className="header__img--pic"/>
        </div>
        <div className="main__header-qrcode">
          <img src={qrcode} alt="Sample QR Code" className="header__img--qrcode" />
        </div>

      </div>

      <div className="main__supporting--repair">

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
            <div className="form-check supporting__form--right">
              <input className="form-check-input" type="checkbox" value="" id="bike-onsite" />
              <label className="form-check-label" htmlFor="bike-onsite">
                Bike Received?
              </label>
            </div>

          </div>

          <div className="supporting__form--right hidden">
            <div className="form__repair-status">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="bike-rfp" />
                <label className="form-check-label" htmlFor="bike-rfp">
                  Add to Repair Queue?
                </label>
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle repair-status" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Repair Status
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Awaiting Service</a>
                  <a className="dropdown-item" href="#">In Service</a>
                  <a className="dropdown-item" href="#">Pending</a>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="repair-cost">Add Repair comment</label>
              <textarea className="form-control" id="repair-cost" placeholder="e.g. Replaced starter" />
            </div>
          </div>
        </form>

      </div>

    </div>

    )
  }
}

export default BikeDetails;

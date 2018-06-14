import React from 'react';
import './bike_details.css';

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
    return(
      <div className="main__container">

      <div className="main__header--black">
        <h3 className="main__heading--white">Sam Kimball</h3>
        <p className="main__subheading--white">
          1600 Pennsylvania Ave.
          Washington, D.C.

        </p>
          <img src="/public/images/Indigan-Diablo.jpg" alt="Indigan Diablo" className="main__header-pic"/>
        <div className="main__header-qrcode">QRCode</div>
      </div>

      <div className="main__supporting--repair">

        <form>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="bike-onsite" />
            <label class="form-check-label" for="bike-onsite">
              Bike Received?
            </label>
          </div>
          <div class="form-group">
            <label for="repair-time">Quoted Repair Time:</label>
            <textarea class="form-control" id="repair-time" placeholder="e.g. '2 - 3 days'" />
          </div>
          <div class="form-group">
            <label for="repair-cost">Quoted Repair Cost:</label>
            <textarea class="form-control" id="repair-cost" placeholder="e.g. '$150'" />
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="bike-rfp" />
            <label class="form-check-label" for="bike-rfp">
              Ready for pickup?
            </label>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Repair Status
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Awaiting Service</a>
              <a class="dropdown-item" href="#">In Service</a>
              <a class="dropdown-item" href="#">Pending</a>
            </div>
          </div>
        </form>

      </div>

    </div>

    )
  }
}

export default BikeDetails;

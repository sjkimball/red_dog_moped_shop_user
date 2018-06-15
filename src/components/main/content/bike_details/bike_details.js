import React from 'react';
import './bike_details.css';

import diablo from './../../../../images/Indigan-Diablo.jpg';
import qrcode from './../../../../images/sampleqr.png';

import IntakeForm from '../forms/intake_form.js';

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
        <div className="main__headings">
          <h3 className="main__heading--white">Sam Kimball</h3>
          <p className="main__subheading--white">
            8036 Bienville Drive<br />
            Nashville, TN 37211 <br />
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

        <IntakeForm />

      </div>

    </div>

    )
  }
}

export default BikeDetails;

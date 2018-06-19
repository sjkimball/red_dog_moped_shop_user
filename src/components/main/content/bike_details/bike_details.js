import React from 'react';
import './bike_details.css';

import diablo from './../../../../images/Indigan-Diablo.jpg';
import qrcode from './../../../../images/sampleqr.png';

import base from '../../../../base.js';

import IntakeForm from '../forms/intake_form.js';

class BikeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repair_Id: '-LFNdWhta0Me-CtsprnP',
      bike_Id: '-LF3ogHak1KXjlRrHtx7',
      uid: 'VGimDuF6eggNl4C4BYkPGRJ7G102',
      user: null,
      bike: null,
      repair: null,
      loading: true
    }
  }

  componentDidMount() {
    this.ref = base.fetch('bikes', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'bike_Id',
        equalTo: this.state.bike_Id
      },
      then(data) {
        console.log("bike data", data);
        this.setState({
          bike: data,
        });
      }
    });
    this.ref = base.fetch('users', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'uid',
        equalTo: this.state.uid
      },
      then(data) {
        console.log("user data", data[0]);
        this.setState({
          user: data
        })
      }
    });
    this.ref = base.fetch('repairs', {
      context: this,
      asArray: true,
      queries: {
        orderByChild: 'repair_Id',
        equalTo: this.state.repair_Id
      },
      then(data) {
        console.log("repair data", data[0]);
        this.setState({
          loading: false,
          repair: data
        })
      }
    });
  }

  getUser = () => {
    if (this.state.user !== null) {
      let user = this.state.user;
      return user[0];
    }else {
      return 'Loading…';
    }
  }

  getRepair = () => {
    if (this.state.repair !== null) {
      let repair = this.state.repair;
      return repair[0];
    }else {
      return 'Loading…';
    }
  }

  render () {
    let user = this.getUser();
    let repair = this.getRepair();

    console.log("Hello?", user);
    console.log("Howdy?", repair);
    return(
      <div className="main__container">

      <div className="main__header--black">
        <div className="main__headings">
          <h3 className="main__heading--white">{user.fullName}</h3>
          <p className="main__subheading--white">
            {user.address1}<br />
            {user.address2}<br />
            {user.city}, {user.state} {user.postal}
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

        <IntakeForm issue={repair.issue} />

      </div>

    </div>

    )
  }
}

export default BikeDetails;

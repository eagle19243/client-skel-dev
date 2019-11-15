import React, { Component } from 'react';
import './App.css';
import { ServerConnection, SendRequest } from 'rtcmesh-react';
import Header from './components/partials/Header';
import AlertBanner from './components/partials/AlertBanner';
import AppState from './support/AppState';
import Router from './support/Router';

class App extends Component {
  alertCallback = (severity, message) => {
    console.log('alertCallback', severity, message);
    const { showAlertBanner } = AppState;
    showAlertBanner(severity, message, 5000);
  };

  onOpen = () => {
    SendRequest(
      'retrieve',
      'hc_kld-auction_inventory',
      'items',
      null,
      response => {
        console.log('response', response);
      },
    );
  };

  render() {
    return (
      <div className="App">
        <Header />
        <ServerConnection
          REACT_APP_SERVER_URL={process.env.REACT_APP_SERVER_URL}
          alertCallback={this.alertCallback}
          onOpen={this.onOpen}
        />
        <AlertBanner />
        <Router />
      </div>
    );
  }
}

export default App;

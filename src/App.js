import logo from './logo.svg';
import './App.css';
import React from 'react';

//BootStrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

//Leaflet Map

import 'leaflet/dist/leaflet.css';
import { Map } from "./components/Map";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 0.0, longitude: 0.0 };

    //関数自体にこのクラスが継承されていないため、thisが使えないので、bindでthisを指定する。
    //https://tech-it.r-net.info/program/javascript/245/
    this.successCallback = this.successCallback.bind(this);
  }


  headClick() {
    //ボタンが押された時に、位置情報を取得する。
    //サクセスコールバック、要するに、成功したときの関数と、エラーコールバック、要するに、失敗したときの関数を指定する。
    navigator.geolocation.getCurrentPosition(this.successCallback, this.errorCallback);
  }

  //成功したときの関数
  successCallback(position) {
    //緯度・緯度を取得
    const getLatitude = position.coords.latitude;
    const getLongitude = position.coords.longitude;

    console.log(getLatitude);
    console.log(getLongitude);

    //緯度・緯度をセット
    this.setState({ latitude: getLatitude, longitude: getLongitude });
  }

  //失敗したときの関数
  errorCallback(error) {
    alert("位置情報が取得できませんでした");
  }

  //表示するHTML
  render() {
    return (
      <div className="abs">
      <h1 className="title">Free Wi-fi self-propelled version</h1>
        <div className="App">
          <Map />
        </div>
        <div>
          <div className="latitude">
            <h1>latitude</h1>
            <h3>{this.state.latitude}</h3>
          </div>
          <div className="longitude">
            <h1>longitude</h1>
            <h3>{this.state.longitude}</h3>
          </div>
          {/* <button onClick={() => this.headClick()}>getGPS!!</button> */}
          <button className="button" onClick={() => this.headClick()} >Call Wi-Fi</button>
          {/* <Button variant="outline-secondary" onClick={() => this.headClick()}>getGPS!!</Button> */}
        </div>
      </div>
    );
  }
}

export default App;



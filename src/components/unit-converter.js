import React, { Component } from 'react';
import Navbar from './navbar';

class UnitConverter extends Component {
  constructor() {
    super();

    this.state = {
      currentMode : "area",
      unit1: '',
      unit2: '',
      value1: '',
      value2: '',
    };


    this.renderUnits = this.renderUnits.bind(this);
    this.onModeChange = this.onModeChange.bind(this);
    this.onValue1Change = this.onValue1Change.bind(this);
    this.onValue2Change = this.onValue2Change.bind(this);
  }

  componentDidUpdate() {
    console.log("value1: ", this.state.value1);
    console.log("value2: ", this.state.value2);
  }

  renderUnits() {
    const currentMode = this.state.currentMode;
    const length = ["km", "m", "cm", "mm", "㎛", "nm", "mile", "yard", "foot", "inch"];
    const area = ["km²", "m²", "square mile", "square yard", "square foot", "square inch", "hectare", "acre"];
    const volume = ["gal", "qt", "pt", "cup", "oz", "tablespoon", "teaspoon", "㎥", "cc", "ℓ", "㎖"];
    const speed = ["mi/hr", "ft/sec", "m/sec", "km/hr", "knot"];
    const temp = ["℃", "℉", "Kelvin"];
    const mass = ["ton(metric)", "kg", "g", "mg", "㎍", "ton(US)", "lb", "oz"];

    switch(currentMode) {
      case "length":
        return (length.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      case "area":
        return (area.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      case "volume":
        return (volume.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      case "speed":
        return (speed.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      case "temperature":
        return (temp.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      case "mass":
        return (mass.map((unit) => {
          return (
            <option value={unit} key={unit}>{unit}</option>
            )
          })
        );
      default:
    }
  }

  onModeChange(e) {
    this.setState({
      currentMode: e.target.value
    });
  }
  onValue1Change(e) {
    this.setState({
      value1: e.target.value
    });
  }
  onValue2Change(e) {
    this.setState({
      value2: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron mt-5 text-center">
            <p className="h2">Unit Converter</p>
            <p className="text-muted">Convert unit lengths, unit mass, and more!</p>
            <form className="px-lg-5 mx-lg-5">
              <select className="form-control" onChange={this.onModeChange}>
                <option value="length">Length</option>
                <option value="area">Area</option>
                <option value="volume">Volume</option>
                <option value="speed">Speed</option>
                <option value="temp">Temperature</option>
                <option value="mass">Mass</option>
              </select>
              <div className="form-row mt-4">
                <div className="col-6 col-md">
                  <input type="number" className="form-control" onChange={this.onValue1Change} value={this.state.value1}/>
                </div>
                <div className="col-6 col-md">
                  <select className="form-control">
                    {this.renderUnits()}
                  </select>
                </div>
                <div className="col-12 align-items-center col-md py-3 py-md-2">
                  <i className="fas fa-arrows-alt-h d-none d-md-block"></i>
                  <i className="fas fa-arrows-alt-v d-block d-md-none"></i>
                </div>
                <div className="col-6 col-md">
                  <input type="number" className="form-control" onChange={this.onValue2Change} value={this.state.value2}/>
                </div>
                <div className="col-6 col-md">
                  <select className="form-control">
                    {this.renderUnits()}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default UnitConverter;

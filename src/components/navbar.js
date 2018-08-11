import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">DAILY-CALC</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" data-toggle="dropdown">
              Calculators
            </div>
            <div className="dropdown-menu mr-auto">
              <NavLink className="dropdown-item" to="/unit-convert">Unit Converter</NavLink>
              <NavLink className="dropdown-item" to="/currency-convert">Currency Converter</NavLink>
              <NavLink className="dropdown-item" to="/timedate">Time/Date</NavLink>
              <NavLink className="dropdown-item" to="/tip-tax">Tip/Tax</NavLink>
              <NavLink className="dropdown-item" to="/interest">Interest</NavLink>
              <NavLink className="dropdown-item" to="/bill-split">Bill Split</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

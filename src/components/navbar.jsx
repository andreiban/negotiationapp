import React, { Component } from "react";

//stateless functional component
const NavBar = ({ navAggresivity, totalCounters, onReset }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="mr-1">Negotium - Aggresivity Level</span>
        <span className="badge badge-pill badge-secondary mr-5">
          {navAggresivity}
        </span>
        <span className="mr-1">Clients</span>
        <span className="badge badge-pill badge-secondary mr-5">
          {totalCounters + 1}
        </span>
      </a>
      <div>
        <div className="dropdown d-inline">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Select Agressivity Level
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              1
            </a>
            <a className="dropdown-item" href="#">
              2
            </a>
            <a className="dropdown-item" href="#">
              3
            </a>
          </div>
        </div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-small m-2 d-inline"
        >
          Select
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { Component } from "react";
import Dropdown from "./dropdown";

//stateless functional component
const NavBar = ({ items, navAggresivity, totalCounters, onReset }) => {
  return (
    <React.Fragment>
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
          <Dropdown
            title="Select Aggresivity level"
            items={items}
            multiSelect
          />
          <button
            onClick={onReset}
            className="btn btn-primary btn-small m-2 d-inline"
          >
            Select
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

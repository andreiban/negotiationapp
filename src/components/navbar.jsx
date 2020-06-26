import React, { Component } from "react";
import Dropdown from "./dropdown";

//stateless functional component

const NavBar = ({
  title,
  items,
  onSelectedItem,
  navAggresivity,
  totalCounters,
  onReset,
}) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="mr-1">Negotium - Aggressiveness Level</span>
          <span className="badge badge-pill badge-secondary mr-5">{7}</span>
          <span className="mr-1">Clients</span>
          <span className="badge badge-pill badge-secondary mr-5">
            {totalCounters + 1}
          </span>
        </a>

        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;

//   <Dropdown title={title} onSelectedItem={onSelectedItem} items={items} />

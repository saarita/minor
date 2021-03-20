import React from "react";
import { Link } from "react-router-dom";
import dp from "../assets/images/dp.svg";
const Dashboard = () => {
  return <img src={dp} style={{ width: "100%", height: 550 }} alt="dp" />;
};

export default Dashboard;

export const Navbar = ({}) => {
  return (
    <nav class="navbar bg-light">
      <div class="brand-title">Consult Doctor</div>
      <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/doctors">Doctor</Link>
          </li>
          <li>
            <Link to="/dashboard/hospital">Hospital</Link>
          </li>
          <li>
            <Link to="/dashboard/notice">Notice</Link>
          </li>
          <li>
            <Link to="#">Settings</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

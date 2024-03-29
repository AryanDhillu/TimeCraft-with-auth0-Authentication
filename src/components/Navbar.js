import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ set_data ,check_data}) => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


  // const logUserId = () => {
  //   if (isAuthenticated && user) {
  //     console.log(user.sub); // Log the user ID
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">TimeCraft</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/makeschedule" onClick={check_data}>MakeSchedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewschedule" onClick={set_data}>ViewSchedule</Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <Link className="nav-link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" onClick={() => { loginWithRedirect() }}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* {isAuthenticated && user && logUserId()} */}
    </nav>
  );
};

export default Navbar;

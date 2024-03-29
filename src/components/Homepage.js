import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';


const Homepage = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className='bod'>
      <div className="jumbotron jumbotron-fluid bg-primary text-white text-center">
        <div className="container">
          {isAuthenticated ? <h1 className="display-4">Welcome {user.name}!!</h1> : <h1 className="display-4">Welcome to TimeCraft</h1>}
          <p className="lead">Craft your time, your day's design, with TimeCraft, your moments shine.</p>
          <Link to="/makeschedule" className="btn btn-lg btn-light">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

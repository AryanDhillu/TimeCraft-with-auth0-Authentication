import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const Homepage = () => {
  const { isAuthenticated, user } = useAuth0();

  let time = new Date().toLocaleTimeString();
  let daty = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time);
  const [cdate, setCdate] = useState(daty);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className='container-fluid bg-light px-0 m-0'>
      <div className="row">
        <div className="col-12 ">
          <div className="jumbotron jumbotron-fluid bg-primary text-white text-center mb-0">
            <div className="container">
              {isAuthenticated ? <h1 className="display-4 glow-text">Welcome {user.name}!!</h1> : <h1 className="display-4 glow-text">Welcome to TimeCraft</h1>}
              <p className="lead glow-text">Craft your time, your day's design, with TimeCraft, your moments shine.</p>
              <Link to="/makeschedule" className="btn btn-lg btn-light mt-3 glow-button">Get Started</Link>
            </div>
          </div>
          <div className="text-center time-div ">
            <div className="bg-transparent p-3">
              <p className="display-4 text-danger time-text ">{ctime}</p>
              <p className="lead text-info">{daty}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

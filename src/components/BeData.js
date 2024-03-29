import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const BeData = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow m-3">
            <div className="card-body">
              <h2 className="card-title text-center mb-4 text-success">You already have a schedule</h2>
              <h2 className="card-title text-center mb-4 text-success">Want to edit it?</h2>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeData;

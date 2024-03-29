import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Errorpage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title text-danger">Error: Page Not Found</h2>
              <p className="card-text">We apologize, but the requested page cannot be rendered at the moment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;

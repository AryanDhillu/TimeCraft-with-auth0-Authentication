import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nodata = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-primary">You have no data yet</h1>
      <p className="lead">Don't worry, you can start adding data to your schedule to see it here!</p>
    </div>
  );
}

export default Nodata;

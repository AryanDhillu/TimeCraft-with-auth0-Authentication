import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Pleaselogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="mb-4">Please Login</h2>
          <button className="btn btn-primary btn-lg" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pleaselogin;

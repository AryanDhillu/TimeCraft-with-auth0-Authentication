import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Makeschedule from "./Makeschedule";
import BeData from "./BeData";
import Pleaselogin from "./Pleaselogin";

function Mergeroute({ isAuthenticated, predata, newslots, get_data, search_for_data }) {
  return (
    <>
      {isAuthenticated && predata ? <BeData set_data={get_data} check_data={search_for_data} /> : null}
      {isAuthenticated ? <Makeschedule onAdd={newslots} /> : <Pleaselogin />}
    </>
  );
}

export default Mergeroute;

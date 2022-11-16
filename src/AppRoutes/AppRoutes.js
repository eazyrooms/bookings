import React from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

import { Routes, Route, Link } from "react-router-dom";
import RoomTypes from '../components/RoomTypes/RoomTypes';
import Thankyou from '../components/ThankYou/Thankyou';
import Header from '../components/Header/Header';
import historyObject from '../components/HistoryRouterObject'

export default function AppRoutes() {
  return (
    <div>
      <React.Fragment>
     
        {/* <RoomTypes/> */}
        <HistoryRouter history={historyObject}>
        <Header />
          <Routes>
            <Route path="/" element={<RoomTypes/>} />
            <Route exact path="/thankyou" element={<Thankyou/>} />
          </Routes>
        </HistoryRouter>


      </React.Fragment>
    </div>
  )
}

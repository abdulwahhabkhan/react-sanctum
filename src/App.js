import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import './style/App.scss';
import { Sanctum } from "react-sanctum";
import Layout from './layout/layout'

const sanctumConfig = {
  api_url: process.env.REACT_APP_API_DOMAIN,
  csrf_cookie_route: "sanctum/csrf-cookie",
  signin_route: "login",
  signout_route: "logout",
  user_object_route: "api/user",
};

function App() {
  return (
    <Router>
      <Sanctum config={sanctumConfig}>
        <Layout />
      </Sanctum>
    </Router>
  );
}

export default App;

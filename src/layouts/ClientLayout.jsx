import React from 'react';
import NavBar from './NavBar';
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from './Footer';
// import "./ClientLayout.scoped.css"
// import styles from "./ClientLayout.module.css";
import './ClientLayout.css';
import Home from 'pages/Home';

const ClientLayout = ({children}) => {
    
  return (
    <div>
        <NavBar />
         <div>
         <Switch>
            <Route path="/" exact component={Home} />
           
          </Switch>
         </div>
         <Footer/>
    </div>
  )
}

export default ClientLayout;
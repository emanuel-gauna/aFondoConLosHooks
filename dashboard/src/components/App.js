import React from 'react';
import ContentWrapper from './ContentWrapper';
import { BrowserRouter as Router } from 'react-router-dom'; 
import SideBar from './Sidebar';
import { AppRoutes } from '../routes';

function App() {
  return (
    <>
      	<div id="wrapper">
        
          <Router>
          
          <SideBar />
          <AppRoutes>
          <ContentWrapper />
          </AppRoutes> 
         
          </Router>
        </div>
    </>
  );
}

export default App;

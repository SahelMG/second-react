import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import AppBarHeadertop from './AppBarHeadertop';
import Cardcomponent from './CardComponent'
import BeadCrumbs from './IconBreadCrubs';
import HeadertoMpp from './HeaderMapp';
import ButtonsExample from './inoutgrup';
import IconBreadcrumbs  from './IconBreadCrubs';
import { Outlet } from "react-router-dom";
import Serviceselecion from './ServiceSelection';

function App() {
  return (
    <div className="App">
      <IconBreadcrumbs/>
     
   
     <Outlet/>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
/* import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'; */
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter} from "react-router-dom";   
import Serviceselecion from './ServiceSelection';
import HeaderMapp from './HeaderMapp';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: "/",
        element: <HeaderMapp />
      },  
      {
        path: "/headermapp",
        element: <Serviceselecion />
      },  
    ]
  }

]); 


/*  root.render(
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
  </StyledEngineProvider>
</React.StrictMode>
);  */

  root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

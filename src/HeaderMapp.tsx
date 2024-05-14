import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Sery from './Sery';
import './HeaderMapp.css';
import UnderlineInput from './InputSample';
import ButtonSizes  from './ButtonComponent';
import Question from './QuestionBox'
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
     
        <Box sx={{ bgcolor: '#ffff',opacity:'0.9',     mt: '25%', borderRadius:'10px' ,  width: '135%'  }}  > 
        <div style={{border:'1px solid #34495e',borderRadius:'10px', height: '20vh', backgroundColor:'#34495e'}}>
            <img className='logo' src='/imag/1401Logo.png.png'></img>
            <h3 style={{color:'#ffffff',marginTop:'3%'}}>سامانه اعلام تغییر نشانی</h3>
            
            </div>
           
           <br/>
           <UnderlineInput/>
           
           
            </Box>
        

       
      </Container>
      
    </React.Fragment>
  );
}
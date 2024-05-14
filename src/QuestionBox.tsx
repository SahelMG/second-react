import { Input } from "@mui/material";
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import React from "react";
import './QuestionBox.css';
export default function Question(){
    return (
        <>
        <Input className="input-Question" type="text" placeholder="جواب سوال چیست؟"/>
        <div className="div-questions"> <label className="">Aa61W</label></div>
       
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' ,float:'left', marginLeft:'2%'}}>
     
        <Button size="lg" sx={{marginLeft:'4%',height:'10%',marginTop:'6%'}}>Large</Button>
        
    </Box>
      </>
    )
}
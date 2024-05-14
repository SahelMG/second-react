import * as React from 'react';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import { dir } from 'console';
import { useEffect, useState } from 'react';
import ButtonSizes from './ButtonComponent';


export default function UnderlineInput() {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  return (
    <Stack spacing={2}>
     
     
     <InputGroup className="mb-3" style={{height: '57px',}}>
        <Button variant="outline-secondary" id="button-addon1">
          راهنما
        </Button>
        <Form.Control
        style={{textAlign:'center'}}
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="سری سریال کارت هوشمند ملی/کدرهگیری"
        />
      </InputGroup>

      <div className="d-grid gap-2" style={{height: '57px',}}>
      <Button variant="primary" size="lg">
       تاریخ تولد
      </Button>
     
         </div>

      <InputGroup className="mb-3" style={{height: '57px',}}>
       
       <Form.Control
        style={{textAlign:'center'}}
         aria-label="Example text with button addon"
         aria-describedby="basic-addon1"
         placeholder="تلفن همراه"

       />
     </InputGroup>
     
      
       <InputGroup className="mb-3" style={{height: '57px',}}>
       
       <Form.Control
        style={{textAlign:'center'}}
         aria-label="Example text with button addon"
         aria-describedby="basic-addon1"
         placeholder="تلفن ثابت"

       />
     </InputGroup>

       


       <InputGroup className="mb-3"  style={{height: '57px',}}>
        <Button variant="outline-secondary">تعویض سوال</Button>
        <Button variant="outline-secondary">2ُS2HwF</Button>
        <Form.Control style={{textAlign:'center'}} aria-label="Example text with two button addons" placeholder="جواب سوال چیست؟" />
      </InputGroup>

      <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : ButtonSizes}
      style={{height: '57px',}}
      href='./Serviceselecion'
    >
      {isLoading ? 'درحال ارسال' : 'ارسال کد تایید'}
    </Button>
  
      
    </Stack>
  );
} 

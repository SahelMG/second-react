import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonSizes() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
     
      <Button size="md">Medium</Button>
      
    </Box>
  );
}

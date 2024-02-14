import React, { useState, useEffect } from 'react';
import { promptGemeni } from '../Gemeni.js'; 
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export function createOverlay({ data, onClose }) {
  console.log('createOverlay function called');
  /*
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await promptGemeni(data.searchPhrase);
      setResponse(result);
    };

    fetchData();
  }, [data]);
  */

  const response = "This is a test response";

  return (
    <Box
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', 
    }}
  >
    <p>{response}</p> // Display the response here
  </Box>
  );
}

export default createOverlay;

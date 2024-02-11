import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function FullscreenOverlay({ responseData, onClose }) {
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
      <Box
        sx={{
          bgcolor: 'white',
          padding: 3,
          borderRadius: 3,
          boxShadow: 2,
          width: '75%',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Bard's Response
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">{responseData}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
      <IconButton
        sx={{ position: 'absolute', top: 20, right: 20 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default FullscreenOverlay;

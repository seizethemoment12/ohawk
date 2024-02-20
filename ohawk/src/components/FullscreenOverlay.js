import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function CreateOverlay({ searchPhrase, open, handleClose }) {
  console.log('CreateOverlay function called within FullscreenOverlay.js');
  console.log('Props in CreateOverlay:', searchPhrase, open, handleClose);

  const response = searchPhrase;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md" // 50% of the screen
      fullWidth
    >
      <DialogTitle>
        <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {response}
      </DialogContent>
    </Dialog>
  );
}

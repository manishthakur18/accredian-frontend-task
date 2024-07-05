// ReferNowButton.js
import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import ReferralFormModal from './ReferralFormModal';

const ReferNowButton = () => {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form Data:', formData);
    handleClose();
    handleSnackbarOpen();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferralFormModal open={open} handleClose={handleClose} handleFormSubmit={handleFormSubmit} />
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Referral submitted successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ReferNowButton;

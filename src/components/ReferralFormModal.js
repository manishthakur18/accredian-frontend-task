// ReferralFormModal.js
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ReferralFormModal = ({ open, handleClose, handleFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    friendName: '',
    friendEmail: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
    }
    if (!formData.friendName) tempErrors.friendName = 'Friend\'s name is required';
    if (!formData.friendEmail) {
      tempErrors.friendEmail = 'Friend\'s email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.friendEmail)) {
      tempErrors.friendEmail = 'Friend\'s email is not valid';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      handleFormSubmit(formData);
      handleClose();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Refer a Friend
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            id="name"
            label="Your Name"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Your Email"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            required
            fullWidth
            id="friendName"
            label="Friend's Name"
            margin="normal"
            value={formData.friendName}
            onChange={handleChange}
            error={!!errors.friendName}
            helperText={errors.friendName}
          />
          <TextField
            required
            fullWidth
            id="friendEmail"
            label="Friend's Email"
            margin="normal"
            value={formData.friendEmail}
            onChange={handleChange}
            error={!!errors.friendEmail}
            helperText={errors.friendEmail}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ReferralFormModal;

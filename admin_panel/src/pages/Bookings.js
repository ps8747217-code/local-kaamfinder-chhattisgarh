import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Bookings() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Bookings Management
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>Booking tracking and management interface</Typography>
      </Paper>
    </Container>
  );
}

export default Bookings;

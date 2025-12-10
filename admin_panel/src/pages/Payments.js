import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Payments() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Payments & Earnings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>Payment tracking and earnings reports</Typography>
      </Paper>
    </Container>
  );
}

export default Payments;

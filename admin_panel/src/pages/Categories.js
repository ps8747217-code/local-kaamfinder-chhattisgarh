import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Categories() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Categories Management
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>Category creation and management interface</Typography>
      </Paper>
    </Container>
  );
}

export default Categories;

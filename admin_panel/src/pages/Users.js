import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

function Users() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Users Management
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography>User management interface</Typography>
      </Paper>
    </Container>
  );
}

export default Users;

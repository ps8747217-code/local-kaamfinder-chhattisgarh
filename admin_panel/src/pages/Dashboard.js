import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Paper, 
  Typography,
  Card,
  CardContent
} from '@mui/material';
import {
  People,
  Work,
  Assignment,
  AttachMoney
} from '@mui/icons-material';

const StatCard = ({ title, value, icon, color }) => (
  <Card>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4">
            {value}
          </Typography>
        </Box>
        <Box 
          sx={{ 
            backgroundColor: color, 
            borderRadius: '50%', 
            p: 2,
            color: 'white'
          }}
        >
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Users" 
            value="1,234" 
            icon={<People />}
            color="#2196F3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Workers" 
            value="567" 
            icon={<Work />}
            color="#4CAF50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Bookings" 
            value="890" 
            icon={<Assignment />}
            color="#FF9800"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Revenue" 
            value="₹45,678" 
            icon={<AttachMoney />}
            color="#F44336"
          />
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography color="textSecondary">
              Activity feed will be displayed here
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;

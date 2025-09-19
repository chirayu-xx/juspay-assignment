import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './components/Dashboard';
import { mockQuery } from './data/dashboardMockData';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard data={mockQuery} />
    </ThemeProvider>
  );
};

export default App;
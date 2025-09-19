// Dashboard theme configuration
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1c1c1c',
      light: '#4a4a4a',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#e3f5ff',
      light: '#f0f9ff',
      dark: '#b3e5fc',
      contrastText: '#1c1c1c'
    },
    background: {
      default: '#ffffff',
      paper: '#f7f9fb'
    },
    text: {
      primary: '#1c1c1c',
      secondary: 'rgba(28, 28, 28, 0.40)',
      disabled: 'rgba(28, 28, 28, 0.20)'
    },
    grey: {
      50: '#f7f9fb',
      100: '#e5ecf6',
      200: 'rgba(28, 28, 28, 0.05)',
      300: 'rgba(28, 28, 28, 0.10)',
      400: 'rgba(28, 28, 28, 0.20)',
      500: 'rgba(28, 28, 28, 0.40)',
      600: '#1c1c1c',
      700: '#000000'
    },
    success: {
      main: '#baedbd',
      contrastText: '#1c1c1c'
    },
    info: {
      main: '#95a4fc',
      contrastText: '#1c1c1c'
    },
    warning: {
      main: '#b1e3ff',
      contrastText: '#1c1c1c'
    },
    error: {
      main: '#a8c5da',
      contrastText: '#1c1c1c'
    },
    divider: 'rgba(28, 28, 28, 0.10)'
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 600,
    h6: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#1c1c1c'
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      color: '#1c1c1c'
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'rgba(28, 28, 28, 0.40)'
    },
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'rgba(28, 28, 28, 0.40)'
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: 'none',
          border: 'none'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: 'none'
        }
      }
    }
  }
});

export default theme;
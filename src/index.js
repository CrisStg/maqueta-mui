import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#fff',
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        "&:not(:focus)": {
          borderColor: "white"
        }
      },
      root: {
        backgroundColor: "white"
      }
    }
  }
}) ;
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);


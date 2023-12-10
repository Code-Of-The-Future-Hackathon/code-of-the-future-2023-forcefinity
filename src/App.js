import './App.css';
import { LandingPage } from './pages/landing/landingPage';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';


function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ffbabc',
        light: '#feffa3',
        dark: '#ffd4e5',
      },
      secondary: {
        main: '#cef28f',
        dark: '#d4ffea',
      },
      background: {
        default: '#fff5ba',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;

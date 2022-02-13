import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './Router';
import { ThemeProvider } from '@mui/material/styles';
import { themeColor } from './Theme';



function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <Router>
        <Routers />
      </Router>
    </ThemeProvider >
  );
}

export default App;

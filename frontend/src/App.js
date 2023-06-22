import LoginForm from './components/login/LoginForm.jsx';
import Register from './components/register/Register.jsx';

import './App.css';
import { Box, Grid } from '@mui/material';

function App() {
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
      <header>
        <Grid component="header">
          <LoginForm />
        </Grid>
      </header>
      <main className="App-main">
        <Grid component="section">
          <Register />
        </Grid>
      </main>
    </Box>
  );
}

export default App;

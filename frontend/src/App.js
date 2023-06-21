import LoginForm from './components/login/LoginForm.js';
import Register from './components/register/Register.js';

import './App.css';
import { Box, Grid } from '@mui/material';
import { useContext } from 'react';
import AuthContext from './context/AuthContext.js';

function App() {

  const ctxAuth = useContext(AuthContext)
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
      <header>
        <Grid component="header">
          {!ctxAuth.isAuth && <LoginForm />}
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

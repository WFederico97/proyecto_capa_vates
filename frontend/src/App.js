import LoginForm from './components/login/LoginForm.jsx';
import Register from './components/register/Register.jsx';

import './App.css';
import { Box, Grid } from '@mui/material';
import { useEffect } from 'react';

function App() {
  const isAuth = localStorage.getItem('token')
  let logoutTimer 
  const expirationDate = new Date(JSON.parse(localStorage.getItem('expires')))

  const handleLogout = () => { 
    localStorage.removeItem('token')
    localStorage.removeItem('expires')
  }
  
  useEffect(() => {

    const autoLogout = () => {

      if (expirationDate) {

        const remainingTime =

         expirationDate.getTime() - new Date().getTime()

        // eslint-disable-next-line react-hooks/exhaustive-deps

        logoutTimer = setTimeout(() => {

          handleLogout()

        }, remainingTime)

      } else {

        clearTimeout(logoutTimer)

      }

    }

    autoLogout()

  }, [expirationDate])
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
      <header className='App-header'>
        <Grid component="header">
          <LoginForm />
        </Grid>
      </header>
      <main>
        <Grid component="section">
          <Register />
        </Grid>
      </main>
    </Box>
  );
}

export default App;

import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import { TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import AuthContext from "../../context/AuthContext.js";

const LoginForm = () => {
//   const [emailChecked, setEmailChecked] = useState(false);
//   const [passwordChecked, setPasswordChecked] = useState(false);
  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const ctxAuth = useContext(AuthContext)

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };





  const submitHandler = (event) =>{
    event.preventDefault()
    if(formData.email.includes('@') && formData.password.length > 0){
      /**HTTP BACKEND LOGIN CALL */
      ctxAuth.login(formData)
      console.log(formData)
      setError(false)
    }else{
        setError(true)
    }
  }


  return (
    <div>
      <Box component="form" onSubmit={submitHandler} >
        <TextField
          sx={{ m: 2 }}
          id="emailLogin"
          label="Email"
          name="email"
          variant="filled"
          type="email"
          color="success"
          onChange={changeHandler}
        />

        <TextField
          sx={{ m: 2 }}
          id="passwordLogin"
          label="Password"
          variant="filled"
          name="password"
          type="password"
          color="success"
          onChange={changeHandler}
        />
         <Button variant="contained" type="submit">Send</Button>
      </Box>
      {error && <Typography>error</Typography>}
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createUser } from "../../services/cruds/users/users.js";

const Register = () => {
  const [error, setError] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    genderInput: "female",
    password: "",
    confirmPass: "",
  });
  const { name, lastName, email, genderInput, password, confirmPass } =
    userData;
  // const [formIsValid, setFormIsValid] = useState()
  const changeHandler = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validationErrors = formValidation();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      console.log("entré");
    } else {
      /*llamado hnttp con el try catch al bk */
      console.log("STATUS 200 OK");
      const postUser = async () => { 
        try {
          const response = await createUser(userData);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
      postUser();
    }
  };

  const formValidation = () => {
    const validationErrors = {};
    if (name.trim().length < 4) {
      validationErrors.name = "Nombre no puede ser menor a 4 caracteres";
    }
    if (lastName.trim().length < 4) {
      validationErrors.lastName = "Apellido no puede ser  menor a 4 caracteres";
    }
    if (!email.trim()) {
      validationErrors.email = "Email no puede ser vacio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email invalido";
    }
    if (!password.trim()) {
      validationErrors.password = "Contraseña no puede ser vacia";
    }
    if (password !== confirmPass) {
      validationErrors.equalPassword = "Las contraseñas no coinciden";
    }
    return validationErrors;
  };

  console.log(userData);
  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", p: 1 }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Typography variant="h3"> Register </Typography>
        </Grid>
        <Grid>
          <Box component="form" onSubmit={submitHandler} sx={{ margin: "1em" }}>
            <Grid sx={{ margin: 1 }}>
              <TextField
                sx={{ margin: 1 }}
                id="name"
                label="Name"
                variant="filled"
                color="secondary"
                type="text"
                name="name"
                onChange={changeHandler}
              />
              {error.name && (
                <Typography variant="caption">{error.name}</Typography>
              )}
              <TextField
                sx={{ margin: 1 }}
                id="lastName"
                label="Last Name"
                variant="filled"
                color="secondary"
                type="text"
                name="lastName"
                onChange={changeHandler}
              />
              {error.lastName && (
                <Typography variant="caption">{error.lastName}</Typography>
              )}
            </Grid>
            <Grid sx={{ margin: 1 }}>
              <FormControl
                color="secondary"
                margin="dense"
                sx={{ mr: "2.3em", ml: "1em" }}
              >
                <FormLabel id="gender-input">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="genderInput"
                  defaultValue="female"
                  name="genderInput"
                  row
                  onChange={changeHandler}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                    color="secondary"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    color="secondary"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                sx={{ margin: 1 }}
                id="email"
                label="Email"
                variant="filled"
                color="secondary"
                type="email"
                name="email"
              />
              {error.email && (
                <Typography variant="caption">{error.email}</Typography>
              )}
            </Grid>
            <Grid sx={{ margin: 1 }}>
              <TextField
                sx={{ margin: 1 }}
                id="password"
                label="Password"
                variant="filled"
                color="secondary"
                type="password"
                name="password"
              />
              {error.password && (
                <Typography variant="caption">{error.password}</Typography>
              )}
              <TextField
                sx={{ margin: 1 }}
                id="confirmPass"
                label="Confirm Password"
                variant="filled"
                color="secondary"
                type="password"
                name="confirmPass"
              />
              {error.confirmPass && (
                <Typography variant="caption">{error.equalPassword}</Typography>
              )}
            </Grid>
            <Grid>
              <Button
                sx={{ margin: 1 }}
                variant="contained"
                color="success"
                type="submit"
              >
                Register
              </Button>
              <Button sx={{ margin: 1 }} variant="contained" color="warning">
                Cancel
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

/**
      *! ToDO: ver react-hook-form para validacion de formularios.
 */

const Register = () => {
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({})

  const changeHandler = (event) => {
 
  }

  const submitHandler = (event) => {
    
  }

  return (
    <>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", p: 1  }}
      >
        <Grid sx={{textAlign: "center"}}>
          <Typography variant="h3"> Register </Typography>
        </Grid>
        <Grid  >
          <Box component="form" sx={{ margin: "1em" }}>
            <Grid sx={{ margin: 1 }}>
              <TextField
                sx={{ margin: 1 }}
                id="name"
                label="Name"
                variant="filled"
                color="secondary"
                type="text"
                name="name"
              />
              <TextField
                sx={{ margin: 1 }}
                id="lastName"
                label="Last Name"
                variant="filled"
                color="secondary"
                type="text"
                name="lastName"
              />
            </Grid>
            <Grid sx={{ margin: 1 }}>
              <FormControl color="secondary" margin="dense" sx={{ mr: "2.3em", ml: "1em" }}>
                <FormLabel id="gender-input"  >Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="gender-input"
                  defaultValue="female"
                  name="radio-buttons-group"
                  row
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
              <TextField
                sx={{ margin: 1 }}
                id="confirmPass"
                label="Confirm Password"
                variant="filled"
                color="secondary"
                type="password"
                name="confirmPass"
              />
            </Grid>
          </Box>
        </Grid>
        <Grid>
          <Button sx={{ margin: 1 }} variant="contained" color="success" type="submit">
            Register
          </Button>
          <Button sx={{ margin: 1 }} variant="contained" color="warning">
            Cancel
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Register;

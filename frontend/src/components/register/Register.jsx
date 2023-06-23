import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {  Button, Grid, TextField, Typography } from "@mui/material";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const formSchema = yup.object({
  first_name: yup
    .string()
    .trim()
    .min(3, "Ingresar al menos 3 caracteres")
    .required("Campo Obligatorio"),
  last_name: yup
    .string()
    .trim()
    .min(3, "Ingresar al menos 3 caracteres")
    .required("Campo Obligatorio"),
  email: yup
    .string()
    .trim()
    .email("Email no valido")
    .required("Campo Obligatorio"),
  password: yup
    .string()
    .trim()
    .min(5, "La contraseña debe ser minimo 5 caracteres")
    .required("Campo Obligatorio"),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onSubmit",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = () => {
    console.log("Creacion exitosa");
  };

  return (
    <>
        <Grid sx={{ textAlign: "center" }}>
          <Typography variant="h3"> Register </Typography>
        </Grid>
        <Grid>
          <form onSubmit={handleSubmit(onSubmit)} className="register-form">
            <Grid sx={{ margin: 1 }}>
              <Controller
                name="first_name"
                control={control}
                render={({ field }) => <TextField label="First Name" type="text" sx={{ margin: 1 }} {...field} />}
              />
              {errors.first_name && (
                <Typography variant="caption">{errors.first_name}</Typography>
              )}
              <Controller
                name="last_name"
                control={control}
                render={({ field }) => <TextField label="Last Name" type="text" sx={{ margin: 1 }} {...field} />}
              />
              {errors.last_name && (
                <Typography variant="caption">{errors.last_name}</Typography>
              )}
            </Grid>
            <Grid sx={{ margin: 1 }}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField label="Email" type="email" sx={{ margin: 1, width: "37%" }} {...field} />}
              />
              {errors.email && (
                <Typography variant="caption">{errors.email}</Typography>
              )}
            </Grid>
            <Grid sx={{ margin: 1 }}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField label="Password" sx={{ margin: 1 }} type="password" {...field} />}
                
              />
              {errors.password && (
                <Typography variant="caption">{errors.password}</Typography>
              )}
              <Controller
                name="confirm_password"
                control={control}
                render={({ field }) => <TextField label="Confirm Password" sx={{ margin: 1 }} type="password"  {...field} />}
              />
              {errors.confirm_password && (
                <Typography variant="caption">{errors.confirm_password}</Typography>
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
          </form>
        </Grid>
    </>
  );
};

export default Register;

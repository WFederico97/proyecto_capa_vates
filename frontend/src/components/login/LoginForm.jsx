import React from "react";
import {useForm, Controller} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Grid, TextField, Typography } from "@mui/material";
import Button from '@mui/material/Button';

const defaultValues = {
  email: "",
  password: ""
 }

 const formSchema = yup.object({
   email: yup
   .string()
   .trim()
   .email("Email no valido")
   .required("Campo Obligatorio"),

   password: yup
   .string()
   .trim()
   .min(5, "La contraseña debe ser minimo 5 caracteres")
   .required("Campo Obligatorio")
 })

const LoginForm = () => {

  const {control,handleSubmit,formState: { errors }} = useForm({
    defaultValues,
    mode: "all",
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data) =>{
    console.log(data);

  }


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form"  >
        <Grid sx={{display:"flex",alignItems: "center", m: 1}}>
          <Controller 
          name="email"
          control={control}
          render={({field}) => <TextField sx={{m:1}} label="email" {...field} />}
          
          
          />
          {errors.email && <Typography>{errors.email.message}</Typography>}

          <Controller 
          name="password"
          control={control}
          render={({field}) => <TextField type="password" label="Password" {...field} />}
          />
          {errors.password && <Typography>{errors.password.message}</Typography>}

         <Button variant="contained" type="submit" sx={{m:1}}>Send</Button>
        </Grid>
      </form>
    </>
  );
};

export default LoginForm;

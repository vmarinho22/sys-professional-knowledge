import { useState } from "react";
import type { FC } from "react";
import {
  Box,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  TextField,
  InputAdornment,
  Stack,
  Button,
} from "@mui/material";

import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";

import axios from 'axios';
import Router from 'next/router';


const Login: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword: any = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword: any = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit: any = (event) => {
    event.preventDefault();
    const user = (document.querySelector("#user") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;

    // Provisório
    axios.post('http://localhost:3333/users/login', {
      user,
      password
    })
    .then(function (response) {
      if(response.status === 200) {
        Router.push('/admin');
      }
      const data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <Box sx={{ display: "block", justifyContent: "center" }}>
      <form>
      <FormControl sx={{ width: "80%" }} variant="standard">
        <TextField id="user" label="Usuário" variant="standard" autoComplete="username"/>
        <br />
      </FormControl>
      <FormControl sx={{ width: "80%" }} variant="standard">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <br />
        <Input
          id="password"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "block", justifyContent: "center", marginTop: "30px" }}
      >
        <Button variant="outlined">Cadastrar</Button>
        <Button onClick={handleFormSubmit} variant="contained">Entrar</Button>
      </Stack>
      </form>
    </Box>
  );
};

export default Login;

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

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword: any = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword: any = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "block", justifyContent: "center" }}>
      <FormControl sx={{ width: "80%" }} variant="standard">
        <TextField id="user" label="Usuário" variant="standard" />
        <br />
      </FormControl>
      <FormControl sx={{ width: "80%" }} variant="standard">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <br />
        <Input
          id="password"
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
        <Button variant="contained">Entrar</Button>
      </Stack>
    </Box>
  );
};

export default Login;

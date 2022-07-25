import  TextField  from "@mui/material/TextField";
import * as React from "react";
import { Main } from "./styled";

const Login = () => {
  return (
    <div>
      <Main>
        <p>Entrar</p>
      </Main>
      <div>
      <TextField  id="outlined-basic" label="Email" variant="outlined"/>
      <TextField  id="outlined-basic" label="Password" variant="outlined"/>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { DivPassword,ButtonStyled, Form, Main, InputMaterial } from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { BASE_URL } from '../../constants/url';
import { useNavigate } from 'react-router-dom';
import { goToFeed } from '../../routes/coordinator';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errEmail,setErrEmail] = useState('')
  const [errPass,setErrPass] = useState('')
  const [checkErrEmail,setCheckErrEmail] = useState(false)
  const [checkErrPass,setCheckErrPass] = useState(false)
  
  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubumitLogin = (event) =>{
    event.preventDefault()
    const userLogin ={
        email,
        password
        
    }
    loginApi(userLogin)
    console.log( email,
        password);
}
  const loginApi = async (body) =>{
    await axios.post(`${BASE_URL}login`,body )
    .then((res) =>{
        console.log(res.data)
        setEmail('')
        setPassword('')
        setErrEmail('')
        setErrPass('')
        setCheckErrPass(false)
        setCheckErrEmail(false)
        localStorage.setItem("token",res.data)
        goToFeed(navigate)
        alert(`Seja bem vindo ${res.data.user.name}`)
    })
    .catch((error)=>{
        if(error.response.data.message.includes('Senha incorreta')){
            setErrPass(error.response.data.message)
            setCheckErrPass(true)
        }else{
            setErrEmail(error.response.data.message)
            setCheckErrEmail(true)
        }
        console.log(error.response.data.message)
    })
    }
  
  return (
    <Main>
      <p>Entrar</p>
      <Form onSubmit={onSubumitLogin} >
        <InputMaterial
          error={checkErrEmail}
          helperText={checkErrEmail ? errEmail : ''}
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          placeholder={'email@email.com'}
          value={email}
          onChange={(event)=>setEmail(event.target.value)}  
          required

        />
        <DivPassword>
          <InputMaterial
             error={checkErrPass}
             helperText={checkErrPass ? errPass : ''}
             id="outlined-basic"
            label="Password"
            type={showPassword?'password' :'text'}
            variant="outlined"
            placeholder={'Minimo de 6 caracteres'}
            value= {password}
            onChange={(event) =>setPassword(event.target.value)}
            inputProps={{ minLength: 6,title:"A senha deve conter no minimo 6 caracteres"}}
             required

          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </DivPassword>
        <ButtonStyled type="submit">Entrar</ButtonStyled>
      </Form>
    </Main>
  );
}
export default Login;

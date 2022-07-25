import React,{useState} from "react";
import { useForm } from "../../hooks/useForm";
import { Main, InputMaterial } from './style';
import { IconButton } from "@mui/material";
import { DivPassword,ButtonStyled } from "./style";
import { Visibility, VisibilityOff } from "@mui/icons-material";


 const SignUp = () => {
    const {form,onChange,clean} = useForm({
        "name":     "",
        "email":    "",
        "cpf":      "",
        "password": ""
    })
    const [confirmPassword,setConfirmPasseword] = useState('')
    const [showPassword,setShowPassword] = useState(false)
    const [showCheckPassword,setShowCheckPass] = useState(false)
    const [checkErrPass,setCheckErrPass] = useState(false)
    
    const onSubmitForm = (event) =>{
        event.preventDefault()
        console.log(form)
        if(form.password !== confirmPassword) {
            setCheckErrPass(true)
        }else{
            setCheckErrPass(false)
        }
    }
    const cpfMask=(value)=>{
        return value
        .replace(/\D/g,"")
        .replace(/(\d{3})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d)/,"$1.$2")
        .replace(/(\d{3})(\d{1,2})/,"$1-$2")
        .replace(/(-\d{2})\d+?$/,"$1");
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      }
      const handleClickShowCheckPassword = () => {
        setShowPassword(!showPassword)
      }
    return (

    <Main>
        <p>Cadastrar</p>
        <form  onSubmit={onSubmitForm}>
            <InputMaterial
                id="outlined-basic"
                label={"Nome"}
                name='name'
                type={"text"}
                placeholder={"Digite seu nome"}
                variant="outlined"
                value={form.name}
                onChange={onChange}
            />

            <InputMaterial
                id="outlined-basic"
                label={"Email"}
                name='email'
                type={"text"}
                placeholder={"Digite seu email"}
                variant="outlined"
                value={form.email}
                onChange={onChange}
                required
        /> 
           <InputMaterial
                id="outlined-basic"
                label={"CPF"}
                name='cpf'
                type={"text"}
                placeholder={"Digite seu CPF"}
                variant="outlined"
                value={cpfMask(form.cpf)}
                onChange={onChange}
                required
        />
          <DivPassword>
          <InputMaterial
             error={checkErrPass}
             helperText={checkErrPass ?"Deve ser a mesma que anterior" : ''}
             id="outlined-basic"
            label="Password"
            name="password"
            type={showPassword?'password' :'text'}
            variant="outlined"
            placeholder={'Minimo de 6 caracteres'}
            value= {form.password}
            onChange={onChange}
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
        <DivPassword>
          <InputMaterial
             error={checkErrPass}
             helperText={checkErrPass ? "Deve ser a mesma que anterior" : ''}
             id="outlined-basic"
            label="Confirmar"
            name="password"
            type={showPassword?'password' :'text'}
            variant="outlined"
            placeholder={'Minimo de 6 caracteres'}
            value= {confirmPassword}
            onChange={onChange}
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
        </form> 
    </Main>
        
    )
}
export default  SignUp
import React from "react";
import { ButtonStyled, InputMaterial, Main } from './style';
import { useForm } from '../../hooks/useForm';



 const SignUpAdress = () => {
    
    const {form,onChange,clean} = useForm({
        "street": "",
        "number": "",
        "neighbourhood": "",
        "city": " ",
        "state": "",
        "complement": ""
    })

    const onSubmitAdress = (event) =>{
        event.preventDefault()
        console.log(form)
    }

    return (

    <Main>
        <p>SignUpadres</p>
        <form onSubmit={onSubmitAdress}>
        <InputMaterial
          id="outlined-basic"
          label={"Logadouro"}
          name="street"
          type={"text"}
          placeholder={"Rua / Av."}
          variant="outlined"
          value={form.street}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Numero"}
          name="number"
          type={"number"}
          placeholder={"Numero"}
          variant="outlined"
          value={form.number}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"complemento"}
          name="complement"
          type={"text"}
          placeholder={"Apt / bloco."}
          variant="outlined"
          value={form.complement}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"Bairro"}
          name="neighbourhood"
          type={"text"}
          placeholder={"Bairro."}
          variant="outlined"
          value={form.neighbourhood}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Cidade"}
          name="city"
          type={"text"}
          placeholder={"Cidade."}
          variant="outlined"
          value={form.city}
          onChange={onChange}
          required
        />
        <InputMaterial
          id="outlined-basic"
          label={"Estado"}
          name="state"
          type={"text"}
          placeholder={"Estado."}
          variant="outlined"
          value={form.state}
          onChange={onChange}
          required
        />
         <ButtonStyled type="submit">Entrar</ButtonStyled>
        </form>
    </Main>
        
    )
}
export default  SignUpAdress
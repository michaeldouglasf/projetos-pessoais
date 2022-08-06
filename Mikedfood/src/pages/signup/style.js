import styled from "styled-components"
import { Button,TextField } from '@mui/material';

export  const Main = styled.div`
    padding: 10px;
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    form{
        margin-top:  50px;
        display: flex;
        width: 90%;
        height: 50%;
        justify-content: space-evenly;
        flex-direction: column;
    }
    p{
        font-size: 1rem;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: space-between;
    width: 80%;
`
export const ButtonStyled = styled(Button)`
    &&{
        background-color: #E8222E;
        color: black;
    }
`
export const DivPassword = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const InputMaterial = styled(TextField)`
    width: 100%;
`
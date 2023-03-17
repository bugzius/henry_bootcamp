import { colorGreenBase } from '../../VariablesENV.js';
import styled from "styled-components";

const ButtonStyled = styled.button`
    display: block;
    background: ${colorGreenBase};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    border: none;
    box-shadow: 0 2px 0 grey;
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 0 -2px 0 grey;
        transform: scale(1.03);
    }
`;

export function ButtonNavigate(props){
    return (
        <ButtonStyled onClick={() => props.func(props.valFunc)}>{props.text}</ButtonStyled>
    )
}
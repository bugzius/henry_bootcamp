import React from 'react';
import styled from "styled-components";

import {colorBlueBase} from '../../VariablesENV.js';

const TextStyled = styled.footer`
    padding: 20px 10px;
    background: ${colorBlueBase};
    font-size: 1.5rem;
    text-align: center;
    box-shadow: 0 -2px 5px #c7c7c7;

    width: 100%;
    position: fixed;
    bottom: 0;
`;

export function Footer(){
    return (
        <React.Fragment>
            <TextStyled>Todos los derechos Reservados <strong>&copy; {new Date().getFullYear()}</strong></TextStyled>
        </React.Fragment>
    )
}
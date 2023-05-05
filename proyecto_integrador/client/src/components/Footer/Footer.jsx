import React from 'react';
import styled from "styled-components";

import {colorBlueBase} from '../../VariablesENV.js';

const TextStyled = styled.footer`
    --text-size:1.4rem;
    @media (max-width: 512px){
        --text-size:1rem;
    }
    padding: 20px 10px;
    background: ${colorBlueBase};
    font-size: var(--text-size);
    text-align: center;
    box-shadow: 0 -2px 5px #c7c7c7;

    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
`;

export function Footer(){
    return (
        <React.Fragment>
            <TextStyled>Todos los derechos Reservados <strong>&copy; {new Date().getFullYear()}</strong></TextStyled>
        </React.Fragment>
    )
}
import styled from "styled-components";

import { colorGreenBase } from "../../../VariablesENV";
import { useNavigate } from "react-router-dom";

const ButtonPaginatorStyled = styled.button`
    background: white;
    box-shadow: 0 1px 5px #c7c7c7;
    color: inherit;
    
    font-size: 1rem;

    text-decoration: none;
    border: none;
    cursor: pointer;
    
    border-radius: 2px;
    padding: 5px 15px;
    
    font-weight: bold;
    
    transition: all .3s ease;
    &:hover{
        border-radius: 5px;
        background: ${colorGreenBase};
        box-shadow: 3px 3px 0 #b3b3b3;
    }
`;

export function ButtonPaginator({numberPage,funcActionClick}){
    const navigate = useNavigate();
    return (
        <ButtonPaginatorStyled onClick={() => {
            navigate(`?currentPage=${numberPage}`);
            funcActionClick(numberPage);
        }}>
            <span>{numberPage}</span>
        </ButtonPaginatorStyled>
    )
}
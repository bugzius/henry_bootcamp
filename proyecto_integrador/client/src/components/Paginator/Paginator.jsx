import { useSelector } from "react-redux";
import { ButtonPaginator } from "./ButtonPaginator/ButtonPaginator"
import styled from "styled-components"
import { useEffect, useState } from "react";

const PaginatorContainerStyled = styled.div`
    padding: 10px;
    background: #fafafa;
    border-radius: 10px;
    max-width: 600px;
    margin: 10px auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 1px 5px #e9e9e9;

`;

export function PaginatorCards({setNumberPage, CurrentPage}){
    const [actualPaginator, setActualPaginator] = useState([]);

    //Get data from redux
    const numberPages = useSelector(({numbers_pages_paginator}) => numbers_pages_paginator);

    const changeSetPaginator = () => {
        let arr = new Array(numberPages).fill('').map((v,i) => i + 1);
        const startNumberSlice = CurrentPage > numberPages - 5 ? numberPages - 5 : CurrentPage - 2;

        if(numberPages > 5){
            const [first, second, third, four, five] = arr.slice(Math.abs(startNumberSlice));
            return setActualPaginator([first,second, third,'Ir a Inicio',four, five]);
        };
    };

    useEffect(changeSetPaginator,[CurrentPage, numberPages]);

    return (
        <PaginatorContainerStyled>
            {
                actualPaginator.map((val, nPage) => (
                    <ButtonPaginator funcActionClick={setNumberPage} key={nPage} numberPage={val} />
                ))
            }
        </PaginatorContainerStyled>
    )
}
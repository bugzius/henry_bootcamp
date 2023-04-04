import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import imageTitle from '../../resources/favorites_title_background.png';
import { BaseURLApi } from "../../VariablesENV";
import Cards from "../Cards/Cards";

const TitleSection = styled.div`
    position: relative;
    overflow: hidden;

    border-top: 4px solid #002d4b;
    
    background: linear-gradient(0.7turn, #f0f0f03c,#0000005e,#f0f0f069), url(${imageTitle});
    background-attachment: fixed;
    background-size: contain;

    box-shadow: inset 0 0 35px #000000a4;
    & h1{
        backdrop-filter: blur(5px);
        padding: 30px 10px;
        color: white;
        text-align: center;
    }
`;

const FavoriteCharacters = () => {
    const data = useSelector(state => state.list_favorite);

    return (
        <div style={{marginBottom:"100px"}}>
            <TitleSection className="box-title-page">
                <h1>Tus Favoritos</h1>
                <div className="backroung_title"></div>
            </TitleSection>
            <Cards textEmpty={'No tienes favoritos, Agrega uno'} panel={false} characters={data}/>
        </div>
    );
}
 
export {
    FavoriteCharacters
};
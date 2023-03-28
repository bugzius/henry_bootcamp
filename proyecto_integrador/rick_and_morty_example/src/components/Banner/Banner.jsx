import imageBanner from'../../resources/wallpaper_background_r_m.webp'
import { colorGreenBase } from '../../VariablesENV.js';

import styled from "styled-components";
import { Navigate } from 'react-router-dom';

const ContainerBannerDiv = styled.div`
    @media (max-width: 516px) {
        font-size:1.2rem;
        min-height: auto;
    }
    color: white;
    background-image: url(${({imageBanner}) => imageBanner});
    background-position: center;
    background-size: cover;

    min-height: 70vh;
    padding: 25px 0;
    font-size: 2rem;

    display: grid;
    align-content: center;
    gap: 25px;

    .ctn_info{
        text-align: center;
        p{
            text-shadow: 0 1px 10px rgba(0,0,0,0.7);
        }
    }
    .ctn_buttons{
        display: grid;
        justify-content: center;
    }
`;

const ButtonStyled = styled.button`
    @media (max-width: 516px) {
        font-size: 1.2rem;
    }
    display: block;
    background: ${colorGreenBase};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.7rem;
    border: none;
    box-shadow: 0 2px 0 grey;
    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover{
        box-shadow: 0 -2px 0 grey;
        transform: scale(1.03);
    }
`;

const Banner = ({idHref}) => {
    return (
        <ContainerBannerDiv imageBanner={imageBanner}>
            <div className="ctn_info">
                <h1>Rick And Morty</h1>
                <p>This is a App to Get Info from API</p>
            </div>
            <div className="ctn_buttons">
                <ButtonStyled onClick={() => window.location.hash = `#${idHref}`}>Empezar</ButtonStyled>
            </div>
        </ContainerBannerDiv>
    );
}
 
export default Banner;
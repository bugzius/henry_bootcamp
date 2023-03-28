import styled from "styled-components"
import { Navigate, useNavigate } from 'react-router-dom';
import { ButtonNavigate } from "../ButtonNavigate/ButtonNavigate.jsx";
import { hashSession } from "../../VariablesENV.js";

import AboutImage from '../../resources/AboutImage.webp';

const ContainerCardAbout = styled.div`
    --p-size: 20px;
    --text-p-size:1.2rem;
    --text-h2-size: auto;
    --m-top-size: 40px;
    --width-base-percen: 80%;
    
    @media (max-width: 512px){
        --width-base-percen: 95%;
        --text-p-size:1rem;
        --p-size: 10px;
        --m-top-size: 25px;
        --text-h2-size: .8rem;
    }
    
    background: #f1f1f1;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: var(--m-top-size);
    width: var(--width-base-percen);

    max-width: 800px;

    box-shadow: -1px -1px 25px rgba(0,0,0,0.3);

    & .imageAbout{
        width: 100%;
        object-fit: cover;
    }

    & .informationAbout{
        padding: var(--p-size);
        & .informationAboutTitle{
            font-size: var(--text-h2-size);
            border-bottom: 2px solid #cccccc;
        }
        & .informationAboutDescription{
            padding: 10px 0;
            padding-top: 30px;
            font-size: var(--text-p-size);
        }
    }
`;

const ContainerAboutStyled = styled.div`
    padding: 10px;
    text-align: center;
    margin-bottom: 100px;
    & .titleAbout{
        padding: 10px;
        border-bottom: 2px solid gray;
    }
`;

export function About(){
    const navigate = useNavigate();
    const session = sessionStorage.getItem(hashSession) ?? null

    return (
        <ContainerAboutStyled>
            {
                !session && <Navigate replace to='/login' />
            }
            <ButtonNavigate func={navigate} valFunc={-1} text={"Regresar"} />
            <h1 className="titleAbout">Conoce Nuestro Proyecto</h1>
            <ContainerCardAbout>
                <img className="imageAbout" src={AboutImage} alt="Image About" />
                <article className="informationAbout">
                    <section className="informationAboutTitle">
                        <h2>Rick And Morty APP</h2>
                    </section>
                    <section className="informationAboutDescription">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam omnis obcaecati quam cupiditate nisi eligendi in, magni harum incidunt expedita? Deleniti dolorem repellendus ducimus aspernatur atque, eum aliquid? Vero temporibus eius non animi repudiandae ad dolores corporis voluptates nemo.</p>
                    </section>
                </article>
            </ContainerCardAbout>  
        </ContainerAboutStyled>
    )
}
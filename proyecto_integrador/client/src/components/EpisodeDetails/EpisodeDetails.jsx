import styled from "styled-components";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { BaseURLApi, BaseURLApiEpisode } from "../../VariablesENV";

import { ButtonNavigate } from "../ButtonNavigate/ButtonNavigate";
import ListIconsCharactersStyled from '../ListIconsCharacters/ListIconsCharacters';

import { hashSession } from "../../VariablesENV.js";
import Loading from "../Loading/Loading";
import { NotFound } from "../NotFound/NotFound";


function EpisodeDetails() {
    const session = sessionStorage.getItem(hashSession) ?? null

    const {id_episode} = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [episode, setEpisode] = useState({});
    const [charactersEpisode, setCharactersEpisode] = useState([]);

    useEffect(() => {
        fetch(`${BaseURLApiEpisode}/${id_episode}`)
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    //* Add Episode
                    setEpisode(() => {
                        //! Reset Loading
                        setLoading(false);
                        return data;
                    });

                    //* Generate Array for Characters Fetch
                    const characterArr = data.characters.map(ch => ch.split('/').at(-1)).toString();
                    return fetch(`${BaseURLApi}/${characterArr}`);
                };
            })
            .then(res => res.json())
            .then(characters => {
                setCharactersEpisode(() => characters)
            })
            .catch(() => {
                setLoading(false);
            });
    },[])

    return (
        <StyledEpisodeDetails>
            {
                !session && <Navigate replace to='/login' />
            }
            <ButtonNavigate text={'Regresar'} func={() => navigate(-1)}/>
            {
                loading ?
                    <Loading type={'full'}/>
                :
                    episode.name ?
                        <>
                            <TagEpisode>
                                Episode
                                <span> #{episode.id}</span>
                            </TagEpisode>
                            <TitleEpisode>{episode.name}</TitleEpisode>
                            <DateEpisode>Lanzado {episode.air_date}</DateEpisode>
                            <SubTitleEpisode>Personajes en este Episodio</SubTitleEpisode>
                            {
                                charactersEpisode.length > 0 ?
                                    <ListIconsCharactersStyled characters={charactersEpisode}/>
                                : null
                            }
                        </>
                    : <NotFound text={'Episodio no Encontrado'} />
            }
        </StyledEpisodeDetails>
    );
}

const StyledEpisodeDetails = styled.div`
    padding: 10px;
    text-align: center;
    margin-bottom: 100px;
`;

const TagEpisode = styled.p`
    --p-size: 20px;
    --text-p-size:1.5rem;
    
    @media (max-width: 512px){
        --text-p-size:1.2rem;
        --p-size: 10px;
    }
    text-align: center;
    font-size: var(--text-p-size);
    
    font-weight: 800;
    & span{
        font-weight: 200;
    }
`;

const TitleEpisode = styled.h1`
    text-align: center;
`;

const DateEpisode = styled.p`
    text-align: center;
    padding-top: 5px;
`;

const SubTitleEpisode = styled.h2`
    padding-top: 10px;
    position: relative;
    width: fit-content;
    margin: 0 auto 30px auto;
    background: white;

    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        border-radius: 0 0 10px 10px;
        bottom: -10px;
        left: 0;
        background: #0088ff;
        box-shadow: 0 1px 10px #0088ff77;
    }
`;

/* --p-size: 20px;
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
*/

export default EpisodeDetails;
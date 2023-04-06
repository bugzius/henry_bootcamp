import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonNavigate } from '../ButtonNavigate/ButtonNavigate.jsx';
import { CardDetail } from './CardDetail/CardDetail.jsx';
import { NotFound } from '../NotFound/NotFound.jsx';
import Loading from '../Loading/Loading.jsx';

import { BaseURLApi, hashSession } from '../../VariablesENV.js';

const ContainerCardDetails = styled.div`
    padding: 10px;
`;

export function CardDetails(){
    const session = sessionStorage.getItem(hashSession) ?? null
    //
    const navigate = useNavigate();
    //Obteniene los valores actuales de la ruta
    const {id} = useParams();
    
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`${BaseURLApi}/${id}`)
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setCharacter((s) => {
                        if(s.name)setLoading(false);
                        return data;
                    });
                    return;
                }
                setLoading(false);
            })
            .catch(console.log);
    },[])

    return (
        <ContainerCardDetails>
            {
                !session && <Navigate replace to='/login' />
            }
            <ButtonNavigate func={navigate} valFunc={-1} text={"Regresar"} />
                {
                    loading ?
                        <Loading type="full"/>
                        : character.name ?
                            <CardDetail
                                name={character.name}
                                gender={character.gender}
                                species={character.species}
                                status={character.status}
                                image={character.image}
                                id={character.id}
                                created={character.created}
                                nameOrigin={character.origin.name}
                                nameLocation={character.origin.name}
                            />
                        :
                        <NotFound text='El Elemento que intenta Abrir no Existe'/>
                    
                }
        </ContainerCardDetails>
    )
}
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonNavigate } from '../ButtonNavigate/ButtonNavigate.jsx';
import { CardDetail } from './CardDetail/CardDetail.jsx';
import { NotFound } from '../NotFound/NotFound.jsx';

import { BaseURLApi } from '../../VariablesENV.js';

const ContainerCardDetails = styled.div`
    padding: 10px;
`;

export function CardDetails(props){
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`${BaseURLApi}/${id}`)
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setCharacter(data);
                }
            })
            .catch(console.log)
    },[])

    return (
        <ContainerCardDetails>
            {
                !props.session && <Navigate replace to='/login' />
            }
            <ButtonNavigate func={navigate} valFunc={-1} text={"Regresar"} />
                {
                    character.name ?
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
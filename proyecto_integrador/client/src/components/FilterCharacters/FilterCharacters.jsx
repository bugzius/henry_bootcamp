import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useEffect } from "react";

const initialStateInfoFilter = {gender:'', order:'0'};

function FilterCharacters({changeFilterDataFunction, dataCharacters}) {
    
    const [infoFilter, setInfoFilter] = useState(initialStateInfoFilter);

    const handleResetFilter = () => {
        setInfoFilter({...initialStateInfoFilter});
    };

    const handleChange = e => {
        const {target:{name, value}} = e;

        setInfoFilter(info => ({...info, [name]:value}));
    };

    useEffect(() => {
        const validateSortCondition = {
            '0':(a,b) => a - b,
            '1':(a,b) => b - a
        }
        changeFilterDataFunction(() => {
            return dataCharacters.filter(({gender}) => (
                infoFilter.gender === "" ?  true : gender.toLowerCase() === infoFilter.gender
            )).sort(({id:idA},{id:idB}) => {
                return validateSortCondition[infoFilter.order](idA, idB);
            });
        });
    },[infoFilter]);

    return (
        <>
            <TitleFilter className="title_filter_cp">Filtrar</TitleFilter>
            <ContentSelects>
                <button title="Reestablecer Filtrado" className="icon_filter" onClick={handleResetFilter}>
                    <FontAwesomeIcon icon={faFilter}/>
                </button>
                <SelectStyledComponent name="gender" onChange={handleChange} value={infoFilter.gender} >
                    <option value="">Genero</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="genderless">Sin Genero</option>
                </SelectStyledComponent>
                <SelectStyledComponent name="order" onChange={handleChange} value={infoFilter.order}>
                    <option value="0">ascendente</option>
                    <option value="1">descendente</option>
                </SelectStyledComponent>
            </ContentSelects>
        </>
    );
}

const ContentSelects = styled.div`
    background: #e9e9e9;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;

    position: relative;
    width: 100%;
    max-width: 400px;

    border-radius: 10px;
    padding: 10px;
    margin: 10px auto 10px auto;
    padding-left: 35px;
    & .icon_filter{
        position: absolute;
        left: 2%;
        top: 50%;
        transform: translateY(-50%);

        background: none;
        
        border: none;
        outline: none;
        
        color: red;
        font-size: 1.2rem;
        transition: all .3s ease;

        cursor: pointer;

        svg{
            filter: drop-shadow(0 1px 0px black);
        }
        &:hover{
            font-size: 1.3rem;
        }
    }

`;

const SelectStyledComponent = styled.select`
    padding: 10px;
    border-radius: 10px;

    border: none;
    outline: none;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
`;

const TitleFilter = styled.h3`
    width: fit-content;
    margin: 0 auto 0 auto;
    text-align: right;
    padding: 10px 20px 0 10px;
    border-bottom: 2px solid black;
`

export default FilterCharacters;
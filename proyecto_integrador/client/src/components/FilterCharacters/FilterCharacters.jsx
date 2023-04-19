import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

function FilterCharacters() {
    return (
        <>
            <ContentSelects>
                <FontAwesomeIcon className="icon_filter" icon={faFilter}/>
                <SelectStyledComponent name="gender" >
                    <option value="unknown">Sin conocer</option>
                    <option value="male">Masculino</option>
                    <option value="female">`Femenino</option>
                    <option value="genderless">Sin Genero</option>
                </SelectStyledComponent>
                <SelectStyledComponent name="order" >
                    <option value="0">ascendente</option>
                    <option value="1">descendente</option>
                </SelectStyledComponent>
            </ContentSelects>
        </>
    );
}

const ContentSelects = styled.div`
    background: black;

    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 10px;

    width: 100%;
    max-width: 400px;

    padding: 10px;
    margin: 10px auto;

    position: relative;
    padding-left: 25px;

    & .icon_filter{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        color: white;
        filter: drop-shadow(0 1px 0 black);
    }
`;

const SelectStyledComponent = styled.select`
    padding: 10px;
    border-radius: 10px;
`;

export default FilterCharacters;
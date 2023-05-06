import styled from "styled-components";
import IconCharacter from "../IconCharacter/IconCharacter";

function ListIconsCharacters({characters}) {
    return (
        <ListIconsCharactersStyled>
            {
                characters.map((ch,i) => (
                    <IconCharacter {...ch} key={i}/>
                ))
            }
        </ListIconsCharactersStyled>
    );
}

const ListIconsCharactersStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;

    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

export default ListIconsCharacters;
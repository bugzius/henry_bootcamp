import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

function IconCharacter({id, name, status, image}) {
    return (
        <IconCharacterStyled to={`/characters/${id}`}>
            <img src={image} alt={`image_icon_${name}`} />
            <FloatStatusIconCharacter status={status}>
                {status}
            </FloatStatusIconCharacter>
        </IconCharacterStyled>
    );
}

const IconCharacterStyled = styled(NavLink)`
    display: block;

    width: 70px;
    height: 70px;

    border-radius: 10px;
    border: 3px solid var(--color-blue-base);
    box-shadow: 0 1px 5px var(--color-blue-base);
    color: inherit;

    cursor: pointer;

    & img{
        border-radius: 10px;
        width: 100%;
        image-rendering: optimizeQuality;
        transition: all .3s ease-in-out;
    }

    &:hover{
        & img{
            transform: translateY(-5%);
        }
    }

    //! FLoatStatus
    position: relative;
`;

const FloatStatusIconCharacter = styled.span`
    padding: 4px 7px;
        
    position: absolute;
    z-index: 1;
    
    @media (max-width: 512px) {
        font-size: .6rem;
        left: 50%;
        transform: translateX(-50%);
        top: 75%;
    }

    left: -35px;
    top: -10px;
    
    background: white;
    ${({status}) => {
        const value = ({
            unknown:'#b8b8b8',
            Dead:'#ff1a1a',
            Alive:'#2bff2b'
        })[status];
        return css`
            border: 3px solid ${value};
            box-shadow: 0 1px 3px ${value};
        `;
    }}
    border-radius: 20px;
    font-size: .7rem;
`;

export default IconCharacter;
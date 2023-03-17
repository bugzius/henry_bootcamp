import styled from "styled-components"

const NotFoundStyled = styled.div`
    --text-size:1.4rem;
    @media (max-width: 512px){
        --text-size:1rem;
    }
    margin: 10px auto 0 auto;
    text-align: center;
    font-size: var(--text-size);
    background: #e6e6e6;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.3) ;
`;

export function NotFound(props){
    return (
        <NotFoundStyled>{props.text}</NotFoundStyled>
    )
}
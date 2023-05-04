import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

function EpisodesCardDetails({episodes}) {
    const navigate = useNavigate();
    return (
        <EpisodesContainer>
            <h2>Episodes</h2>
            <div className="list_episodes">
                {
                    episodes.map( (url, i) => {
                        const id = url.split('/').at(-1);
                        return (
                            <EpisodeCard
                                onClick={() => navigate(`episode/${id}`)}
                                key={i}
                                valueColor={i * 10}
                            >
                                {id}
                            </EpisodeCard>
                        )
                    })
                }
            </div>
        </EpisodesContainer>
    );
}

const EpisodesContainer = styled.div`
    border-top: 4px solid #c2c2c2;

    padding: 10px 0;

    margin: 10px auto 100px auto;
    width: 100%;
    max-width: 800px;
    
    h2{
        text-align: center;
        padding-bottom: 20px;
    }

    & .list_episodes{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-items: center;
        gap: 10px;
    }
`;

const EpisodeCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    aspect-ratio: 1;
    width: 50px;

    ${({valueColor}) => {
        return css`background: hsl(${valueColor}, 100%, 45%);`;
    }}
    font-weight: bold;
    border-radius: 50%;
    border: 5px solid #dfdfdf;
    box-shadow: 0 1px 2px rgba(0,0,0,0.3),
            inset 0 1px 5px rgba(0,0,0,0.2);
    
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.03);
        filter: hue-rotate(-45deg);
        box-shadow: 0 1px 5px rgba(0,0,0,0.4);
    }
`;
export default EpisodesCardDetails;
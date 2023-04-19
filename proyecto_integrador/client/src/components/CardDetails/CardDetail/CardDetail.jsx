import styled from "styled-components"
import { colorBlueBase, colorGreenBase } from "../../../VariablesENV";

const CardStyled =  styled.div`
    margin: 10px auto 100px auto;
    width: 100%;
    max-width: 800px;
    background: #efefef;
    border-radius: 10px;
    box-shadow: 0 1px 15px #c7c7c7;
    overflow: hidden;

    & .top-side-card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        box-shadow: -1px 3px 0 black;
        
        & .image-card-detail{
            width: 100%;
            object-fit: cover;
            height: 300px;
            margin: 0 auto;
            image-rendering:optimizeSpeed;
            filter: drop-shadow(0 1px 5px #a2a2a2) contrast(1.2) saturate(1.6);
        }

        & .top-info-card{
            height: 100%;
            padding: 20px;
            background: ${colorBlueBase};

            & .title-name{
                background: ${colorGreenBase};
                padding: 5px 10px;
                border-radius: 5px 5px 0 0;
                width: fit-content;
                font-size: 1.5rem;
                border-bottom: 2px solid black;
            }
            & .info{
                & p{
                    border-radius: 5px 5px 0 0;
                    background: white;
                    width: fit-content;
                    margin: 5px 0;
                    padding: 5px 10px;
                    box-shadow: 2px 2px 0 black;
                    &.status-character::before{
                        display: inline-block;
                        content: "";
                        width: 13px;
                        aspect-ratio: 5/5;
                        margin-right: 5px;
                        vertical-align: middle;

                        border-radius: 50%;
                        box-shadow: 0 1px 5px rgba(0,0,0,0.4);
                        background: blue;
                    }
                    &.status-character.Alive::before{
                        background: #00ff00;
                    }
                    &.status-character.Dead::before{
                        background: #ff0000;
                    }
                }
            }
        }
    }
    & .bottom-side-card{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-around;
        padding: 30px 20px;
        & p{
            background: white;
            padding: 5px 10px;
            border-radius: 4px;
            box-shadow: -3px -3px 0 black,
                        3px 3px 0 black,
                        inset 0 1px 2px ${colorGreenBase},
                        inset 0 -1px 2px ${colorBlueBase};
        }
    }
`;

export function CardDetail({name,gender,species,image,status,id,nameOrigin, nameLocation}){
    const genderObj = {'Female':"♀",'Male': "♂️"}
    const unknownValue = val => val !== 'unknown' ? val : 'Desconocido';
    return (
        <CardStyled>
            <div className="top-side-card">
                <img className="image-card-detail" src={image} alt={`image_${name}_${id}`} />
                <div className="top-info-card">
                    <p className="title-name">{name}</p>
                    <div className="info">
                        <p>{genderObj[gender]} {gender}</p>
                        <p className={`status-character ${status}`}>{status}-{species}</p>
                    </div>
                </div>
            </div>
            <div className="bottom-side-card">
                <p><strong>Origen: </strong>{unknownValue(nameOrigin)}</p>
                <p><strong>Ubicación:</strong> {unknownValue(nameLocation)}</p>
            </div>
        </CardStyled>      
    )
}
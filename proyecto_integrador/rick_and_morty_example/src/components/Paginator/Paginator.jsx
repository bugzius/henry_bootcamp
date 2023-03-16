import { ButtonPaginator } from "./ButtonPaginator/ButtonPaginator"
import styled from "styled-components"

const PaginatorContainerStyled = styled.div`
    padding: 10px;
    background: #fafafa;
    border-radius: 10px;
    max-width: 600px;
    margin: 10px auto;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 1px 5px #e9e9e9;
`;

export function PaginatorCards({setNumberPage}){
    const arr = new Array(10).fill('page');
    return (
        <PaginatorContainerStyled>
            {
                arr.map((val,nPage) => (
                    <ButtonPaginator funcActionClick={setNumberPage} key={nPage} numberPage={nPage + 1} />
                ))
            }
        </PaginatorContainerStyled>
    )
}
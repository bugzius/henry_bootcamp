import styled from 'styled-components';

function UserCard({name,username, company, email, phone}) {
    return (
        <ComponentUserCardStyled>
            <h2>{name}</h2>
            <div className="items">
                <p><strong>username: </strong>{username}</p>
                <p><strong>compañía: </strong>{company.name}</p>
                <p><strong>email: </strong>{email}</p>
                <p><strong>N. Telefónico: </strong>{phone}</p>
            </div>
        </ComponentUserCardStyled>
    );
}

const ComponentUserCardStyled = styled.div`
    text-align: center;
    margin: 5px 0;
    border-radius: 10px;
    overflow: hidden;

    h2{
        background: rgba(255,255,255,0.2);
    }
    .items{
        padding: 10px;
        background: rgba(255,255,255,0.3);
    }
`
export default UserCard;
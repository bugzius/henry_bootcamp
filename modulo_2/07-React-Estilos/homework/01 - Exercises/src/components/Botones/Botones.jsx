import React from 'react';
import styled from 'styled-components';

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background: linear-gradient(.2turn, #e9e9 50%, rgba(255,255,255,0.4) 70%) ,url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  padding: 10px;
  transition: all .3s ease;
`;

const Buttons = styled.button`
  background: transparent;
  backdrop-filter: blur(3px);
  border-radius: 5px;
  background:  #e9e9e93f;
  box-shadow: 0 1px 8px rgba(0,0,0,0.3);
  border: none;
  padding: 5px 10px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;

  transition: all .3s ease;

  &:hover{
    transform: scale(1.1);
  }
`;

export default class Botones extends React.Component {
  render () {
    const { alerts } = this.props;
    return (
      <>
        <DivButtons>
          <Buttons onClick={() => alert(alerts.m1)}>Modulo 1</Buttons>
          <Buttons onClick={() => alert(alerts.m2)}>Modulo 2</Buttons>
        </DivButtons>
      </>
    )
  }
}

// Esto lo exportamos para los tests
export { DivButtons, Buttons }

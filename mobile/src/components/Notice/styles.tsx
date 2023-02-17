import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 5%;

  background: #ff727256;
  width: 90%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #971212;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Message = styled.Text`
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #6F0000;
`;
import styled from 'styled-components/native';


export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.628);
`;

export const Modal = styled.Modal`
`;

export const Main = styled.View`
  width: 92%;
  height: auto;
  margin: auto;
  margin-top: 38%;
  background-color: #FFF;
  border-radius: 4px;
  padding-bottom: 8px;
`; 

export const ModalHeader = styled.View`
  width: 100%;
  height: 64px;
  padding: 0 8px;
  background-color: #127fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  width: 100%; 
  text-align: center; 
  position: absolute;
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const ModalBody = styled.View`
  width: 100%;
  padding: 0 12px;
`;

export const ModalFooter = styled.View`
  width: 100%;
  padding: 0 12px;
  margin-top: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
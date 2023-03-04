import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #CCD1FF;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const Modal = styled.View`
  background-color: #ECECEC;
  margin-top: 40%;
  width: 95%;
  height: 265px;
  border-radius: 8px;
`;

export const ModalTitle = styled.Text`
  background-color: #127FFF;
  color: #FFF;
  font-size: 16px;
  text-align: center;

  padding: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ModalBody = styled.View`
  margin-top: 8px;
  padding: 0 12px;
`;

export const ModalFooter = styled.View`
  margin-top: 12px;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  background-color: #127FFF;
  min-width: 25%;
  padding: 15px 20px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
`;

export const Text = styled.Text`
  text-align: center;
  color: #FFF;
  font-weight: 700;
`;
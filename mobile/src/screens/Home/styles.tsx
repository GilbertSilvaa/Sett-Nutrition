import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background-color: #CCD1FF;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;

export const DateContainer = styled.View`
  width: 70%;
  height: auto;
  margin: 24px auto;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
`;

export const ButtonMenu = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 12px;
`;
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: #CCD1FF;
`;

export const Header = styled.View`
  height: 72px;
  background-color: #257be2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const Text = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const CardMealButton = styled.TouchableOpacity`
  margin: 12px 8px;
  height: 88px;
`;

export const CardMeal = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const CardMealMain =  styled.View`
  width: 100%;
  height: 100%;
  background-color: #00000068;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
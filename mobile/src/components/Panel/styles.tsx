import styled from 'styled-components/native';

export const Container = styled.View`
  height: 300px;
  width: 100%;
  padding: 8px;
  background-color: #5fa7ffaf;
  border-radius: 4px;
  border: 2px solid #257be2;
`;

export const SessionsHeader = styled.View`
  height: 48px;
  width: 100%;
  padding: 8px 4px;
  background-color: #257be2;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
`;

export const SessionItem = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  background-color: ${(props) => props.accessible ? '#FFF' : 'transparent'};
  font-size: 16px;
  color: #257be2;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
`;
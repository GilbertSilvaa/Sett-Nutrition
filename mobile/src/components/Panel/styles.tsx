import styled from 'styled-components/native';

export const Container = styled.View`
  height: 348px;
  width: 100%;
  padding: 8px;
  background-color: #5fa7ffaf;
  border-radius: 4px;
  border: 2px solid #257be2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const MacrosSubtitle = styled.View`
  width: 100%;
  height: 64px;
  padding: 0 12px;
  background-color: #257be2;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MacroSubtitleItem = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 4px;
`;

export const MacroSubtitleColor = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 60px;
`;

export const MacroSubtitleText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

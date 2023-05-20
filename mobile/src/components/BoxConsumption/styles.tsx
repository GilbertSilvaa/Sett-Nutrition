import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  min-height: 92px;
  margin-top: 32px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const Header = styled.View`
  padding: 0 8px;
  width: 100%;
  height: 68px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #257be2;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
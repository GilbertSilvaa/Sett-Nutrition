import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #CCD1FF;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #113560;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

export const Padding = styled.View`
  padding: 16px;
  flex: 1;
`;

export const Spacing = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 100%;
  height: 35%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
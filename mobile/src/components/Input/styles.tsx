import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 50px;
  margin-bottom: 64px;
`;

export const Input = styled.TextInput`
  background-color: #f1f1f1;
  border: 2px solid #0052B3;
  height: 56px;
  padding: 0 16px;
  font-size: 16px;
  color: #222222;
  border-radius: 4px;
  
  flex: 1;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UnitContainer = styled.View`
  width: 55px;
  height: 100%;
  background-color: #53a3ff33;
  border: 2px solid #0052B3;
  border-radius: 4px;
  border-left-width: 1px;

  display: flex;
  justify-content: center;
`;

export const UnitText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #113560;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #113560;
  margin-bottom: 8px;
`;
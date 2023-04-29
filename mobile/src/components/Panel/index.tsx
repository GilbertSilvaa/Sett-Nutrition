import { useState } from 'react';
import { Text } from 'react-native';
import { 
  Container, 
  SessionItem, 
  SessionsHeader, 
  MacrosSubtitle, 
  MacroSubtitleItem, 
  MacroSubtitleColor, 
  MacroSubtitleText
} from './styles';

import PieChart from 'react-native-expo-pie-chart';

interface PanelProps {
  macrosAmounts: {
    amount: number,
    macroName: string,
    color: string
  }[]
}

const panelSessions = ['macros', 'calorias', 'água'];

export function Panel({ macrosAmounts }: PanelProps) {
  const [sessionStates, setSessionStates] = useState(
    panelSessions.map((_, index) => index == 0 ? true : false)
  );

  function changeSession(sessionIndex: number) {
    setSessionStates(prev => prev.map((_, index) => 
      index == sessionIndex ? true : false
    ));
  }

  return (
    <Container>
      <SessionsHeader>
        {panelSessions.map((session, index) => (
          <SessionItem
            key={index} 
            activeOpacity={0.7}
            accessible={sessionStates[index]} 
            onPress={() => changeSession(index)}
          > 
            <Text 
              style={{ 
                color: sessionStates[index] ? '#257be2' : '#FFF', 
                fontWeight: 'bold', 
                textTransform: 'capitalize' 
              }}
            >
              {session}
            </Text>
          </SessionItem> 
        ))}
      </SessionsHeader>

    
      {/* @ts-ignore */}
      <PieChart
        data={macrosAmounts.map(props => (
          { 
            key: props.macroName, 
            count: props.amount, 
            color: props.color 
          }
        ))}
        length={170}
      />

      <MacrosSubtitle>
        {macrosAmounts.map((subtitle, index) => (
          <MacroSubtitleItem key={index}>
            <MacroSubtitleColor style={{ backgroundColor: subtitle.color }}/>
            <MacroSubtitleText>
              <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold' }}>
                {subtitle.amount}g
              </Text>
              <Text style={{ color: '#FFF', textTransform: 'capitalize' }}>
                {subtitle.macroName}
              </Text>
            </MacroSubtitleText>
          </MacroSubtitleItem>
        ))} 
      </MacrosSubtitle>
    </Container>
  );
}
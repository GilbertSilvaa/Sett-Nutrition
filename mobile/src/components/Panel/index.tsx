import { useState } from 'react';
import { Text, View } from 'react-native';
import { 
  Container, 
  SessionItem, 
  SessionsHeader, 
  MacrosSubtitle, 
  MacroSubtitleItem, 
  MacroSubtitleColor, 
  MacroSubtitleText,
  ChartContainer,
  ChartTextCenter
} from './styles';

import { VictoryPie } from 'victory-native'; 
import { theme } from './themeChart';

interface PanelProps {
  macrosAmounts: {
    amount: number,
    macroName: string,
    color: string
  }[]
}

const panelSessions = ['macros', 'calorias', 'água'];
const chartData = [900, 250, 335];

export function Panel({ macrosAmounts }: PanelProps) {
  const [panelSessionStates, setSessionStates] = useState(
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
        {panelSessions.map((panelSession, index) => (
          <SessionItem
            key={index} 
            activeOpacity={0.7}
            accessible={panelSessionStates[index]} 
            onPress={() => changeSession(index)}
          > 
            <Text 
              style={{ 
                color: panelSessionStates[index] ? '#257be2' : '#FFF', 
                fontWeight: 'bold', 
                textTransform: 'capitalize' 
              }}
            >
              {panelSession}
            </Text>
          </SessionItem> 
        ))}
      </SessionsHeader>

      <ChartContainer>
        <VictoryPie
          innerRadius={64}
          data={chartData}
          labels={() => null}
          theme={theme}
          height={280}
        />  
        <ChartTextCenter>
          <Text style={{ color: '#FFF', fontSize: 24, fontWeight: '900' }}>1135</Text>
          <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: '600' }}>Kcals</Text>
        </ChartTextCenter>
      </ChartContainer>

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
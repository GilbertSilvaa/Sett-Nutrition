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
  macros: {
    amount: number,
    macroName: string,
    color: string
  }[],
  calories: {
    amount: number;
    goal: number;
  },
  water: {
    amount: number;
    goal: number;
  },
  showOptions?: boolean;
}

const panelSessions = ['macros', 'calorias', 'água'];

export function Panel({ macros, calories, water, showOptions }: PanelProps) {
  const [chartData, setChartData] = useState(macros.map(macro => macro.amount));
  const [panelSessionStates, setSessionStates] = useState(
    panelSessions.map((_, index) => index == 0 ? true : false)
  );

  function changeSession(sessionIndex: number) {
    setSessionStates(prev => prev.map((_, index) => 
      index == sessionIndex ? true : false
    ));
    
    switch(sessionIndex) {
      case 1: // Check if it's the calories session
        setChartData([calories.amount, 0, 0, calories.goal - calories.amount]);
      break;
      case 2: // Check if it's the water session
        setChartData([water.amount, 0, 0, water.goal - water.amount]);
      break;
      default: // Is the macros session
        setChartData(macros.map(macro => macro.amount));
      break;
    } 
  }

  return (
    <Container>
      {showOptions &&
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
      }

      <ChartContainer>
        <VictoryPie
          innerRadius={64}
          data={chartData}
          labels={() => null}
          theme={theme}
          height={280}
        />  
        <ChartTextCenter>
           <Text style={{ color: '#FFF', fontSize: 24, fontWeight: '900' }}>
              {panelSessionStates[2] ? water.amount: calories.amount}
            </Text>

            {(panelSessionStates[1] || panelSessionStates[2]) && 
              // Check if it's the calories or water session
              <>
                <View 
                  style={{borderBottomColor: '#FFF', borderBottomWidth: 2, marginVertical: 2}}
                />
                <Text style={{ color: '#FFF', fontSize: 24, fontWeight: '900' }}>
                  {panelSessionStates[2] ? water.goal : calories.goal}
                </Text>
              </>
            }
            <Text style={{textAlign: 'center', color: '#FFF', fontWeight: '600'}}>
              {panelSessionStates[2] ? 'Mls' : 'Kcals'}
            </Text>
        </ChartTextCenter>
      </ChartContainer>

      {panelSessionStates[0] && // Check if it's the macro session
        <MacrosSubtitle>
          {macros.map((subtitle, index) => (
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
      }
    </Container>
  );
}
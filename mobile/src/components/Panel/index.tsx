import { useState } from 'react';
import { Text } from 'react-native';
import { Container, SessionItem, SessionsHeader } from './styles';

interface PanelProps {
  sessions: string[]
}

export function Panel({ sessions }: PanelProps) {
  const [sessionStates, setSessionStates] = useState(
    sessions.map((_, index) => index == 0 ? true : false)
  );

  function changeSession(sessionIndex: number) {
    setSessionStates(prev => prev.map((_, index) => 
      index == sessionIndex ? true : false
    ));
  }

  return (
    <Container>
      <SessionsHeader>
        {sessions.map((session, index) => (
          <SessionItem 
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
    </Container>
  );
}
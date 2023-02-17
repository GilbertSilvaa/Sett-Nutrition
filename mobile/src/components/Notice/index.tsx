import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, Message } from './styles';

interface NoticeProps {
  message: string;
}

export function Notice({ message }: NoticeProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 3000)
  }, [message]);

  return (
    <>
    {(message && isVisible) &&
      <Container>
        <Ionicons
          name="information-circle-outline"
          size={24}
          color="#6F0000"
        />
        <Message>{ message }</Message>
      </Container>
    }
    </>
  );
}
import { ButtonOption } from '../ButtonOption';
import { 
  Container, 
  Modal, 
  Main, 
  ModalHeader, 
  ModalTitle, 
  ModalFooter 
} from '../ModalAmount/styles';

interface ModalDeleteProps {
  idElement: string|null;
  handleYesClick: (idElement: string|null) => void;
  handleNoClick: () => void;
}

export function ModalDelete({ 
  handleYesClick,
   handleNoClick,
    idElement 
}: ModalDeleteProps) {

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent
      >
        <Main style={{ marginTop: '55%' }}>
          <ModalHeader>
            <ModalTitle>
              Deseja realmente remover?
            </ModalTitle>
          </ModalHeader>
          <ModalFooter>
            <ButtonOption 
              color="#b32b2b" 
              title="não" 
              onPress={handleNoClick}
            />
            <ButtonOption 
              color="#2d9450" 
              title="sim" 
              onPress={() => handleYesClick(idElement)}
            />
          </ModalFooter>
        </Main>
      </Modal>
    </Container>
  );
}
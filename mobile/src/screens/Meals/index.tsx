import * as Style from './styles';

export function Meals() {
  return (
    <Style.Container>
      <Style.Header>
        <Style.Text>Selecione o tipo de refeição</Style.Text>
      </Style.Header>

      <Style.CardMealButton activeOpacity={.7}>
        <Style.CardMeal 
          resizeMode='cover' 
          source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg'}}
        >
          <Style.CardMealMain>
            <Style.Text>Café da Manhã</Style.Text>
          </Style.CardMealMain>
        </Style.CardMeal>
      </Style.CardMealButton>
      
      <Style.CardMealButton activeOpacity={.7}>
        <Style.CardMeal 
          resizeMode='cover' 
          source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg'}}
        >
          <Style.CardMealMain>
            <Style.Text>Café da Manhã</Style.Text>
          </Style.CardMealMain>
        </Style.CardMeal>
      </Style.CardMealButton>

      <Style.CardMealButton activeOpacity={.7}>
        <Style.CardMeal 
          resizeMode='cover' 
          source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/ff/2022/01/12/cafe-da-manha-1642012355257_v2_450x450.jpg'}}
        >
          <Style.CardMealMain>
            <Style.Text>Café da Manhã</Style.Text>
          </Style.CardMealMain>
        </Style.CardMeal>
      </Style.CardMealButton>

    </Style.Container>
  );
}

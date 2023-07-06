import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import * as Style from './styles';

import { formatDate } from './utils/format-date';
import { Panel } from '../../components/Panel';
import { BoxConsumption } from '../../components/BoxConsumption';
import { ModalDelete } from '../../components/ModalDelete';
import { WaterCard } from './components/WaterCard';
import { ModalAmount } from '../../components/ModalAmount';
import { api } from '../../services/api';
import { getAccessToken } from '../../utils/access-token';
import { WaterConsumption } from '../../@types/waterConsumption';

const amountMacrosExample = [
  { 
    amount: 900,
    macroName: 'carbs',
    color: '#00fff0'
  },
  { 
    amount: 250,
    macroName: 'protein',
    color: '#ff5656'
  },
  { 
    amount: 335,
    macroName: 'gord',
    color: '#ffb673'
  },
];
const caloriesExample = {
  amount: 205,
  goal: 3000
}
const waterExample = {
  amount: 900,
  goal: 2500
}

export function Home() {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [openModalAmountWater, setOpenModalAmountWater] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [idWaterRemove, setIdWaterRemove] = useState<string|null>(null);
  const [waterConsumption, setWaterConsumption] = useState<WaterConsumption[]>([]);

  const nextDay = () => setDate(state => new Date(state.setDate(state.getDate() + 1)));
  const prevDay = () => setDate(state => new Date(state.setDate(state.getDate() - 1)));

  async function addConsumptionWater(amount: number) {
    setOpenModalAmountWater(false);
    const data = { liters: amount/1000 };
    const accessToken = await getAccessToken();

    const { data: waterResponse } = await api.post<WaterConsumption>('/water/add', data, { 
      headers: {'x-access-token': accessToken}
    });

    setWaterConsumption([waterResponse , ...waterConsumption]);
  }
  
  async function removeConsumptionWater(idWater: string) {
    const accessToken = await getAccessToken();

    await api.delete(`/water/remove/${idWater}`, { 
      headers: {'x-access-token': accessToken}
    });

    setWaterConsumption(prev => prev.filter(w => w._id != idWater));
  }

  function handleRemoveWater(idWater: string) {
    setIdWaterRemove(idWater);
    setOpenModalDelete(true);
  }

  function redirectAddMeal() {
    navigation.navigate('Meals' as never);
  }

  useEffect(() => {
    !async function() {
      const data = { date: date.toISOString().substring(0, 10) };
      const accessToken = await getAccessToken();

      const { data: response } = await api
      .post<WaterConsumption[]>('/water/search', data, 
        { headers: {'x-access-token': accessToken} }
      );

      setWaterConsumption(response);
    }();
  }, [date]);

  return (
    <>
      <Style.Container>
        <Style.ButtonMenu 
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          activeOpacity={0.7}
        >
          <Style.Text>
            <Ionicons
              name="menu"
              size={36}
              color="#113560"
            />
          </Style.Text>
        </Style.ButtonMenu>

        <Style.DateContainer>
          <Style.Button onPress={prevDay} activeOpacity={0.7}>
            <Style.Text>
              <Ionicons
                name="arrow-back"
                size={28}
                color="#257BE2"
              />
            </Style.Text>
          </Style.Button>
          <Style.Text>{ formatDate(date) }</Style.Text>
          <Style.Button
            onPress={nextDay}
            activeOpacity={0.7}
            disabled={date.toDateString() == new Date().toDateString()}
          >
            <Style.Text>
              <Ionicons
                name="arrow-forward"
                size={28}
                color="#257BE2"
              />
            </Style.Text>
          </Style.Button>
        </Style.DateContainer>

        <Panel 
          macros={amountMacrosExample}
          calories={caloriesExample}
          water={waterExample}
          showOptions
        />

        <BoxConsumption 
          title="Refeições" 
          iconName="fast-food"
          addCConsumption={
            formatDate(date) == 'Hoje' 
            ? () => redirectAddMeal() 
            : undefined
          }
        >
          <></>
        </BoxConsumption>
        
        <BoxConsumption 
          title="Consumo de água" 
          iconName="water"
          addCConsumption={
            formatDate(date) == 'Hoje' 
            ? () => setOpenModalAmountWater(true) 
            : undefined
          }
        >
          {waterConsumption.length == 0 
            ? <Text style={{ textAlign: 'center' }}>Sem consumo de água</Text>
            : waterConsumption.map((consump, index) => {
              const dateWater = new Date(consump.dateWater);
              return <WaterCard 
                key={index}
                id={consump._id}
                amountWater={consump.liters*1000}
                time={`${dateWater.getHours()}:${dateWater.getMinutes()}`}
                remove={formatDate(date) == 'Hoje' ? handleRemoveWater : undefined}
              />
            })
          }
        </BoxConsumption>
      </Style.Container>

      {openModalAmountWater &&  
        <ModalAmount 
          saveData={addConsumptionWater}
          closeModal={() => setOpenModalAmountWater(false)}
        />
      }
      {openModalDelete && 
        <ModalDelete
          handleNoClick={() => setOpenModalDelete(false)}
          handleYesClick={idElement => {
            setOpenModalDelete(false); 
            idElement && removeConsumptionWater(idElement);
          }}
          idElement={idWaterRemove}
        />
      }
    </>
  );
}
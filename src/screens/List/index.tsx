import React, { useContext } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import AppContext from '../../contexts/appContext';

import { Wrapper } from './styles';

const List: React.FC = () => {
  const { listItems } = useContext(AppContext);
  const { navigate } = useNavigation();

  function handleNavigateToCart() {
    navigate('Cart');
  }

  return (
    <Wrapper>
      <Header cart onPress={handleNavigateToCart}>
        Joguinhos
      </Header>

      {listItems.map(item => (
        <Text key={String(item.id)}>{item.id}</Text>
      ))}
    </Wrapper>
  );
};

export default List;

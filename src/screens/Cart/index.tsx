import React from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import { Container } from './styles';

const Cart: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <Container>
      <Header back onPress={handleNavigateBack}>
        Joguinhos
      </Header>
      <Text>Cart</Text>
    </Container>
  );
};

export default Cart;

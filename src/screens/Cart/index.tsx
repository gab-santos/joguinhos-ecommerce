import React, { useContext } from 'react';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import AppContext from '../../contexts/appContext';

import { Container, CartList } from './styles';

const Cart: React.FC = () => {
  const { cartList } = useContext(AppContext);
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <Container>
      <Header back onPress={handleNavigateBack}>
        Joguinhos
      </Header>
      <CartList
        data={cartList}
        keyExtractor={item => String(item.product.id)}
        renderItem={({ item }) => <Text>{item.product.name}</Text>}
      />
    </Container>
  );
};

export default Cart;

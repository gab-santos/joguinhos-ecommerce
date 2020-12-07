import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import CartItem from '../../components/CartItem';
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
        renderItem={({ item }) => <CartItem {...{ item }} />}
      />
    </Container>
  );
};

export default Cart;

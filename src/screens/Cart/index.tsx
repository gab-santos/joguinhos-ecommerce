import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import AppContext from '../../contexts/appContext';

import {
  Container,
  EmptyList,
  CartList,
  Foother,
  Subtotal,
  Shipping,
  Total,
  Bottom,
} from './styles';

const Cart: React.FC = () => {
  const { cartList, totalPrices } = useContext(AppContext);
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }
  return (
    <Container>
      <Header back onPress={handleNavigateBack}>
        Joguinhos
      </Header>

      {cartList.length <= 0 && (
        <EmptyList>Não há item no carrinho :)</EmptyList>
      )}

      <CartList
        data={cartList}
        keyExtractor={item => String(item.product.id)}
        renderItem={({ item }) => <CartItem {...{ item }} />}
      />

      {cartList.length > 0 && (
        <Foother>
          <Subtotal.container>
            <Subtotal.label>Subtotal: </Subtotal.label>
            <Subtotal.info>R$ {totalPrices.subtotal.toFixed(2)}</Subtotal.info>
          </Subtotal.container>

          <Shipping.container>
            <Shipping.label>Frete: </Shipping.label>
            <Shipping.info>R$ {totalPrices.freight.toFixed(2)}</Shipping.info>
          </Shipping.container>

          <Total.container>
            <Total.label>Total: </Total.label>
            <Total.info>R$ {totalPrices.total.toFixed(2)}</Total.info>
          </Total.container>

          <Bottom.container>
            <Bottom.text>Finalizar compra</Bottom.text>
          </Bottom.container>
        </Foother>
      )}
    </Container>
  );
};

export default Cart;

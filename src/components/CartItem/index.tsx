import React, { useContext } from 'react';

import Images from '../../assets';
import AppContext, { CartItem as ICartItem } from '../../contexts/appContext';

import {
  Container,
  Header,
  Image,
  Infos,
  Footer,
  ChangeQuatity,
  Button,
  Quantity,
  TotalPrice,
  Remove,
} from './styles';

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const img = item.product.image.split('.')[0].replace(/-/g, '');
  const { changeQuantity } = useContext(AppContext);

  function handleIncreaseItem() {
    changeQuantity.increaseQuantity(item.product.id);
  }

  return (
    <Container>
      <Header>
        <Image source={Images[img]} />

        <Infos.container>
          <Infos.name>{item.product.name}</Infos.name>
          <Infos.price>R$ {item.product.price}</Infos.price>
        </Infos.container>
      </Header>

      <Footer>
        <ChangeQuatity>
          <Button.container onPress={() => {}}>
            <Button.icon name="minus" />
          </Button.container>

          <Quantity>{item.quantity}</Quantity>

          <Button.container onPress={handleIncreaseItem}>
            <Button.icon name="plus" />
          </Button.container>
        </ChangeQuatity>
        <TotalPrice>R$ {item.total.toFixed(2)}</TotalPrice>
      </Footer>

      <Remove.container onPress={() => {}}>
        <Remove.icon />
      </Remove.container>
    </Container>
  );
};

export default CartItem;

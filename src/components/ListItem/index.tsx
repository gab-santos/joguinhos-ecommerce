import React, { useContext } from 'react';

import Images from '../../assets';
import AppContext, { Product } from '../../contexts/appContext';

import { Container, Header, Image, Infos, Name, Score, Footer } from './styles';

interface ListItemProps {
  item: Product;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { addToCart } = useContext(AppContext);
  const img = item.image.split('.')[0].replace(/-/g, '');

  function handleAddToCart() {
    addToCart(item);
  }

  return (
    <>
      <Container>
        <Header>
          <Image source={Images[img]} />

          <Infos.container>
            <Infos.header>
              <Name>{item.name}</Name>
              <Score>score: {item.score}</Score>
            </Infos.header>

            <Infos.price>R$ {item.price.toFixed(2)}</Infos.price>
          </Infos.container>
        </Header>
      </Container>
      <Footer.container onPress={handleAddToCart}>
        <Footer.icon name="shopping-cart" />
      </Footer.container>
    </>
  );
};

export default ListItem;

import React from 'react';

import Images from '../../assets';
import { Product } from '../../contexts/appContext';

import { Container, Header, Image, Infos, Name, Score, Footer } from './styles';

interface ListItemProps {
  item: Product;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const img = item.image.split('.')[0].replace(/-/g, '');

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

            <Infos.price>R$ {item.price}</Infos.price>
          </Infos.container>
        </Header>
      </Container>
      <Footer.container>
        <Footer.icon name="shopping-cart" />
      </Footer.container>
    </>
  );
};

export default ListItem;

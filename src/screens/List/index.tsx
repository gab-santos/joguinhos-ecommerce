import React, { useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AppContext from '../../contexts/appContext';

import { Wrapper, ProductsList } from './styles';

const List: React.FC = () => {
  const { productList } = useContext(AppContext);
  const { navigate } = useNavigation();

  function handleNavigateToCart() {
    navigate('Cart');
  }

  return (
    <Wrapper>
      <Header cart onPress={handleNavigateToCart}>
        Joguinhos
      </Header>

      <ProductsList
        data={productList}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ListItem key={String(item.id)} {...{ item }} />
        )}
      />
    </Wrapper>
  );
};

export default List;

import React, { useContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import AppContext from '../../contexts/appContext';

import {
  Wrapper,
  ProductsList,
  PickerBlock,
  PickerContainer,
  Picker,
} from './styles';

const List: React.FC = () => {
  const { productList, filterProductList } = useContext(AppContext);
  const { navigate } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('score');

  function handleNavigateToCart() {
    navigate('Cart');
  }

  function handleFilterList(value: string) {
    setSelectedFilter(value);
    filterProductList(value);
  }

  return (
    <Wrapper>
      <Header cart onPress={handleNavigateToCart}>
        Joguinhos
      </Header>

      <PickerBlock.container>
        <PickerBlock.label>Filtrar por</PickerBlock.label>
        <PickerContainer>
          <Picker
            selectedValue={selectedFilter}
            onValueChange={itemValue => handleFilterList(itemValue)}
          >
            <Picker.Item label="Score" value="score" />
            <Picker.Item label="Nome" value="name" />
            <Picker.Item label="Preço maior-menor" value="price" />
          </Picker>
        </PickerContainer>
      </PickerBlock.container>

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

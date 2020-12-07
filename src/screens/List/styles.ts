import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { Product } from '../../contexts/appContext';

export const Wrapper = styled.View`
  flex: 1;
`;

export const ProductsList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

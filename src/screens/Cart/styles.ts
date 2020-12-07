import { FlatList } from 'react-native';

import styled from 'styled-components/native';

import { CartItem } from '../../contexts/appContext';

export const Container = styled.View`
  flex: 1;
`;

export const CartList = styled(FlatList as new () => FlatList<CartItem>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

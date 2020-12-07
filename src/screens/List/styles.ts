import { FlatList } from 'react-native';

import { Picker as picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

import { Product } from '../../contexts/appContext';

import { colors, fonts, metrics } from '../../styles';

export const Wrapper = styled.View`
  flex: 1;
`;

export const PickerBlock = {
  container: styled.View`
    margin: ${metrics.padding.regular};
  `,

  label: styled.Text`
    ${fonts.regular}
    color: ${colors.black}
  `,
};

export const PickerContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 8px;
`;

export const Picker = styled(picker)``;

export const ProductsList = styled(
  FlatList as new () => FlatList<Product>,
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

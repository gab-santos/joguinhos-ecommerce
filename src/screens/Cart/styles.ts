import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import { CartItem } from '../../contexts/appContext';

import { metrics, colors, fonts } from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const CartList = styled(FlatList as new () => FlatList<CartItem>).attrs({
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})``;

export const EmptyList = styled.Text`
  ${fonts.big};
  color: ${colors.secondary};
  text-align: center;
`;

export const Foother = styled.View`
  border-top-width: 1px;
  border-color: ${colors.white};
`;

const container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const Subtotal = {
  container: styled(container)`
    margin-top: ${metrics.padding.small};
  `,

  label: styled.Text`
    ${fonts.big}
    color: ${colors.black};
  `,

  info: styled.Text`
    ${fonts.bigger}
    color: ${colors.black};
  `,
};

export const Shipping = {
  container: styled(container)``,

  label: styled.Text`
    ${fonts.regular}
    color: ${colors.black};
  `,

  info: styled.Text`
    ${fonts.big}
    color: ${colors.black};
  `,
};

export const Total = {
  container: styled(container)`
    margin-bottom: ${metrics.padding.small};
  `,

  label: styled.Text`
    ${fonts.bigger}
    color: ${colors.primary};
  `,

  info: styled.Text`
    ${fonts.biggest}
    color: ${colors.primary};
  `,
};

export const Bottom = {
  container: styled(RectButton)`
    height: ${metrics.height.big};
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
  `,

  text: styled.Text`
    ${fonts.bigger}
    color: ${colors.white};
    text-transform: uppercase;
  `,
};

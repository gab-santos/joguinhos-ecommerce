import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.white};
  padding: ${metrics.padding.regular};

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  position: relative;
  margin-bottom: ${metrics.padding.regular};
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 77px;
  height: 86px;
`;

export const Infos = {
  container: styled.View`
    flex: 1;
    margin-right: 20px;
  `,

  name: styled.Text`
    ${fonts.big};
    color: ${colors.primary};
  `,

  price: styled.Text`
    ${fonts.regular};
    color: ${colors.gray};
  `,
};

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeQuatity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = {
  container: styled.TouchableOpacity`
    height: 24px;
    width: 24px;

    border: 1px solid ${colors.gray};
    border-radius: 12px;

    align-items: center;
    justify-content: center;
  `,

  icon: styled(Feather).attrs({
    size: 20,
    color: colors.black,
  })``,
};

export const Quantity = styled.Text`
  ${fonts.bigger};
  color: ${colors.black};
  margin: 0 ${metrics.padding.small};
`;

export const TotalPrice = styled.Text`
  ${fonts.biggest};
  color: ${colors.secondary};
`;

export const Remove = {
  container: styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;

    padding: 5px;
    border-color: ${colors.light};
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-bottom-left-radius: 8px;
  `,

  icon: styled(Feather).attrs({
    name: 'trash-2',
    size: 20,
    color: colors.gray,
  })``,
};

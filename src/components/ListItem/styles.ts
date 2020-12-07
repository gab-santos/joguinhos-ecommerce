import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { colors, fonts, metrics } from '../../styles';

export const Container = styled.View`
  background-color: ${colors.white};
  padding: ${metrics.padding.regular};

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 114px;
`;

export const Infos = {
  container: styled.View`
    flex: 1;
    margin-left: ${metrics.padding.small};
    justify-content: space-between;
  `,

  header: styled.View``,

  price: styled.Text`
    ${fonts.biggest};
    color: ${colors.secondary};
  `,
};

export const Name = styled.Text`
  ${fonts.bigger};
  color: ${colors.primary};
`;
export const Score = styled.Text`
  ${fonts.regular};
  color: ${colors.gray};
  text-transform: lowercase;
`;

export const Footer = {
  container: styled.TouchableOpacity`
    height: ${metrics.height.regular};
    margin-bottom: ${metrics.padding.regular};
    background-color: ${colors.primary};

    align-items: center;
    justify-content: center;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  `,

  icon: styled(Feather).attrs({
    size: 20,
    color: colors.white,
  })``,
};

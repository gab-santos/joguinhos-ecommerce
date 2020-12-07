import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';

import { fonts, colors, metrics } from '../../styles';

export const Container = styled.View`
  margin-top: ${metrics.statusBarHeight};
  padding: 0 ${metrics.padding.regular};

  height: ${metrics.height.big};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${fonts.biggest};
  color: ${colors.primary};
  text-transform: uppercase;
`;

export const Side = {
  container: styled.View`
    width: 30px;

    position: relative;
  `,

  button: styled(BorderlessButton)`
    align-items: center;
    justify-content: center;
  `,

  icon: styled(Feather).attrs({
    size: 30,
    color: colors.primary,
  })``,

  counter: styled.View`
    position: absolute;
    top: 0;
    right: 0;

    width: 10px;
    height: 10px;
    border-radius: 5px;

    background-color: ${colors.secondary};
  `,
};

import React, { useContext } from 'react';
import { Text } from 'react-native';

import AppContext from '../../contexts/appContext';

import { Wrapper } from './styles';

const List: React.FC = () => {
  const { listItems } = useContext(AppContext);

  return (
    <Wrapper>
      {listItems.map(item => (
        <Text key={String(item.id)}>{item.id}</Text>
      ))}
    </Wrapper>
  );
};

export default List;

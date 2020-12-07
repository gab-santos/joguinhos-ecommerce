import React, { useContext } from 'react';

import AppContext from '../../contexts/appContext';

import { Container, Title, Side } from './styles';

interface HeaderProps {
  back?: boolean;
  cart?: boolean;
  onPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ back, cart, onPress, children }) => {
  const { cartList } = useContext(AppContext);
  return (
    <Container>
      <Side.container>
        {back && (
          <Side.button {...{ onPress }}>
            <Side.icon name="chevron-left" />
          </Side.button>
        )}
      </Side.container>

      <Title>{children}</Title>

      <Side.container>
        {cart && (
          <>
            <Side.button {...{ onPress }}>
              <Side.icon name="shopping-cart" />
            </Side.button>
            {cartList.length > 0 && <Side.counter />}
          </>
        )}
      </Side.container>
    </Container>
  );
};

export default Header;

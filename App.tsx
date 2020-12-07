import React, { useState } from 'react';

import { Karla_400Regular } from '@expo-google-fonts/karla';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

import AppContext, { CartItem, Product } from './src/contexts/appContext';
import Routes from './src/routes';
import data from './src/services/data.json';

const App: React.FC = () => {
  const [loadFonts] = useFonts({
    Karla_400Regular,
    Montserrat_400Regular,
  });
  const [productList] = useState<Product[]>(data);
  const [cartList, setListCart] = useState<CartItem[]>([]);

  function addToCart(item: Product) {
    if (!cartList.find(product => product.product.id === item.id)) {
      setListCart(prev => [
        ...prev,
        { product: item, quantity: 1, total: item.price },
      ]);
    }
  }

  function increaseQuantity(cartItem: CartItem) {
    setListCart(prev =>
      prev.map(prevItem =>
        prevItem.product.id === cartItem.product.id
          ? {
              ...prevItem,
              quantity: prevItem.quantity + 1,
              total: prevItem.total + cartItem.product.price,
            }
          : prevItem,
      ),
    );
  }

  function decreaseQuantity(cartItem: CartItem) {
    setListCart(prev =>
      prev.map(prevItem =>
        prevItem.product.id === cartItem.product.id && prevItem.quantity > 1
          ? {
              ...prevItem,
              quantity: prevItem.quantity - 1,
              total: prevItem.total - cartItem.product.price,
            }
          : prevItem,
      ),
    );
  }

  const changeQuantity = {
    increaseQuantity: (item: CartItem) => increaseQuantity(item),
    decreaseQuantity: (item: CartItem) => decreaseQuantity(item),
  };

  if (!loadFonts) return <AppLoading />;

  return (
    <AppContext.Provider
      value={{ productList, cartList, addToCart, changeQuantity }}
    >
      <Routes />
    </AppContext.Provider>
  );
};

export default App;

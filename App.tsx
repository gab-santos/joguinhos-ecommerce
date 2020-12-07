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

  function increaseQuantity(id: number) {
    setListCart(prev =>
      prev.map(item =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.total + item.product.price,
            }
          : item,
      ),
    );
  }

  const changeQuantity = {
    increaseQuantity: (id: number) => increaseQuantity(id),
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

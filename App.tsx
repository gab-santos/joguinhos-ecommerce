import React, { useEffect, useState } from 'react';

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
  const [productList, setProductList] = useState<Product[]>(data);
  const [cartList, setListCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState({
    subtotal: 0,
    freight: 0,
    total: 0,
  });

  useEffect(() => {
    filterProductList('score');
  }, []);

  function increaseTotalPrices(item: Product) {
    setTotal(prev => {
      const calcFreight = prev.freight + 10;
      const calcSubTotal = prev.subtotal + item.price;
      const calcTotal = calcFreight + calcSubTotal;

      return {
        subtotal: calcSubTotal,
        freight: calcFreight,
        total: calcTotal,
      };
    });
  }

  function decreaseTotalPrices(item: Product) {
    setTotal(prev => {
      const calcFreight = prev.freight - 10;
      const calcSubTotal = prev.subtotal - item.price;
      const calcTotal = calcFreight + calcSubTotal;

      return {
        subtotal: calcSubTotal,
        freight: calcFreight,
        total: calcTotal,
      };
    });
  }

  const changeTotalPrices = {
    increase: (item: Product) => increaseTotalPrices(item),
    decrease: (item: Product) => decreaseTotalPrices(item),
  };

  function addToCart(item: Product) {
    if (!cartList.find(product => product.product.id === item.id)) {
      setListCart(prev => [
        ...prev,
        { product: item, quantity: 1, total: item.price },
      ]);
      changeTotalPrices.increase(item);
    }
  }

  function increaseQuantity(cartItem: CartItem) {
    const newItem = {
      ...cartItem,
      quantity: cartItem.quantity + 1,
      total: cartItem.total + cartItem.product.price,
    };

    setListCart(prev =>
      prev.map(prevItem =>
        prevItem.product.id === cartItem.product.id ? newItem : prevItem,
      ),
    );
    changeTotalPrices.increase(newItem.product);
  }

  function decreaseQuantity(cartItem: CartItem) {
    const newItem = {
      ...cartItem,
      quantity: cartItem.quantity - 1,
      total: cartItem.total - cartItem.product.price,
    };

    setListCart(prev =>
      prev.map(prevItem => {
        return prevItem.product.id === cartItem.product.id &&
          prevItem.quantity > 1
          ? newItem
          : prevItem;
      }),
    );

    if (cartItem.quantity > 1) changeTotalPrices.decrease(newItem.product);
  }

  const changeQuantity = {
    increaseQuantity: (item: CartItem) => increaseQuantity(item),
    decreaseQuantity: (item: CartItem) => decreaseQuantity(item),
  };

  function removeFromCart(cartItem: CartItem) {
    setListCart(prev =>
      prev.filter(prevItem => prevItem.product.id !== cartItem.product.id),
    );

    setTotal(prev => {
      const calcFreight = prev.freight - cartItem.quantity * 10;
      const calcSubTotal =
        prev.subtotal - cartItem.product.price * cartItem.quantity;
      const calcTotal = calcFreight + calcSubTotal;

      return {
        subtotal: calcSubTotal,
        freight: calcFreight,
        total: calcTotal,
      };
    });
  }

  function filterProductList(filter: string) {
    interface IParams {
      [key: string]: any;
    }

    setProductList(prev =>
      prev.sort((a: IParams, b: IParams) => {
        if (a[filter] < b[filter]) return -1;
        if (a[filter] > b[filter]) return 1;
        return 0;
      }),
    );
  }

  if (!loadFonts) return <AppLoading />;

  return (
    <AppContext.Provider
      value={{
        productList,
        cartList,
        totalPrices: total,
        addToCart,
        removeFromCart,
        filterProductList,
        changeQuantity,
        changeTotalPrices,
      }}
    >
      <Routes />
    </AppContext.Provider>
  );
};

export default App;

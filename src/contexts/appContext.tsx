import { createContext } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  total: number;
}

export interface IAppContext {
  productList: Product[];
  cartList: CartItem[];
  addToCart: (item: Product) => void;
  changeQuantity: {
    increaseQuantity: (cartItem: CartItem) => void;
    decreaseQuantity: (cartItem: CartItem) => void;
  };
}

const AppContext = createContext({} as IAppContext);

export default AppContext;

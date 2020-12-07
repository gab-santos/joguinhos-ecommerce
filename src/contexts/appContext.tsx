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
  totalPrices: {
    freight: number;
    subtotal: number;
    total: number;
  };

  addToCart: (item: Product) => void;
  removeFromCart: (item: CartItem) => void;
  changeQuantity: {
    increaseQuantity: (cartItem: CartItem) => void;
    decreaseQuantity: (cartItem: CartItem) => void;
  };
  changeTotalPrices: {
    increase: (item: Product) => void;
    decrease: (item: Product) => void;
  };
}

const AppContext = createContext({} as IAppContext);

export default AppContext;

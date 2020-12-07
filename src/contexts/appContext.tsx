import { createContext } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export interface IAppContext {
  productList: Product[];
}

const AppContext = createContext({} as IAppContext);

export default AppContext;

import { createContext } from 'react';

export interface ListItems {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

export interface IAppContext {
  listItems: ListItems[];
}

const AppContext = createContext({} as IAppContext);

export default AppContext;

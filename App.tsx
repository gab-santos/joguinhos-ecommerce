import React, { useEffect, useState } from 'react';

import { Karla_400Regular } from '@expo-google-fonts/karla';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

import AppContext, { Product } from './src/contexts/appContext';
import Routes from './src/routes';
import data from './src/services/data.json';

const App: React.FC = () => {
  const [loadFonts] = useFonts({
    Karla_400Regular,
    Montserrat_400Regular,
  });
  const [productList] = useState<Product[]>(data);

  if (!loadFonts) return <AppLoading />;

  return (
    <AppContext.Provider value={{ productList }}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;

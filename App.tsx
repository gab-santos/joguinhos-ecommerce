import React, { useEffect, useState } from 'react';

import { Karla_400Regular } from '@expo-google-fonts/karla';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

import AppContext, { ListItems } from './src/contexts/appContext';
import Routes from './src/routes';
import data from './src/services/data.json';

const App: React.FC = () => {
  const [loadFonts] = useFonts({
    Karla_400Regular,
    Montserrat_400Regular,
  });
  const [listItems] = useState<ListItems[]>(data);

  if (!loadFonts) return <AppLoading />;

  return (
    <AppContext.Provider value={{ listItems }}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;

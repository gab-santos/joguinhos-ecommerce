import React, { useState } from 'react';

import AppContext, { ListItems } from './src/contexts/appContext';
import Routes from './src/routes';
import data from './src/services/data.json';

const App: React.FC = () => {
  const [listItems, setListItems] = useState<ListItems[]>(data);

  return (
    <AppContext.Provider value={{ listItems }}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;

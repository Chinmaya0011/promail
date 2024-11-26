import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { AppContextProvider } from './context/AppContext';
const App = () => {
  return (
    <div>
      <AppContextProvider> 
      <AppRoutes />
      </AppContextProvider>
    </div>
  );
};

export default App;

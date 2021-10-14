import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigation } from '@navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(function () {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    // <AppNavigation />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

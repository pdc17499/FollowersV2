import React from 'react';

import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import { Platform, NativeModules } from 'react-native';
import { AppNavigation } from '@navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import i18next from 'i18next';

const App = () => {
  useEffect(() => {
    setTimeout(function () {
      getLanguage();
      SplashScreen.hide();
    }, 2000);
  }, []);

  const getLanguage = () => {
    const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    if (deviceLanguage.includes('ja')) {
      i18next.changeLanguage('jp');
    } else {
      i18next.changeLanguage('en');
    }
    console.log('deviceLanguage', deviceLanguage);
  };

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

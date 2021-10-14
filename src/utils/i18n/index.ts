import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';


i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    
  },
  react: {
    useSuspense: false,
  },
});

const trans = (string: string, params?: any): any => {
  return i18next.t(string, params);
};

export default {...i18next, trans};

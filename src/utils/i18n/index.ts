import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './langs/en';
import { jp } from './langs/jp';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en,
    jp,
  },
  react: {
    useSuspense: false,
  },
});

const trans = (string: string, params?: any): any => {
  return i18next.t(string, params);
};

export default { ...i18next, trans };

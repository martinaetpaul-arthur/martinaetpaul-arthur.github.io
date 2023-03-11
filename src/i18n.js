import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './i18n/en.json';
import it from './i18n/it.json';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        detection: {
            caches: ['localStorage', 'cookie']
        },
        lng: 'it',
        debug: true,
        resources: {
            en: {
                translation: en
            },
            it: {
                translation: it
            }
        }
    });


export default i18n;
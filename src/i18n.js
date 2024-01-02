import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './i18n/fr.json';
import it from './i18n/it.json';

// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .use(LanguageDetector)
    .init({
        detection: {
            caches: ['localStorage', 'cookie']
        },
        fallbackLng: 'fr',
        debug: true,
        resources: {
            fr: {
                translation: fr
            },
            it: {
                translation: it
            }
        }
    });


export default i18n;
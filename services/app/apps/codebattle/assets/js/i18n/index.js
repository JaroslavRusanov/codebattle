/* eslint-disable global-require */
import Gon from 'gon';
import i18next from 'i18next';

const lng = Gon.getAsset('locale') || 'en';

export const getLocale = () => lng;

i18next.init({
  nsSeparator: false,
  keySeparator: false,
  lng,
  interpolation: {
    prefix: '%{',
    suffix: '}',
  },
  resources: {
    en: {
      translation: require('../../../priv/gettext/en/LC_MESSAGES/default.po'),
    },
    ru: {
      translation: require('../../../priv/gettext/ru/LC_MESSAGES/default.po'),
    },
  },
});

export default i18next;

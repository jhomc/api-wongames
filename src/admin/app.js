import AuthLogo from './extensions/white-logo.svg'
import MenuLogo from './extensions/icon.svg';
import favicon from './extensions/icon.svg';

export default {
  config: {
    auth: {
      logo: AuthLogo
    },
    head: {
      favicon: favicon
    },
    menu: {
      logo: MenuLogo
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Wongames Menu",
      }
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};

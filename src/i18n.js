import intl from 'react-intl-universal';

export const DEFAULT_LOCALE = 'zh_CN';
export const LOCALES = {
  en_US: 'English',
  zh_CN: '中文'
};

// locale data
const locales = {
  en_US: require('./locales/en_US'),
  zh_CN: require('./locales/zh_CN')
};

const antdLocales = {
  en_US: require('antd/lib/locale-provider/en_US'),
  zh_CN: require('antd/lib/locale-provider/zh_CN')
};

export const getLocalSettings = (defalutLocale = DEFAULT_LOCALE) => {
  // 从 localStorage 获取语言
  if (window.localStorage && window.localStorage.getItem('locale')) {
    return window.localStorage.getItem('locale');
  }
  // 未设置过返回参数默认值
  return defalutLocale;
};

export const getAntLocale = (defalutLocale = DEFAULT_LOCALE) => antdLocales[defalutLocale];

export default function load(locale = DEFAULT_LOCALE) {
  return intl.init({
    currentLocale: locale,
    locales
  });
}

export const getFormattedMsg = (key, variables = {}) => intl.get(key, variables).d(key);

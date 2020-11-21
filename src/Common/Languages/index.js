'use strict';

require('intl');
require('intl/locale-data/jsonp/vi');
const addLocaleData = require('react-intl').addLocaleData;
const viLocaleData = require('react-intl/locale-data/vi');
const DEFAULT_LOCALE = 'en';
const viTranslationMessages = require('./vi.json');
const enTranslationMessages = require('./en.json');

const appLocales = ['vi', 'en'];

addLocaleData(viLocaleData);

const formatTranslationMessages = (locale, messages) => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, viTranslationMessages)
            : {};
    return Object.keys(messages).reduce((formattedMessages, key) => {
        let message = messages[key];
        if (!message && locale !== DEFAULT_LOCALE) {
            message = defaultFormattedMessages[key];
        }
        return Object.assign(formattedMessages, {[key]: message});
    }, {});
};

const translationMessages = {
    vi: formatTranslationMessages('vi', viTranslationMessages),
    en: formatTranslationMessages('en', enTranslationMessages),
};

exports.translationMessages = translationMessages;
exports.formatTranslationMessages = formatTranslationMessages;
exports.appLocales = appLocales;

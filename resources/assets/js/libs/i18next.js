window.i18next = require('i18next');
i18next.init({
    lng: Admin.Settings.locale,
    resources: {
        [Admin.Settings.locale]: {
            translation: {
                lang: Admin.Settings.lang
            }
        }
    }
});
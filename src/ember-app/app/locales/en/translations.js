import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAvtomatizaciya_zakupki2ЕдиницыИзмерLForm from './forms/i-i-s-avtomatizaciya-zakupki2-единицы-измер-l';
import IISAvtomatizaciya_zakupki2ЗаказПостLForm from './forms/i-i-s-avtomatizaciya-zakupki2-заказ-пост-l';
import IISAvtomatizaciya_zakupki2КонтрагентыLForm from './forms/i-i-s-avtomatizaciya-zakupki2-контрагенты-l';
import IISAvtomatizaciya_zakupki2НоменклатураLForm from './forms/i-i-s-avtomatizaciya-zakupki2-номенклатура-l';
import IISAvtomatizaciya_zakupki2ОрганизацииLForm from './forms/i-i-s-avtomatizaciya-zakupki2-организации-l';
import IISAvtomatizaciya_zakupki2ОтчетОЗакупкахLForm from './forms/i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках-l';
import IISAvtomatizaciya_zakupki2ПланЗакупокLForm from './forms/i-i-s-avtomatizaciya-zakupki2-план-закупок-l';
import IISAvtomatizaciya_zakupki2СкладыLForm from './forms/i-i-s-avtomatizaciya-zakupki2-склады-l';
import IISAvtomatizaciya_zakupki2ЕдиницыИзмерEForm from './forms/i-i-s-avtomatizaciya-zakupki2-единицы-измер-e';
import IISAvtomatizaciya_zakupki2ЗаказПостEForm from './forms/i-i-s-avtomatizaciya-zakupki2-заказ-пост-e';
import IISAvtomatizaciya_zakupki2КонтрагентыEForm from './forms/i-i-s-avtomatizaciya-zakupki2-контрагенты-e';
import IISAvtomatizaciya_zakupki2НоменклатураEForm from './forms/i-i-s-avtomatizaciya-zakupki2-номенклатура-e';
import IISAvtomatizaciya_zakupki2ОрганизацииEForm from './forms/i-i-s-avtomatizaciya-zakupki2-организации-e';
import IISAvtomatizaciya_zakupki2ОтчетОЗакупкахEForm from './forms/i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках-e';
import IISAvtomatizaciya_zakupki2ПланЗакупокEForm from './forms/i-i-s-avtomatizaciya-zakupki2-план-закупок-e';
import IISAvtomatizaciya_zakupki2СкладыEForm from './forms/i-i-s-avtomatizaciya-zakupki2-склады-e';
import IISAvtomatizaciya_zakupki2ЕдиницыИзмерModel from './models/i-i-s-avtomatizaciya-zakupki2-единицы-измер';
import IISAvtomatizaciya_zakupki2ЗаказПостModel from './models/i-i-s-avtomatizaciya-zakupki2-заказ-пост';
import IISAvtomatizaciya_zakupki2КонтрагентыModel from './models/i-i-s-avtomatizaciya-zakupki2-контрагенты';
import IISAvtomatizaciya_zakupki2НоменклатураModel from './models/i-i-s-avtomatizaciya-zakupki2-номенклатура';
import IISAvtomatizaciya_zakupki2ОрганизацииModel from './models/i-i-s-avtomatizaciya-zakupki2-организации';
import IISAvtomatizaciya_zakupki2ОтчетОЗакупкахModel from './models/i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках';
import IISAvtomatizaciya_zakupki2ПланЗакупокModel from './models/i-i-s-avtomatizaciya-zakupki2-план-закупок';
import IISAvtomatizaciya_zakupki2ПланModel from './models/i-i-s-avtomatizaciya-zakupki2-план';
import IISAvtomatizaciya_zakupki2СкладыModel from './models/i-i-s-avtomatizaciya-zakupki2-склады';
import IISAvtomatizaciya_zakupki2ТЧЗаказModel from './models/i-i-s-avtomatizaciya-zakupki2-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-avtomatizaciya-zakupki2-единицы-измер': IISAvtomatizaciya_zakupki2ЕдиницыИзмерModel,
    'i-i-s-avtomatizaciya-zakupki2-заказ-пост': IISAvtomatizaciya_zakupki2ЗаказПостModel,
    'i-i-s-avtomatizaciya-zakupki2-контрагенты': IISAvtomatizaciya_zakupki2КонтрагентыModel,
    'i-i-s-avtomatizaciya-zakupki2-номенклатура': IISAvtomatizaciya_zakupki2НоменклатураModel,
    'i-i-s-avtomatizaciya-zakupki2-организации': IISAvtomatizaciya_zakupki2ОрганизацииModel,
    'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках': IISAvtomatizaciya_zakupki2ОтчетОЗакупкахModel,
    'i-i-s-avtomatizaciya-zakupki2-план-закупок': IISAvtomatizaciya_zakupki2ПланЗакупокModel,
    'i-i-s-avtomatizaciya-zakupki2-план': IISAvtomatizaciya_zakupki2ПланModel,
    'i-i-s-avtomatizaciya-zakupki2-склады': IISAvtomatizaciya_zakupki2СкладыModel,
    'i-i-s-avtomatizaciya-zakupki2-т-ч-заказ': IISAvtomatizaciya_zakupki2ТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupki',
          title: 'Avtomatizaciya_zakupki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-avtomatizaciya-zakupki2-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki2-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki2-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki2-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki2-единицы-измер-l': {
              caption: 'Единицы измер',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-avtomatizaciya-zakupki2-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            },
            'i-i-s-avtomatizaciya-zakupki2-заказ-пост-l': {
              caption: 'Заказ пост',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-avtomatizaciya-zakupki2-единицы-измер-l': IISAvtomatizaciya_zakupki2ЕдиницыИзмерLForm,
    'i-i-s-avtomatizaciya-zakupki2-заказ-пост-l': IISAvtomatizaciya_zakupki2ЗаказПостLForm,
    'i-i-s-avtomatizaciya-zakupki2-контрагенты-l': IISAvtomatizaciya_zakupki2КонтрагентыLForm,
    'i-i-s-avtomatizaciya-zakupki2-номенклатура-l': IISAvtomatizaciya_zakupki2НоменклатураLForm,
    'i-i-s-avtomatizaciya-zakupki2-организации-l': IISAvtomatizaciya_zakupki2ОрганизацииLForm,
    'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках-l': IISAvtomatizaciya_zakupki2ОтчетОЗакупкахLForm,
    'i-i-s-avtomatizaciya-zakupki2-план-закупок-l': IISAvtomatizaciya_zakupki2ПланЗакупокLForm,
    'i-i-s-avtomatizaciya-zakupki2-склады-l': IISAvtomatizaciya_zakupki2СкладыLForm,
    'i-i-s-avtomatizaciya-zakupki2-единицы-измер-e': IISAvtomatizaciya_zakupki2ЕдиницыИзмерEForm,
    'i-i-s-avtomatizaciya-zakupki2-заказ-пост-e': IISAvtomatizaciya_zakupki2ЗаказПостEForm,
    'i-i-s-avtomatizaciya-zakupki2-контрагенты-e': IISAvtomatizaciya_zakupki2КонтрагентыEForm,
    'i-i-s-avtomatizaciya-zakupki2-номенклатура-e': IISAvtomatizaciya_zakupki2НоменклатураEForm,
    'i-i-s-avtomatizaciya-zakupki2-организации-e': IISAvtomatizaciya_zakupki2ОрганизацииEForm,
    'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках-e': IISAvtomatizaciya_zakupki2ОтчетОЗакупкахEForm,
    'i-i-s-avtomatizaciya-zakupki2-план-закупок-e': IISAvtomatizaciya_zakupki2ПланЗакупокEForm,
    'i-i-s-avtomatizaciya-zakupki2-склады-e': IISAvtomatizaciya_zakupki2СкладыEForm
  },

});

export default translations;

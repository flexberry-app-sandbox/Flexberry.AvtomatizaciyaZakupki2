import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтчетОЗакупкахE', 'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });

  modelClass.defineProjection('ОтчетОЗакупкахL', 'i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках', {
    дата: attr('Дата', { index: 0 }),
    номер: attr('Номер', { index: 1 })
  });
};

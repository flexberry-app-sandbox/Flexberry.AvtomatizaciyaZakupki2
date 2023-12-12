import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-avtomatizaciya-zakupki2-план', 'Unit | Model | i-i-s-avtomatizaciya-zakupki2-план', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-avtomatizaciya-zakupki2-единицы-измер',
    'model:i-i-s-avtomatizaciya-zakupki2-заказ-пост',
    'model:i-i-s-avtomatizaciya-zakupki2-контрагенты',
    'model:i-i-s-avtomatizaciya-zakupki2-номенклатура',
    'model:i-i-s-avtomatizaciya-zakupki2-организации',
    'model:i-i-s-avtomatizaciya-zakupki2-отчет-о-закупках',
    'model:i-i-s-avtomatizaciya-zakupki2-план-закупок',
    'model:i-i-s-avtomatizaciya-zakupki2-план',
    'model:i-i-s-avtomatizaciya-zakupki2-склады',
    'model:i-i-s-avtomatizaciya-zakupki2-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});

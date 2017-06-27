'use strict';

const {defineSupportCode} = require('cucumber');
const poGlobalPosition = require('../page_objects/global_position');

defineSupportCode(function({Given, When, Then}) {

    Then('he should view his global position', function () {
        return poGlobalPosition.assert.visible.title();
    });

    Then('he should see an error message', function () {
        return this.gps.current.assert.visible.label.errorMessage();
    });

    Then('he sould see his accounts each with this information:', function (table, callback) {
        let fields = [[ 'account alias' ],
            [ 'account number' ],
            [ 'account balance with currency symbol' ]];

        if(table.rawTable.toString() !== fields.toString()) {
            throw "Error! Check fields beacause have changed after development"
        }

        return poGlobalPosition.assert.business.validate.product.accounts(db.user.products.accounts);
    });


});

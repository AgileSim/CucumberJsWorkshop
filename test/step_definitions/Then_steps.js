'use strict';

const {defineSupportCode} = require('cucumber');
const poGlobalPosition = require('../page_objects/global_position');

defineSupportCode(function({Given, When, Then}) {

    Then('he should view his global position', function () {
        return poGlobalPosition.assert.visible.title();
    });

    Then('he should see an error message', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('he sould see his accounts each with this information:', function (table, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });


});

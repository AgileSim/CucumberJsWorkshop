'use strict';

const {defineSupportCode} = require('cucumber');
const poWelcome = require("../page_objects/welcome");

defineSupportCode(function ({When}) {


    When('busco el término {stringInDoubleQuotes}', function (stringInDoubleQuotes) {

        return poWelcome.perform.business.search(stringInDoubleQuotes);

    });


});


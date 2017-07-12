var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({When}) {


    When('busco el término {stringInDoubleQuotes}', function (stringInDoubleQuotes, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });


});
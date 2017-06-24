var {defineSupportCode} = require('cucumber');


defineSupportCode(function({Given}) {

    Given('a user at login screen', function (callback) {

        throw "Custom error";

    });

});
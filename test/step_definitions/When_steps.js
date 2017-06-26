var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then}) {


    When('he introduces his credentials', function () {
        return this.gps.current.perform.business.enterCredentials(this.db.user)
    });

    When('he introduces wrong credentials', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('he access his global position', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

});
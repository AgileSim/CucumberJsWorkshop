var {defineSupportCode} = require('cucumber');

const poGlobalPosition = require('../page_objects/global_position');

defineSupportCode(function ({Given, When, Then}) {


    When('he introduces his credentials', function () {
        return gps.current.perform.business.enterCredentials(this.db.user)
    });

    When('he introduces wrong credentials', function () {
        return gps.current.perform.enter.input.username("wrong")
            .then(() => { return gps.current.perform.enter.input.password("credential")} )
            .then(() => {return gps.current.perform.click.button.enter()})
    });

    When('he access his global position', function () {
        return poGlobalPosition.go(this.db.user);
    });

});
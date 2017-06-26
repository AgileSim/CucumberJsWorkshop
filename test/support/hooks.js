var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After}) {

    Before(function () {
        return this.driver
            .init()
            .url(this.baseURL)
    });

    After(function() {
        return this.driver.end();
    });
});
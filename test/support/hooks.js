var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After}) {

    Before(function () {
        return driver
            .init()
            .url(this.baseURL)
            .then(()=>{log.debug("Driver initialized!")})
    });

    After(function() {
        return driver.end()
            .then(()=>{log.debug("Driver closed!")})
    });
});
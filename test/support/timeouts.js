var {defineSupportCode} = require('cucumber');

defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(20 * 1000);
});


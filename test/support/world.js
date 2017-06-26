require('chromedriver')
// var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');


function CustomWorld() {

}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

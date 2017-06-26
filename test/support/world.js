require('chromedriver')
// var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
let webdriverio = require('webdriverio');
let options = {
                desiredCapabilities: {
                    browserName: 'chrome',
                    chromeOptions: {
                        binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary'
                    }
                }
              };


function CustomWorld() {
    this.baseURL = "http://35.156.130.109:4200/";
    this.driver = webdriverio.remote(options);
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

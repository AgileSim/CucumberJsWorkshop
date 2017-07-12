'use strict';

const log4js = require('log4js');
const path = require('path');
const {defineSupportCode} = require('cucumber');
const webdriverio = require('webdriverio');
const options = {
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary'
        }
    }
  };

function CustomWorld() {

    global.log = log4js.getLogger()
    log.setLevel('debug');

    this.baseURL = "about:blank";
    global.driver = webdriverio.remote(options);

}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

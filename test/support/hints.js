"use strict";
let webdriverio = require('webdriverio');
let options = {
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            binary: '/Applications/Google\ Chrome\ Canary.app/Contents/MacOS/Google\ Chrome\ Canary'
        }
    }
};

function setupBrowserDriver() {
    this.baseURL = "http://35.156.130.109:4200/";
    this.driver = webdriverio.remote(options);
}


function browseToApp() {
    return this.driver
        .init()
        .url(this.baseURL)
}

function closeDriver() {
    return this.driver.end();
}
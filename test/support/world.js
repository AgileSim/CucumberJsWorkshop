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

const personas = require('./personas');
const db = require('./db');

function CustomWorld() {

    global.log = log4js.getLogger()
    log.setLevel('debug');

    this.baseURL = "http://35.156.130.109:4200/";
    this.driver = webdriverio.remote(options);

    log.debug("Loading Sims...");
    db.selection = personas.load(path.resolve(__dirname + '/../../node_modules/sims'));
    this.db = db;
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

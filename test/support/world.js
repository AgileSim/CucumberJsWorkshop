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
const gps = require('./gps');

function CustomWorld() {

    global.log = log4js.getLogger()
    log.setLevel('debug');

    this.baseURL = "http://35.156.130.109:4200/";
    global.driver = webdriverio.remote(options);

    log.debug("Loading Sims...");
    db.selection = personas.load(path.resolve(__dirname + '/../../node_modules/sims'));
    this.db = db;

    this.gps = require('./gps');
    this.gps.setCurrent(require('../page_objects/login'));
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
})

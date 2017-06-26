'use strict';


const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given('a user at login screen', function () {
        this.db.filter((user) => true);
        log.info("Selected user: " + this.db.user.credentials.username);
    });

    Given('a user with valid credentials at login page', function () {
        this.db.filter((user) => true);
        log.info("Selected user: " + this.db.user.credentials.username);
    });

    Given('a user with current accounts', function () {
        this.db.filter((user) => user.products.accounts);
        log.info("Selected user: " + this.db.user.credentials.username);
    });

});

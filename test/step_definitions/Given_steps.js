'use strict';


const {defineSupportCode} = require('cucumber');
const poWelcome = require('../page_objects/welcome');

defineSupportCode(function({Given}) {

    Given('que estoy en la pagina de wikipedia', function () {
       return poWelcome.go();
    });

});

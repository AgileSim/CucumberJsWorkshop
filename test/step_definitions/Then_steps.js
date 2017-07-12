'use strict';

const {defineSupportCode} = require('cucumber');
const poArticle = require('../page_objects/article');

defineSupportCode(function({Then}) {

    Then('debería ver una foto de la península', function () {
        return poArticle.assert.visible.image.kamchatka();
    });


});

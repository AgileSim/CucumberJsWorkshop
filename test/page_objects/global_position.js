'use strict';

const assert = require('assert');

let view = {
    css: {
        title: '.bktx-header-container',
        products:{
            accounts: {
                group: 'account-statement-container bktx-products-container[title="ACCOUNTS"]',
                alias: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-alias',
                number: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-number',
                balance: '.account-statement-container bktx-products-container[title="ACCOUNTS"] .account-balance',
            }
        }
    }
};

let strings = {
    "title": "BANKTRIX",
};


let self = {

    go: function() {
        if(db.user === undefined && db.user === "") {
            throw new Error("Error. Can't access into Global Position without selecting any user");
        }
        else {
            return poLogin.go()
                .then(poLogin.perform.business.enterCredentials(db.user))
                .then(self.assert.visible.title)
        }
    },

    assert: {
        visible: {
            title: function () {
                return driver.waitForVisible(view.css.title)
                    .getText(view.css.title).then((text) => {
                        console.log("Expecting title: <" + strings.title + ">. Found title: <" + text + ">.");
                        return assert(text === strings.title, "Error. Expenting title: <" + strings.title + ">. But found: <" + text + ">.");
                    })
            }
        }
    }

};

module.exports = self;
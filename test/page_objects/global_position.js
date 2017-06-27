'use strict';

const assert = require('assert');
const poLogin = require('./login');

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
    "title": "Posición Global",
};


let self = {
    user: undefined,

    go: function(user) {
        self.user = user;
        if(user === undefined && user === "") {
            throw new Error("Error. Can't access into Global Position without selecting any user");
        }
        else {
            return poLogin.go()
                .then(poLogin.perform.business.enterCredentials(user))
                .then(self.assert.visible.title)
                .then(()=>{gps.setCurrent(self)});
        }
    },

    assert: {
        visible: {
            title: function () {
                return driver.waitUntil(function() {
                        return driver.getText(view.css.title).then(title => { return title === strings.title});
                    }, 5*1000)
                    .then(() => {log.debug("Found title: " + strings.title)})
             }
        },
        business: {
            validate: {
                account: {
                    aliases: function (accounts) {
                        return driver.getText(view.css.products.accounts.alias)
                            .then((alias) => {
                                log.debug("Got alias:      " + JSON.stringify(alias));
                                let accAlias = accounts.map(acc => acc.alias);
                                log.debug("Accounts alias: " + JSON.stringify(accAlias));
                                return assert( alias.toString() === accAlias.toString(), "Error. Overall position page. Execting alias: " +
                                    alias.toString() + ". Found: " + accAlias.toString());
                            })
                    },
                    numbers: function (accounts) {
                        return driver.getText(view.css.products.accounts.number)
                            .then(number => {
                                log.debug("Got numbers:      " + JSON.stringify(number));
                                let accNumber = accounts.map(acc => acc.iban + " " + acc.number);
                                log.debug("Accounts numbers: " + JSON.stringify(accNumber));
                                return assert( number.toString() === accNumber.toString(), "Error. Overall position page. Execting number: " +
                                    number.toString() + ". Found: " + accNumber.toString());
                            })
                    },
                    balances: function (accounts) {
                        return driver.getText(view.css.products.accounts.balance)
                            .then(balances => {
                                log.debug("Got balances:      " + JSON.stringify(balances));
                                let accBalances = accounts.map(acc => acc.balance + " " + acc.currency);
                                log.debug("Accounts balances: " + JSON.stringify(accBalances));
                                return assert( balances.toString() === accBalances.toString(), "Error. Overall position page. Execting number: " +
                                    balances.toString() + ". Found: " + accBalances.toString());
                            })
                    }
                },
                product: {
                    accounts: function(accounts) {
                        return self.assert.business.validate.account.aliases(accounts)
                            .then(() => {return self.assert.business.validate.account.numbers(accounts)})
                            .then(() => {return self.assert.business.validate.account.balances(accounts)})
                    }
                },

            },
        }
    }

};

module.exports = self;
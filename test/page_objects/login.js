'use strict';

const gps = require('../support/gps');
const poGlobalPosition = require('./global_position');

let view = {
    css: {
        title: '.bktx-header-container',
        input: {
            username: ".login-user",
            password: ".login-password"
        },
        button: {
            enter: '.login-submit-button'
        },
        errorMessages: ".login-container span"
    }
};

let strings = {
    "title": "BANKTRIX",
    "errors": {
        "invalid_credentials": "Usuario o contraseña incorrectos"
    }
};


let self = {

    go: function() {
        log.debug(" Init --->> page_objects/login.go() <<---");
        return self.assert.visible.title()
            .then(()=>{ gps.setCurrent(self);});
    },

    assert: {
        visible: {
            title: function() {
                return driver.waitForVisible(view.css.title)
                    .getText(view.css.title).then((text) => {
                        console.log("Expecting title: <" + strings.title + ">. Found title: <" + text + ">.");
                        return assert(text === strings.title, "Error. Login page. Expenting title: <" + strings.title + ">. But found: <" + text + ">.");
                    });
            },
            label: {
                errorMessage: function () {
                    return driver.waitForVisible(view.css.errorMessages)
                        .getText(view.css.errorMessages).then((message) => { log.debug("Got error message: " + message)});
                }
            },
            input: {
                username: function () {
                    return driver.waitForVisible(view.css.input.username);
                },
                password: function () {
                    return driver.waitForVisible(view.css.input.password);
                }
            }
        },
        enabled: {

        }
    },

    perform: {
        enter: {
            input: {
                username: function (username) {
                    return driver.waitForVisible(view.css.input.username)
                        .setValue(view.css.input.username, username)
                },
                password: function (password) {
                    return driver.setValue(view.css.input.password, password);
                },

            }
        },
        click: {
            button: {
                enter: function () {
                    return driver.click(view.css.button.enter);
                }
            }
        },
        business: {
            enterCredentials: function (user) {
               log.debug("Entering credentials for user: " + user.credentials.username);
                return self.perform.enter.input.username(user.credentials.username)
                    .then(() =>  { return self.perform.enter.input.password((user.credentials.password)) })
                    .then(self.perform.click.button.enter)
                    .then(() => { gps.setCurrent(poGlobalPosition)});
            }
        }
    }

};

module.exports = self;
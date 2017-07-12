'use strict';

let view = {
    css: {
        image: 'img[alt="Kamchatka Peninsula.jpg"]',
    }
}

let self = {

    assert: {
        visible: {
            image: {
                kamchatka: function () {
                    return driver.waitForVisible(view.css.image);
                    // return driver.waitForVisible(view.css.image)
                    //     .pause(10000)

                }
            }
        }

    }
}

module.exports = self;
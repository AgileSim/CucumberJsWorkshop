'use strict';

let view = {
    css: {
        title: 'h1.central-textlogo img',
        input: {
            search: 'input#searchInput'
        }
    }
}

let self = {

    go: function () {
        return driver.url("https://www.wikipedia.org/")
            .waitForVisible(view.css.title, 5000)
            .waitForVisible(view.css.input.search)
    },
    perform: {
        input: {
            search: function (search) {
                return driver.set(view.css.input.search, search)
            }
        },
        click: {
            
        },
        business: {
            search: function (search) {

            }
        }
    }

}

module.exports = self;
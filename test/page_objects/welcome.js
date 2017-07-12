'use strict';

let view = {
    css: {
        title: 'h1.central-textlogo img',
        input: {
            search: 'input#searchInput'
        },
        button: {
            submit: 'button[type="submit"]'
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
                return driver.setValue(view.css.input.search, search)
            }
        },
        click: {
            search: function () {
                return driver.click(view.css.button.submit);
            }
        },
        business: {
            search: function (search) {
                return self.perform.input.search(search)
                    .then(self.perform.click.search)
            }
        }
    }

}

module.exports = self;
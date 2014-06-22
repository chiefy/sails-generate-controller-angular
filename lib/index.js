/**
 * sails-generate-controller-angular
 *
 * Usage:
 * `sails generate controller-angular`
 *
 * @type {Object}
 */

module.exports = {
    templatesDirectory: require('path').resolve(__dirname, '../templates'),
    before: require('./before'),
    targets: {
        './api/controllers/:filename': {
            template: './controller.template'
        },
        './assets/app/:id': {
            folder: {}
        },
        './assets/app/:id/:ng_filename_controller' : {
            template: './angular/controller.ejs'
        },
        './assets/app/:id/:ng_filename_routes' : {
            template: './angular/routes.ejs'
        },
        './assets/app/:id/:ng_filename_add_edit': {
            template: './angular/add-edit.html.ejs'
        },
        './assets/app/:id/:ng_filename_list': {
            template: './angular/list.html.ejs'
        }

    }
};
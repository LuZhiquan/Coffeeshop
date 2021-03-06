/*
 * File: app/controller/WelcomeController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Coffeeshop.controller.WelcomeController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'WelcomePanel',
            'RegisterPanel'
        ],

        control: {
            "button#loginButton": {
                tap: 'loginTapped'
            },
            "button#registerButton": {
                tap: 'registerTapped'
            }
        }
    },

    loginTapped: function(button, e, eOpts) {
        var ereg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            form = button.up('formpanel'),
            usernameField = form.down('#username'),
            passwordField = form.down('#password'),
            username = usernameField.getValue(),
            password = passwordField.getValue();

        // TODO: check username and password
        if (username.length < 1 || password.length < 1) {
            navigator.notification.alert('Username and password must be entered!', null, 'Error', 'Dismiss');
            return;
        }

        if (!ereg.test(username)) {
            navigator.notification.alert('Username format is invalid!', null, 'Error', 'Dismiss');
            return;
        }

        // Cleanup
        usernameField.setValue('');
        passwordField.setValue('');

        // Show home page
        var navigationView = form.up('#mainnavview');
        navigationView.push(Ext.create('Coffeeshop.view.HomePanel'));
    },

    registerTapped: function(button, e, eOpts) {
        // Show register page
        var navigationView = button.up('#mainnavview');
        navigationView.push(Ext.create('Coffeeshop.view.RegisterPanel'));
    }

});
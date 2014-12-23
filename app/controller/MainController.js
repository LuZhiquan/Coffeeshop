/*
 * File: app/controller/MainController.js
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

Ext.define('Coffeeshop.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        views: [
            'WelcomePanel',
            'MainView'
        ]
    },

    launch: function() {
        var me = this;
        console.log('controller launched.');

        if (!this.checkPlugins()) return;
        //navigator.notification.alert('plugins checked successfuly.', null, 'DEBUG', 'Dismiss');

        // Wait for device ready event
        document.addEventListener("deviceready", function () {
            //navigator.notification.alert("device is ready", "Debug");
            me.showInitialView();
        }, false);
    },

    checkPlugins: function() {
        if (!Ext.isDefined(window.device)) {
            alert('DEBUG: device plugin is not ready.');
            return false;
        }

        if (!Ext.isDefined(window.navigator)) {
            alert('DEBUG: navigator plugin is not ready.');
            return false;
        }

        if (!Ext.isDefined(window.navigator.notification)) {
            alert('DEBUG: navigator.notification plugin is not ready.');
            return false;
        }

        return true;
    },

    showInitialView: function() {
        var mainView = Ext.create('Coffeeshop.view.MainView', {fullscreen: true});
        mainView.push(Ext.create('Coffeeshop.view.WelcomePanel'));
    }

});
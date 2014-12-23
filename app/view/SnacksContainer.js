/*
 * File: app/view/SnacksContainer.js
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

Ext.define('Coffeeshop.view.SnacksContainer', {
    extend: 'Ext.Container',
    alias: 'widget.snackscontainer',

    requires: [
        'Ext.Toolbar',
        'Ext.dataview.DataView',
        'Ext.XTemplate'
    ],

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                height: 60,
                title: 'Snacks'
            },
            {
                xtype: 'dataview',
                cls: 'dataview-horizontal',
                itemId: 'snacksdataview',
                scrollable: 'vertical',
                inline: true,
                itemCls: 'itemWrapper',
                itemTpl: [
                    '<div class=\'itemImageWrapper\' style="background-image: url(resources/images/{image});" >',
                    '</div>',
                    '<div class=\'itemName\'>{name}</div>',
                    '<div class=\'itemCount\'>',
                    '    <tpl if="count &gt; 0">',
                    '        ({count} X)',
                    '        <input action=\'delete\' class=\'itemDelete\' type=\'button\' value=\'X\'/>',
                    '    </tpl>',
                    '</div>'
                ],
                store: 'SnacksStore'
            }
        ]
    }

});
Ext.define('Proba.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit'
    ],

    layout: {
        type: 'absolute' //za apsolutno pozicioniranje forme u okviru prozora
    },

    items: [{
        xtype: 'machine'
    }]
});

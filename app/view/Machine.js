Ext.define("Proba.view.Machine", {
    extend: 'Ext.form.Panel',

    requires: [
        'Proba.store.MachineType'
    ],

    alias: 'widget.machine', //zadajemo xtype od ove komponente koju mi pravimo

    initComponent: function() {

        Ext.apply(this, {
            title: 'Mašine',
            bodyPadding: 10,
            x: 20, //x koordinata u odnosu na levu stranu prozora
            y: 20, //y okkoordinata u odnosu na vrh prozora
            width: 300,
            height: 400,
            items:[{
                xtype: 'textfield',
                name: 'name', //naziv polja iz modela
                allowBlank: false, //mora da se unese nešto za naziv
                maxLength: 40, //mora da bude kraće od 40
                fieldLabel: 'Naziv mašine:'
            },{
                xtype: 'combo',
                name: 'type_id',
                store: {
                    type: 'machinetype' //alias stora iz kojeg uzimamo
                },
                displayField: 'type', //polje koje će biti prikazano u cb
                queryMode: 'local', //učitavamo lokalne podatke
                valueField: 'id', //polje iz kojeg se uzma vrednost
                fieldLabel: 'Tip mašine:'
            },{
                xtype: 'textfield',
                name: 'reg_number',
                allowBlank: false,
                maxLength: 10,
                fieldLabel: 'Registracija:'
            }],
            buttons: [{
                text: 'Sačuvaj'
            },{
                text: 'Zatvori'
            }]
        });

        this.callParent( arguments );
    }
});
Ext.define('Proba.store.MachineType', {
    extend: 'Ext.data.Store',

    alias: 'store.machinetype',

    model: 'Proba.model.MachineType',

    data: [{
        id: 1,
        type: 'Traktor'
    },{
        id: 2,
        type: 'Kombajn'
    }]
});

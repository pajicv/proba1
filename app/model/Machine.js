Ext.define('Proba.model.Machine', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'type_id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'reg_number', type: 'string' }
    ]
});

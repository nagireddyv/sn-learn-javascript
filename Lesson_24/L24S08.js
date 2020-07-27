//
// L24S09 - Getting the value
//
var list = [];
var list2 = [];
var getValueFor = 'sys_id';
var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {
    list.push(incGr.getValue(getValueFor));
    //incGr.sys_id always gets the same ID
    //It's getting the ID of the array instead of the ID of each element
    list2.push(incGr.sys_id);
}

gs.info('list=\n' + list.join('\n'));
gs.info('------------------------');
gs.info('list2=\n' + list2.join('\n'));
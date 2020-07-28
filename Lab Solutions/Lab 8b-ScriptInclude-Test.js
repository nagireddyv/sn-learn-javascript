//
// Lab 8b Script Include Test Script
//
var list = new SNJS().getRecords('problem', 5);
gs.info(list.length);


var list = new RecordLookup().getRecords('task', 5);
gs.info(JSON.stringify(list,null,4));
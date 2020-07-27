//
// L25S01 - ArrayUtil
//
var au = new ArrayUtil();
var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];
var newNames = au.unique(names);
gs.info(newNames.join(', '));



//Lab 6


var tableName = "task";
var recLimit = true;

function DisplayRecordsForTable(tableName, recordLimit){

  var returnList = [];

  var incGr = new GlideRecord(tableName);

  if(recordLimit && recordLimit > 0){
    incGr.setLimit(recordLimit);
  }

  incGr.query();
  
  while (incGr.next()) {
      returnList.push(incGr.getDisplayValue());
  }

  return returnList;
}

gs.info(DisplayRecordsForTable(tableName,recLimit).join('\n'));


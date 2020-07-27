//
// L30S02 - Parse example
//
var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
gs.info('length=' + libraryStr.length);
var libraryObj = JSON.parse(libraryStr);

gs.info('length=' + libraryObj.length);
gs.info(JSON.stringify(libraryObj, null, 4));


//loop through newly parsed object


var libraryStr = '[{"title":"Harry Potter and the Chamber of Secrets","author":"J.K. Rowling"},{"title":"Moby Dick","author":"Herman Melville"},{"title":"A Tale of Two Cities","author":"Charles Dickens"}]';
var libraryObj = JSON.parse(libraryStr);

for (var i = 0; i < libraryObj.length; i++) {
    var prop = libraryObj[i];
    gs.info(i + ' - Title: ' + prop.title + ' - Author: ' + prop.author);
  }



//Lab 7


function listRecords(tableName, limit) {

    var answer = [];
    var recGr = new GlideRecord(tableName);
    if (limit && limit > 0) {
        recGr.setLimit(limit);
    }
    recGr.query();
    
    while (recGr.next()) {

    var obj = {};

    obj.DisplayValue = recGr.getDisplayValue();
    //obj.SysID = recGr.getValue('sys_id');
    obj.SysID = recGr.getUniqueValue();

    answer.push(obj);
    }
    
    return answer;
}

var tempList = listRecords('incident',10);

gs.info(tempList.length);

gs.info(JSON.stringify(tempList, null, 4));

for (var i = 0; i < tempList.length; i++) {
    var prop = tempList[i];
    gs.info(i + ' - Display Value: ' + prop.DisplayValue + ' - SYS ID: ' + prop.SysID);
  }

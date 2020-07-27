//
// L29S01 - Array of Objects
//
var bookList = [
  {
    "title" : "Harry Potter and the Chamber of Secrets",
    "author" : "J.K. Rowling"
  },
  {
    "title" : "Moby Dick",
    "author" : "Herman Melville"
  },
  {
    "title" : "A Tale of Two Cities",
    "author" : "Charles Dickens"
  }
];
var len = bookList.length;
gs.info('Last author=' + bookList[len].author);

for (var i = 0; i < len; i++) {
  var book = bookList[i];
  gs.info(i + ' - Title: ' + book.title + ' - Author: ' + book.author);
}



//See all values for the glideRecord

var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.setLimit(1)
incGr.query();

while (incGr.next()) {

  for (var key in incGr) {
    gs.info('key=' + key + ' value=' + incGr[key]);
  }

}


//Get all properties and sample values for a table

function ExpandGlideRecord(tableName){

  var properties = [];

  var incGr = new GlideRecord(tableName);
  incGr.setLimit(1)
  //incGr.addQuery('number','TASK0020131')
  incGr.query();
  //incGr.orderBy('number');

  while(incGr.next()){

    for(var key in incGr){

      properties.push({"Key": key, "SampleValue": incGr[key] })

    }
  }
 
  return properties;
}


var tempList = ExpandGlideRecord('task');

gs.info(tempList.length);

gs.info(JSON.stringify(tempList,null,4));

for (var i = 0; i < tempList.length; i++) {
  var prop = tempList[i];
  gs.info(i + ' - Key: ' + prop.Key + ' - Sample Value: ' + prop.SampleValue);
}
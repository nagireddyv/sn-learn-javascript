//
// L21S01 - Simple Database query
//

// Get and display numbers on all incidents
var incGr = new GlideRecord('incident');
incGr.query();

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}



var incGr = new GlideRecord('incident');
incGr.addQuery('active',true);
incGr.query();

var rec = '';
var recInt = 0;

while (incGr.next()) {

  var rec = incGr.getValue('number');
  rec = rec.replace('INC','');
  recInt =  parseInt(rec);
  if(checkUnder50(recInt))
    gs.info(recInt);
}


function checkRecNumberLessThan100(num){

  if(num < 100){
    return true;
  }
  else{
    return false;
  }

}

function checkUnder50(num){

  if(checkRecNumberLessThan100(num)){

    if(num < 50){
      return true;
    }
    else{
      return false;
    }
  }
  else{
    return false;
  }

}
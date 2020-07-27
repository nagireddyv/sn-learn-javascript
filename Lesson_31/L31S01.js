//
// L31S01 More string stuff
// Find the position of a character or substring
//
var subject = 'Warning: Email is not working';

var stringList = ["Email","Warning","not"];

for(i=0;i<stringList.length;i++){

    var pos = subject.indexOf(stringList[i]);

    if(pos >= 0){
        gs.info("The word '"+stringList[i] + "' is found in the sentence");
    }
    else{
        gs.info("The word '"+stringList[i] + "' is NOT found in the sentence");
    }

}



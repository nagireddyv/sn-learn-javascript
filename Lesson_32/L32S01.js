//
// L32S01 - Recursion
//
function factorial(x) {

  // TERMINATION
  if (x < 0)
    return;

  // BASE
  if (x === 0)
    return 1;

  // RECURSION
  gs.info("Value of X: "+x);
  
  return x * factorial(x - 1);
}
gs.info("Factorial: "+factorial(5)); // 6


//Test

function pieces(x){

  if(x.length <=0){
    return;
  }

  gs.info("Current X: "+x);

  x = x.substring(x.length,1);

  return pieces(x);

}

pieces("What is your name");
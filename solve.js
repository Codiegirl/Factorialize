//factorial the product of an integer and all the integers below it.
function factorialize(num){
    var result = 1; //accumulate all the numbers. not 0 because anything times 0 is 0
    for(var i = 1; i<=num; i++){
      //result = result * i
      result *= i
    }
    return result;
  }
  
  factorialize(6)
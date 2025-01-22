// Anastasiia Kravchenko
function makeNegative(num) {
    if (num > 0) {
      return num*(-1)
    } else {
      return num
    }
  }
// End Anastasiia Kravchenko

//Mykola Kokodynskyy
//https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions/javascript?filter=me&sort=best_practice&invalids=false

function makeNegative(num) {
  //we check if our "num" is greater than zero, if it is greater then we make it negative,
  //in other case we just return "num"
  if(num > 0)
    {
      return -num;
    }
      return num;
}
//End Mykola Kokodynskyy

//Nikita Demianov
function makeNegative(num) {
  return Math.abs(num) * -1
}
//End Nikita Demianov
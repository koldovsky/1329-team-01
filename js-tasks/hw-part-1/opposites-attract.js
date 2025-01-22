// Anastasiia Kravchenko
// -------- 1 OPTION --------
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }
// -------- 2 OPTION --------
function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0) && (flower2 % 2 !== 0) ? true : (flower2 % 2 === 0) && (flower1 % 2 !== 0) ? true : false;
  }
// End Anastasiia Kravchenko

//Mykola Kokodynskyy
//https://www.codewars.com/kata/555086d53eac039a2a000083/solutions/javascript?filter=me&sort=best_practice&invalids=false
function lovefunc(flower1, flower2){
  if (((flower1 % 2) === 0 && (flower2 % 2) !== 0) || 
      ((flower1 % 2) !== 0 && (flower2 % 2) === 0)) {
  return true;
  }
  return false
}
//End Mykola Kokodynskyy

//Nikita Demianov
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2 ? true : false;
}
//End Nikita Demianov
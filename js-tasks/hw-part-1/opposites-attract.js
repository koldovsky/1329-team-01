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
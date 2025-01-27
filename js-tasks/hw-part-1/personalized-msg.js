// Anastasiia Kravchenko
function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }
// End Anastasiia Kravchenko

//Mykola Kokodynskyy
//https://www.codewars.com/kata/5772da22b89313a4d50012f7/solutions/javascript?filter=me&sort=best_practice&invalids=false

function greet (name, owner) {
  //we check the equality of "name" and "owner", if they are equal
  //then we return "Hello boss", otherwise "Hello guest"
  if(name === owner)
    {
      return "Hello boss";
    }
  
    return "Hello guest";
}
//End Mykola Kokodynskyy

//Nikita Demianov
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
//End Nikita Demianov

//Vlad Pylypenko
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
//End Vlad Pelepenko
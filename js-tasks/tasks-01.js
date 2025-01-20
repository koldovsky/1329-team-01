// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  const ourTime = pontoonDistance / youSpeed;
  if (dolphin) {
    sharkSpeed = sharkSpeed / 2;
  }
  const sharkTime = sharkDistance / sharkSpeed;
  if (ourTime < sharkTime) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}

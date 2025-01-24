//Nikita Demianov
function min(arr, toReturn) {
    return toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}
//End Nikita Demianov
//Mykola Kokodynskyy
function min(arr, toReturn) { 
    let minElement = arr[0];
    let indexOfMinElement = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < minElement)
        {
          minElement = arr[i];
          indexOfMinElement = i;
        }
    }
    if(toReturn === "value")
      return minElement;
    
      return indexOfMinElement;
  }
  //End Mykola Kokodynskyy
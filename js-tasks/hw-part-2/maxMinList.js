//Demianov Nikita
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}
//End Demianov Nikita

//Mykola Kokodynskyy
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
//End Mykola Kokodynskyy

// Anastasiia Kravchenko
var min = function(list){
    
    return list.reduce((previous, next) => (next < previous) ? next : previous);
}

var max = function(list){
    
    return list.reduce((previous, next) => (next > previous) ? next : previous);
}
//End Anastasiia Kravchenko
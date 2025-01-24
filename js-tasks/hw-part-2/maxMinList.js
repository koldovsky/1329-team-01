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
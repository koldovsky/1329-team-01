// Anastasiia Kravchenko
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return +laLigaGoals + +copaDelReyGoals + +championsLeagueGoals;
}
// End Anastasiia Kravchenko

//Hrunt Gmitry
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  }
//End Hrunt Gmitry

//Nikita Demianov
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return [...arguments].reduce((acc, next) => acc + next, 0);
}
//End Nikita Demianov
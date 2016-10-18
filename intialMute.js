console.log("INITIALMUTE");

var muteButton = document.getElementsByClassName("player-button--volume");
var muteToggle = document.getElementsByClassName("mute-button");

console.log(muteToggle[0]);
console.log(muteToggle[0].style.display);

muteButton[0].click();

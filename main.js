var gameData = {
    altayLastWinUnix : 1669575600,
    kskLastWinUnix : 1460293200,
    unixTime : 0,
    altayString : "",
    kskString : "",
    altaySpan : 0,
    kskSpan : 0
}

function updateTimeLabels()
{
    gameData.unixTime = Math.floor(Date.now() / 1000)
    gameData.kskSpan = gameData.unixTime - gameData.kskLastWinUnix
    gameData.altaySpan = gameData.unixTime - gameData.altayLastWinUnix
    gameData.kskString = (Math.floor(gameData.kskSpan / 86400 / 365)).toString() + " yıl " + (Math.floor(gameData.kskSpan / 86400 % 365)).toString() +" gündür"
    gameData.altayString = (Math.floor(gameData.altaySpan / 86400 / 365)).toString() + " yıl " + (Math.floor(gameData.altaySpan / 86400 % 365)).toString() +" gündür"
    document.getElementById("kskLabel").innerHTML = "GÖZTEPEMİZ KSKya " + gameData.kskString + " yenilmiyor"
    document.getElementById("altayLabel").innerHTML = "GÖZTEPEMİZ Altaya " + gameData.altayString + " yenilmiyor"
}
/*
var mainGameLoop = window.setInterval(function(){
    updateTimeLabels()
}, 1000)
*/
window.onload = updateTimeLabels;
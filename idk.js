var canvas;
var context;
var thrower1;

var thrower = {
    totalNumber: 0,
    timesLaunched: 0,
    lastRecord: 0,
    currentJump: 0
};


function init() {
    canvas = document.getElementById('canvas');
    thrower1 = thrower;
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //document.getElementById("increment").style.width = "300px";
    //document.getElementById("launch").setAttribute("style","width:" + canvas.width/2 + "px");
    
}

function add() {
    thrower1.totalNumber++;
}

function launch() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (thrower1.totalNumber>0) thrower1.currentJump = Math.log(thrower1.totalNumber);
    else thrower1.currentJump=0;
    document.getElementById("value").innerText=Math.round(thrower1.currentJump*1000)/1000;
    thrower1.timesLaunched++;
    if(thrower1.currentJump > thrower1.lastRecord) thrower1.lastRecord = thrower1.currentJump;
}

window.onload = init; 
/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
const KEYS = {
  "LEFT": 37,
  "UP": 38,
  "RIGHT": 39,
  "DOWN": 40,
  "ENTER": 13,
  "W": 87,
  "A": 65,
  "S": 83,
  "D": 68
}
var walker1 = {
  x: 0,
  y: 0,
  xSpeed: 0,
  ySpeed: 0,
  it: false
}
var walker2 = {
  x: 1290,
  y: 700,
  xSpeed: 0,
  ySpeed: 0,
  it: false
}
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  //handles what happens when the players are clicked
  $("#walker1").on('click', handleWalker1Click);
  $("#walker2").on('click', handleWalker2Click);

  //deciding who is "it"
  var randomNum = Math.random() * 2;
  if(randomNum > 1) {
    walker1.it = true
  } else {
    walker2.it = true
  }
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionWalker();
    wallCollision();
    redrawWalker();
    whoIsIt();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEYS.LEFT) {
      walker1.xSpeed = -5
    }
    if(event.which === KEYS.UP) {
      walker1.ySpeed = -5
    }
    if(event.which === KEYS.RIGHT) {
      walker1.xSpeed = 5
    }
    if(event.which === KEYS.DOWN) {
      walker1.ySpeed = 5
    }
    if(event.which === KEYS.A) {
      walker2.xSpeed = -5
    }
    if(event.which === KEYS.W) {
      walker2.ySpeed = -5
    }
    if(event.which === KEYS.D) {
      walker2.xSpeed = 5
    }
    if(event.which === KEYS.S) {
      walker2.ySpeed = 5
    }
  }

  function handleKeyUp(event) {
    if(event.which === KEYS.LEFT) {
      walker1.xSpeed = 0
    }
    if(event.which === KEYS.UP) {
      walker1.ySpeed = 0
    }
    if(event.which === KEYS.RIGHT) {
      walker1.xSpeed = 0
    }
    if(event.which === KEYS.DOWN) {
      walker1.ySpeed = 0
    }
    if(event.which === KEYS.A) {
      walker2.xSpeed = 0
    }
    if(event.which === KEYS.W) {
      walker2.ySpeed = 0
    }
    if(event.which === KEYS.D) {
      walker2.xSpeed = 0
    }
    if(event.which === KEYS.S) {
      walker2.ySpeed = 0
    }
  }

  function handleWalker1Click() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    console.log(randomColor)
    $("#walker1").css("background-color", randomColor);
  }

  function handleWalker2Click() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $("#walker2").css("background-color", randomColor);
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handlePlayerCollision() {
    if(walker1.x === walker2.x) {
      if (walker1.it === true) {
        walker1.it = false
        walker2.it = true
      }
      if(walker2.it === true) {
        walker1.it = true
        walker2.it = false
      }
    }
    
  }

  function whoIsIt() {
    if(walker1.it === true) {
      $("#walker1").css("background-color", "#FF0000")
      $("#walker2").css("background-color", "#00FF00")
    }
    if(walker2.it === true) {
      $("#walker2").css("background-color", "#FF0000")
      $("#walker1").css("background-color", "#00FF00")
    }
  }

  function wallCollision() {
    if(walker1.x < 0) {
      walker1.x = 0
    }
    if(walker1.x > $("#board").width()-50) {
      walker1.x = $("#board").width()-50
    }
    if(walker1.y <= 0) {
      walker1.y = 0
    }
    if(walker1.y >= $("#board").height()-50) {
      walker1.y = $("#board").height()-50
    }
    if(walker2.x < 0) {
      walker2.x = 0
    }
    if(walker2.x > $("#board").width()-50) {
      walker2.x = $("#board").width()-50
    }
    if(walker2.y <= 0) {
      walker2.y = 0
    }
    if(walker2.y >= $("#board").height()-50) {
      walker2.y = $("#board").height()-50
    }
  }

  function repositionWalker() {
    walker1.x += walker1.xSpeed
    walker1.y += walker1.ySpeed
    walker2.x += walker2.xSpeed
    walker2.y += walker2.ySpeed
  }  
  function redrawWalker() {
    $("#walker1").css("left", walker1.x);
    $("#walker1").css("top", walker1.y);
    $("#walker2").css("left", walker2.x);
    $("#walker2").css("top", walker2.y);
  }


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
